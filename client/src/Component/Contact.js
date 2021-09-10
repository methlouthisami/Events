import ContactSvg from "../images/contact.svg";
import React from "react";
import "./Contact";
import Navv from "./Navv";
import Footer from "./Footer";
export default function Contact() {
  return (
    <div>
      <Navv />
      <div class="content">
        <div class="container cont" style={{ marginTop: "80px" }}>
          <div class="row">
            <div class="col-md-6 mt-5">
              <img src={ContactSvg} alt="EVENT5" class="img-fluid" />
            </div>
            <div class="col-md-6 contents">
              <div class="row justify-content-center">
                <div class="col-md-8 mt-5">
                  <div class="mb-4">
                    <h3 style={{ color: "#b78c33" }}>Sign Up</h3>
                    <p class="mb-4">
                      Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                      consectetur adipisicing.
                    </p>
                  </div>
                  <form action="#" method="post" style={{ color: "#b78c33" }}>
                    <div class="form-group first">
                      <label for="fullname">Full name</label>
                      <input type="text" class="form-control" id="fullname" />
                    </div>
                    <div class="form-group">
                      <label for="email">Email</label>
                      <input type="email" class="form-control" id="email" />
                    </div>
                    <div class="form-group">
                      <label for="password">Password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                      />
                    </div>
                    <div class="form-group last mb-4">
                      <label for="re-password">Re-type Password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="re-password"
                      />
                    </div>

                    <div class="d-flex mb-5 align-items-center">
                      <label class="control control--checkbox mb-0">
                        <span class="caption">
                          Creating an account means you're okay with our{" "}
                          <a href="#terms-and-conditions">
                            Terms and Conditions
                          </a>{" "}
                          and our <a href="#privacy-policy">Privacy Policy</a>.
                        </span>
                        <input type="checkbox" checked="checked" />
                        <div class="control__indicator"></div>
                      </label>
                    </div>

                    <button
                      type="submit"
                      value="Register"
                      style={{
                        width: "350px",
                        height: "50px",
                        backgroundColor: "#222",
                        color: "#d49c21",
                        borderRadius: "8px",
                      }}
                    >
                      <p style={{fontSize:"18px",marginTop:"8px"}}>register </p>
                    </button>

                    <span class="d-block text-left my-4 text-muted">
                      &mdash; or with &mdash;
                    </span>

                  
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
