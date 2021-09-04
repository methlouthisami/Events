import React from "react";
import Théatre from "../images/thétre3.jpg"
import Cartage from '../images/Cartage.jpg'
import Medina from "../images/medina.jpg";

import "../App.css";
const GalleryAcceuil = () => {
  return (
    <>
      <div>
        <h1 id="history">Monuments Culturels</h1>
      </div>
      <div className="container mt-5 mb-5 ">
        <div class="row mt-4">
          <div class="col-lg-6 col-md-3 Gallery">
            <img
              src={Medina}
              alt="Lightbox image 2"
              class="w-100 medina"
              style={{ height: "280px" }}
            />
          </div>
          <div class="col-lg-6 mt-2 ">
            <p className="text-justify" style={{ fontSize: "1.2rem" }}>
              <h2 className="city">La Cité de la Culture</h2> est un complexe
              culturel tunisien de neuf hectares situé en plein centre de la
              ville de Tunis, à l'emplacement de l'ancienne Foire internationale
              de Tunis sur l'avenue Mohammed-V. Les travaux sont entamés en 2003
              et interrompus à multiples reprises, pour être achevés en 2018.
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6 mb-4">
            <p className="text-justify" style={{ fontSize: "1.2rem" }}>
              <h2 className="city">Théâtre municipal</h2>La première version du
              théâtre, dont la capacité d'accueil ne dépasse pas 856 places, est
              démolie en 1909. Le théâtre est transformé et agrandi pour
              accueillir 1 350 sièges sur quatre niveaux (orchestre, balcon,
              mezzanine et galerie). La nouvelle salle, dont seule la façade
              extérieure est laissée intacte, est inaugurée à nouveau le 4
              janvier 19114.
            </p>
          </div>
          <div className="col-md-6 Gallery">
            <img
              src={Théatre}
              alt="..."
              className="medina"
              style={{ width: "100%", height: "280px" }}
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6 Gallery">
            <img
              className="medina"
              src={Cartage}
              alt="..."
              style={{ width: "100%", height: "280px" }}
            />
          </div>
          <div className="col-md-6 mb-4">
            <p className="text-justify" style={{ fontSize: "1.2rem" }}>
              <h2 className="city">Le festival international de Carthage</h2>{" "}
              est un festival qui a lieu tous les ans aux mois de Juillet et
              Août dans la ville côtière de Carthage et plus précisément au
              Théâtre Antique de Carthage « qui a été construit durant le
              deuxième siècle, disposant de plusieurs caractéristiques tel que
              son emplacement ou encore son architecture ».
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryAcceuil;
