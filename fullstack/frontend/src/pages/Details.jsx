import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import UpperContact from "../components/UpperContact/UpperContact";
import Footer from "../components/Footer/Footer";
import Loading from "../components/Loading/Loading";

import DiagnosisDetails from "../components/DiagnosisDetails/DiagnosisDetails";

// Data
import image_qr_code from "../assets/images/qr_code.png";

var details = {
  userId: 1,
  title: "Title",
  qr_code: image_qr_code,
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam eligendi laborum? Omnis unde ad, a nihil voluptates voluptatum cupiditate! Numquam, voluptate mollitia? Facilis, illum quia? Error quas maxime inventore.",
  symp: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium pariatur tempora iure saepe vero voluptatum, voluptate cupiditate architecto sed, perspiciatis reprehenderit doloremque at hic iste harum, autem animi in? Sequi.",
  cons: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis iusto iste dicta officia earum quod iure quo facere praesentium voluptatum inventore facilis, ipsam incidunt exercitationem quibusdam odio a obcaecati ea.",
  medic: [
    {
      name: "Medication 11111111111111111111111111111",
      image: "https://wellify.in/cdn/shop/products/i-Pill-Daily-Pack-of-2.jpg",
    },
    {
      name: "Medication 2",
      image: "https://wellify.in/cdn/shop/products/i-Pill-Daily-Pack-of-2.jpg",
    },
    {
      name: "Medication 3",
      image: "https://wellify.in/cdn/shop/products/i-Pill-Daily-Pack-of-2.jpg",
    },
    {
      name: "Medication 3",
      image: "https://wellify.in/cdn/shop/products/i-Pill-Daily-Pack-of-2.jpg",
    },
    {
      name: "Medication 3",
      image: "https://wellify.in/cdn/shop/products/i-Pill-Daily-Pack-of-2.jpg",
    },
    {
      name: "Medication 3",
      image: "https://wellify.in/cdn/shop/products/i-Pill-Daily-Pack-of-2.jpg",
    },
    {
      name: "Medication 3",
      image: "https://wellify.in/cdn/shop/products/i-Pill-Daily-Pack-of-2.jpg",
    },
  ],
};

export default function Details() {
  let { id } = useParams();

  useEffect(() => {
    // Update the document title
    document.title = `SANTÉIA - Détails du diagnostic | User: ${id}`;
  }, []); // This effect runs only once after the initial render

  return (
    <div style={{ overflow: "hidden" }}>
      <Loading />
      <UpperContact />
      <Navbar />

      <DiagnosisDetails details={details} />

      <Footer />
    </div>
  );
}
