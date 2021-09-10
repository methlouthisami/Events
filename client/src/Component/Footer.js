import React from "react";
import './Footer.css'
export default function Footer() {
  return (
    <div>
      <footer class="nb-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="about">
                <img
                  src="images/logo.png"
                  class="img-responsive center-block"
                  alt=""
                />
                <h5 style={{fontSize:"17px", color: "#b78c33" }}>
                  CIBLES CETTE PLATEFORME VISE PRINCIPALEMENT LES GENS QUI SONT
                  PASIONNÉS PAR LES EVENNEMENTS CULTURELS EN GÉNÉRAL.
                </h5>

                <div class="social-media ">
                  <ul class="list-inline d-flex justify-content-center mt-5">
                    <li>
                      <a href="/" title="">
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/" title="">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/" title="">
                        <i class="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/" title="">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-md-3 col-sm-6 ">
              <div class="footer-info-single">
                <h2 class="title">Help Center</h2>
                <ul class="list-unstyled ">
                  <li>
                    <a href="/" title="">
                      <i class="fa fa-angle-double-right"></i> How to Pay
                    </a>
                  </li>
                  <li>
                    <a href="/" title="">
                      <i class="fa fa-angle-double-right"></i> FAQ's
                    </a>
                  </li>
                  <li>
                    <a href="/" title="">
                      <i class="fa fa-angle-double-right"></i> Sitemap
                    </a>
                  </li>
                  <li>
                    <a href="/" title="">
                      <i class="fa fa-angle-double-right"></i> Delivery Info
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-md-3 col-sm-6">
              <div class="footer-info-single">
                <h2 class="title">Customer information</h2>
                <ul class="list-unstyled">
                  <li>
                    <a href="/" title="">
                      <i class="fa fa-angle-double-right"></i> About Us
                    </a>
                  </li>
                  <li>
                    <a href="/" title="">
                      <i class="fa fa-angle-double-right"></i> FAQ's
                    </a>
                  </li>
                  <li>
                    <a href="/" title="">
                      <i class="fa fa-angle-double-right"></i> Sell Your Items
                    </a>
                  </li>
                  <li>
                    <a href="/" title="">
                      <i class="fa fa-angle-double-right"></i> Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="/" title="">
                      <i class="fa fa-angle-double-right"></i> RSS
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-md-3 col-sm-6">
              <div class="footer-info-single">
                <h2 class="title">Security & privacy</h2>
                <ul class="list-unstyled ">
                  <li>
                    <a href="/" title="">
                      <i class="fa fa-angle-double-right"></i> Terms Of Use
                    </a>
                  </li>
                  <li>
                    <a href="/" title="">
                      <i class="fa fa-angle-double-right"></i> Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/" title="">
                      <i class="fa fa-angle-double-right"></i> Return / Refund
                      Policy
                    </a>
                  </li>
                  <li>
                    <a href="/" title="">
                      <i class="fa fa-angle-double-right"></i> Store Locations
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-md-3 col-sm-6">
              <div class="footer-info-single">
                <h2 class="title">AboutUs</h2>
                <p>
                  NOTRE OBJECTIF PRINCIPAL EST DE FACILITER AUX CLIENTS DE
                  TROUVER LES EVENNEMENTS CULTURELS . NOUS ALLONS COLLECTER A
                  LES LES INFORMATIONS DES E CES EVENNEMENTS À L'AIDE DES
                  AMIE(E)S VOLONTAIRES DE TOUTE LA TUNISIE .
                </p>
              </div>
            </div>
          </div>
        </div>

        <section class="copyright">
          <div class="container">
            <div class="row">
              <div class="col-sm-6">
                <p>Copyright © 2021. Your Company.</p>
              </div>
              <div class="col-sm-6"></div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}
