import React from "react";

export default function Footer() {
  const currentDate = new Date();

  const year = currentDate.getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p>
              Copyright © {year} SANTÉIA Co., Ltd. Tous droits réservés.
              <br />
              Redéignateur:{" "}
              <a
                href="https://github.com/imossama"
                target="_parent"
                title="Designer's Github"
              >
                ETTAQAFI OSSAMA
              </a>
              <br />
              Crédits:{" "}
              <a
                href="https://templatemo.com"
                target="_parent"
                title="TemplateMo"
              >
                TemplateMo
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
