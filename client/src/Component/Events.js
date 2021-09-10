import React from "react";

import EV4 from "../images/evnet4.jpg";
import EV5 from "../images/evnet5.jpg";
import Navv from "./Navv";
import Fan from "../images/fan.jpeg";
import Cartage from "../images/cartage.jpg";
import Rbou5 from "../images/be-tounsi-couv.jpg";
import MUS1 from "../images/eventMusic1.jpeg";
import CIN1 from "../images/cinema1.jpg";
import ZEVENT1 from "../images/z-event5.jpg";
import SICCA1 from "../images/SICCAJAZ.webp";
import BARIMA from "../images/elbarima.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllEvents } from "../redux/actions/eventActions";
import Footer from "./Footer";

import "../Component/Events.css";

export default function Event() {
  const dispatch = useDispatch();
  const eventData = useSelector((state) => state.eventStore.event);

  useEffect(() => {
    getAllEvents()
      .then(dispatch)
      .catch((e) => console.log("Error", e));
  });
  return (
    <div className="">
      <Navv />
      <div className=" one mt-5 ">
        <h1>Catégorie</h1>
      </div>
      <div className="acceuil-cward container">
        <div className=" acceuil-cward2">
          <div
            className="col-md-7
           cward"
          >
            <div class="card mb-3">
              <img src={ZEVENT1} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">festival de la chanson tunisienne</h5>
                <p class="card-text">
                  Lors d’une conférence de presse tenue mardi à la Cité de la
                  culture, le comité directeur de la 20ème édition du festival
                  de la chanson tunisienne a dévoilé le programme de cette
                  édition 2021 qui affiche son retour après une absence de plus
                  de 20 ans.
                </p>
                <p class="card-text">
                  <small class="text-muted">17/04/2021</small>
                </p>
              </div>
            </div>
            <div class="card  mb-4">
              <img src={Rbou5} class="card-img-top" alt="rbou5" />
              <div class="card-body">
                <h5 class="card-title">
                  L’association Be Tounsi organise une exposition artisanale au
                  palais Abdellia à La Marsa
                </h5>
                <p class="card-text">
                  Pour l’occasion, “Be Tounsi a sélectionné une cinquantaine
                  d’exposants récemment découverts et a fait la part belle aux
                  jeunes talents et aux régions. 8 artisanes du nord-ouest
                  viendront exposer leur créations et partager leur passion avec
                  le grand public”, indique Hela Bennour, membre de
                  l’association Be Tounsi, citée par la TAP.
                </p>
                <p class="card-text">
                  <small class="text-muted">25/08/2021</small>
                </p>
              </div>
            </div>
            <div class="card mb-4">
              <img src={Fan} class="card-img-top" alt="fan" />
              <div class="card-body">
                <h5 class="card-title">L’art contemporain de Carthage</h5>
                <p class="card-text">
                  Au Hall central de la Cité de la Culture à Tunis, est installé
                  un coin d’exposition pour les galeristes étrangers présents
                  aux Journées d’Art Contemporain de Carthage (JACC) 2019,
                  ouvertes samedi.
                </p>
                <p class="card-text">
                  <small class="text-muted">10/07/2021</small>
                </p>
              </div>
            </div>
            <div class="card mb-4">
              <img src={SICCA1} class="card-img-top" alt="event5" />
              <div class="card-body">
                <h5 class="card-title">
                  Le Tunisia Siccaveneria International Jazz festival « Sicca
                  Jazz »
                </h5>
                <p class="card-text">
                  Sicca Jazz fidèle à ses traditions, porte le gage de la
                  création en misant sur le SICCAVENERIA ART LAB et les
                  résidences artistiques. Pour cette 6ème édition, des
                  résidences artistiques sont au programme.
                </p>
                <p class="card-text">
                  <small class="text-muted">15/04/2021</small>
                </p>
              </div>
            </div>
            <div class="card mb-4">
              <img src={CIN1} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">BIK N3ICH UN FILS</h5>
                <p class="card-text">
                  Après Venise, Hambourg, Londres, Mumbai, Namur et Carthage, le
                  film tunisien Un fils (Bik N3ich) de Mehdi Barsaoui, avec dans
                  les principaux rôle Sami Bouajila (Prix de Meilleure
                  interprétation masculine, section Horizons
                </p>
                <p class="card-text">
                  <small class="text-muted">02/25/2021</small>
                </p>
              </div>
            </div>
            <div class="card mb-4">
              <img src={BARIMA} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  Le Salon tunisien d’art contemporain au Palais Keireddine à la
                  Médina de Tunis.
                </h5>
                <p class="card-text">
                  Un grand nombre d’artistes tunisiens participent au Salon
                  tunisien d’art contemporain démarré, vendredi 4 juin , au
                  Palais Keireddine à la Médina de Tunis.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div class="card mb-4">
              <img src={MUS1} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 stick">
            <div className="col-md-6">
              <lu className="d-flex buttons">
                <li>
                  <button className="col-md  myButton">Musical</button>
                </li>
                <li>
                  <button className="col-md  myButton"> Social </button>
                </li>
                <li>
                  <button className="col-md  myButton">Culturel</button>
                </li>
                <li>
                  {" "}
                  <button className="col-md myButton">Primary</button>
                </li>
              </lu>
            </div>
            {eventData
              .filter((el) => el.catégorie === "CINIMA")

              .map((el) => (
                <div className=" events-card" accordion-button>
                  <div class="card mb-3 ">
                    <div class="row no-gutters">
                      <div class="col-md-4">
                        <img
                          src={el.image}
                          className="card-img-event"
                          alt="..."
                        />
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">{el.title}</h5>
                          <p class="card-text">{el.description}</p>
                          <p class="card-text">
                            <small class="text-muted">
                              Last updated 3 mins ago
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            <hr />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
