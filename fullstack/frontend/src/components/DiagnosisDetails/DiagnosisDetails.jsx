import React from "react";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";

import image from "../../assets/images/result.png";
import logo from "../../assets/images/logo.png";
import stamp from "../../assets/images/stamp.png";
import signature from "../../assets/images/signature.png";

import { getUserIdFromLocalStorage } from "../../services/logged_userId";
import { getPersonalDataById } from "../../services/apiPersonal";

export default function DiagnosisDetails({ type, diagnosticData }) {
  const diagnostic = type === 0 ? diagnosticData.diagnostic : diagnosticData;
  const userId = getUserIdFromLocalStorage();

  const handleGeneratePdf = async (event) => {
    event.preventDefault();

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("fr-FR");
    const formattedTime = currentDate.toLocaleTimeString("fr-FR");

    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    // Add logo
    const imgData = logo;
    doc.addImage(imgData, "PNG", 15, 10, 30, 15);

    // Add formatted date and time
    doc.setFontSize(10);
    doc.setTextColor("#555");
    doc.text(formattedDate + " " + formattedTime, 160, 20);

    // Add diagnostic title
    const maxTitleWidth = 100;
    const titleText = doc.splitTextToSize(diagnostic.title, maxTitleWidth);
    const titleHeight = titleText.length * 5;
    doc.setFontSize(20);
    doc.setTextColor("#333");
    doc.setLineWidth(80);
    if (titleHeight > 25) {
      doc.text(titleText, 15, 50, { maxWidth: maxTitleWidth });
    } else {
      doc.text(diagnostic.title, 15, 50);
    }

    // Add QR code image
    const qrCodeData = "http://127.0.0.1:8080/" + diagnostic.qr_code;
    doc.addImage(qrCodeData, "PNG", 15, 55, 50, 50);

    // Add Personal Data
    try {
      const personalData = await getPersonalDataById(userId);
      doc.setFontSize(12);
      doc.setTextColor("#555");
      doc.text(70, 70, "Données personnelles");
      doc.setTextColor("#333");
      doc.text(70, 80, `Prénom: ${personalData.first_name}`);
      doc.text(70, 85, `Nom de famille: ${personalData.last_name}`);
      doc.text(70, 90, `Date de naissance: ${personalData.date}`);
    } catch (error) {
      // console.error("Error fetching personal data:", error);
    }

    // Add description
    const maxTextWidth = 120;
    const maxTextHeight = 100;
    const descriptionText = doc.splitTextToSize(
      diagnostic.description || "Aucune donnée n'est fournie.",
      maxTextWidth
    );
    const descriptionHeight = descriptionText.length * 5;
    if (descriptionHeight > maxTextHeight) {
      descriptionText.length = Math.floor(maxTextHeight / 5);
      descriptionText.push("...");
    }
    doc.setFontSize(12);
    doc.setTextColor("#555");
    doc.text(15, 120, "Description");
    doc.setTextColor("#333");
    doc.text(15, 130, descriptionText, {
      maxWidth: maxTextWidth - 40,
      align: "left",
    });

    // Add Conseils
    const conseilsText = diagnostic.advice || "Aucune donnée n'est fournie.";
    const conseilsLines = doc.splitTextToSize(conseilsText, maxTextWidth);
    const conseilsHeight = conseilsLines.length * 5;
    if (conseilsHeight > maxTextHeight) {
      conseilsLines.length = Math.floor(maxTextHeight / 5);
      conseilsLines.push("...");
    }
    doc.setTextColor("#555");
    doc.text(50, 130 + descriptionHeight + 40, "Conseils");
    doc.setTextColor("#333");
    doc.text(50, 130 + descriptionHeight + 50, conseilsLines, {
      maxWidth: maxTextWidth,
      align: "left",
    });

    // Add symptoms
    const symptomsText = Array.isArray(diagnostic.symptoms)
      ? diagnostic.symptoms.join("\n, ")
      : diagnostic.symptoms || "Aucune donnée n'est fournie.";
    const maxSymptomsWidth = 85;
    const symptomsLines = doc.splitTextToSize(symptomsText, maxSymptomsWidth);
    const symptomsHeight = symptomsLines.length * 5;
    if (symptomsHeight > maxTextHeight) {
      symptomsLines.length = Math.floor(maxTextHeight / 5);
      symptomsLines.push("...");
    }
    doc.setFontSize(12);
    doc.setTextColor("#555");
    doc.text(105, 120, "Symptômes");
    doc.setTextColor("#333");
    doc.text(105, 130, symptomsLines, { maxWidth: maxTextWidth });

    // Add Médicaments
    const medicamentsText =
      Array.isArray(diagnostic.medicines) && diagnostic.medicines.length > 0
        ? diagnostic.medicines.map((medic) => medic.name).join(", ")
        : "Aucune donnée n'est fournie.";
    const medicamentsLines = doc.splitTextToSize(medicamentsText, maxSymptomsWidth);
    const medicamentsHeight = medicamentsLines.length * 5;
    if (medicamentsHeight > maxTextHeight) {
      medicamentsLines.length = Math.floor(maxTextHeight / 5);
      medicamentsLines.push("...");
    }
    doc.setTextColor("#555");
    doc.text(105, 130 + symptomsHeight + 5, "Médicaments");
    doc.setTextColor("#333");
    doc.text(105, 130 + symptomsHeight + 15, medicamentsLines, {
      maxWidth: maxSymptomsWidth,
    });

    doc.addImage(stamp, "PNG", 160, 250, 40, 40);
    doc.addImage(signature, "PNG", -10, 260, 70, 20);

    // Save the PDF
    doc.save(`${userId}_${diagnostic.id}.pdf`);
  };

  return (
    <div className="main-banner">
      <div className="container">
        <form id="question" action="" method="post">
          <div className="row">
            {type === 0 && (
              <div className="col-lg-3">
                <div className="right-image">
                  <img src={image} alt="" />
                </div>
              </div>
            )}
            <div className="col-lg-8">
              <div className="col-lg-12">
                <div className="left-content show-up header-text">
                  <div className="row">
                    <div className="col-lg-12">
                      <h6>{diagnostic.date}</h6>
                      <h2>{diagnostic.title}</h2>

                      {type === 0 && (
                        <p>
                          Vous pouvez partager le diagnostic avec votre famille
                          ou amis,{" "}
                          <a href="" onClick={handleGeneratePdf}>
                            Enregistrez-le en PDF
                          </a>{" "}
                          sur votre ordinateur, ou{" "}
                          <Link to="/diagnostic">Refaire le diagnostic.</Link>
                        </p>
                      )}

                      {type === 1 && userId === diagnostic.userId && (
                        <p>
                          Vous pouvez partager le diagnostic avec votre famille
                          ou amis,{" "}
                          <a href="" onClick={handleGeneratePdf}>
                            Enregistrez-le en PDF
                          </a>{" "}
                          sur votre ordinateur, ou{" "}
                          <Link to="/diagnostic">Refaire le diagnostic.</Link>
                        </p>
                      )}

                      {type === 1 && userId !== diagnostic.userId && (
                        <p>
                          Ce diagnostic est unique à l'utilisateur, avec
                          l'identifiant: {diagnostic.userId}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 mt-5">
              <div className="col-lg-12">
                <div className="left-content show-up header-text">
                  <div className="row">
                    <div className="col-lg-12">
                      <h4>Description</h4>
                      <p>
                        {diagnostic.description
                          ? diagnostic.description
                          : "Aucune donnée n'est fournie."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="left-content show-up header-text">
                  <div className="row">
                    <div className="col-lg-12">
                      <h4>Symptômes</h4>
                      {diagnostic.symptoms ? (
                        Array.isArray(diagnostic.symptoms) ? (
                          <ul className="list-group mb-4 mt-3">
                            {diagnostic.symptoms.map((symptom, index) => (
                              <li key={index} className="list-group-item">
                                {symptom}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p>{diagnostic.symptoms}</p>
                        )
                      ) : (
                        <p>Aucune donnée n'est fournie.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="left-content show-up header-text">
                  <div className="row">
                    <div className="col-lg-12">
                      <h4>Conseils</h4>
                      <p>
                        {diagnostic.advice
                          ? diagnostic.advice
                          : "Aucune donnée n'est fournie."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="left-content show-up header-text">
                  <div className="row">
                    <div className="col-lg-12">
                      <h4>Médicaments</h4>
                      <div className="row mt-2">
                        {diagnostic.medicines?.length === 0 ? (
                          <p>Aucune donnée n'est fournie.</p>
                        ) : (
                          (diagnostic.medicines || []).map((medic, index) => (
                            <div className="col-4 mt-4" key={index}>
                              <a href={medic.link}>
                                <div className="medic">
                                  <div className="icon">
                                    {/* <img src={medic.logo} alt={medic.name} /> */}
                                    <div className="text-container">
                                      {medic.name}
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-4 qr_code">
              <div className="left-content show-up header-text">
                <div className="row">
                  <div className="col-lg-6">
                    <h4>QR Code</h4>
                    <img src={"http://127.0.0.1:8080/" + diagnostic.qr_code} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
