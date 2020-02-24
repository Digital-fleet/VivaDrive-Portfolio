import React, { Component } from "react";
import head from "./img/Head.png";
import grow from "./img/grow.png";
import Circuit from "./img/Circuit.png";
import first from "./img/1.png";
import second from "./img/2.png";
import third from "./img/3.png";
import fourth from "./img/4.png";
import fifth from "./img/5.png";
import sixth from "./img/6.png";
import seventh from "./img/7.png";

import "./index.css";

export class Index extends Component {
  render() {
    return (
      <div>
        <section id="" className="container2   " style={{ marginTop: "100px" }}>
          <div className=" justify-content-center no-gutters mb-5 mb-lg-0 main_containr ">
            <div className="d-flex h-100">
              <div class="container d-flex h-100 align-items-center">
                <div class="mx-auto text-center landing_text1 ">
                  <h1 class="mx-auto header_text ">
                    Improve your drivers performance
                  </h1>
                  <p class=" mx-auto header_subtext ">
                    Manage your drivers in one place. Track their performance.
                    Reach them instantly and improve their driving in the fly{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="container111">
              <div className="row">
                <div className="col-md-5 col-lg-5  ">
                  <input
                    className="form-control "
                    type="text"
                    placeholder="your@email.com"
                    name="email"
                  />
                </div>
                <div className="col-md-3 col-lg-3 ">
                  {" "}
                  <button
                    className="btn landing_button_btn1 "
                    style={{ padding: "4px" }}
                  >
                    Free consultation
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Projects Section --> */}
        <section id="projects" class="projects-section ">
          <div class="containe3">
            {/* <!-- Featured Project Row --> */}

            {/* <!-- Project One Row --> */}
            <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
              <div class="col-lg-6">
                <img
                  class="img-fluid"
                  src="https://raw.githubusercontent.com/BlackrockDigital/startbootstrap-grayscale/master/img/demo-image-01.jpg"
                  alt=""
                />
              </div>
              <div class="col-lg-6 bg-white">
                <div class="bg-black text-center h-100 project">
                  <div class="d-flex h-100">
                    <div class="project-text w-100 my-auto text-center text-lg-left justify-content-center">
                      <img
                        class=""
                        src={head}
                        alt="Driver Behaviour"
                        style={{ height: "60px" }}
                      />
                      <h4
                        class="text-text-dark text-style"
                        style={{ marginTop: "10px" }}
                      >
                        We help you to change your drivers behaviour
                      </h4>
                      <p class="mb-0 text-dark-50">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur
                      </p>
                      <hr class="d-none d-lg-block mb-0 ml-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Project Two Row --> */}
            <div class="row justify-content-center no-gutters">
              <div class="col-lg-6">
                <img
                  class="img-fluid"
                  src="https://raw.githubusercontent.com/BlackrockDigital/startbootstrap-grayscale/master/img/demo-image-02.jpg"
                  alt=""
                />
              </div>
              <div class="col-lg-6 order-lg-first bg-white">
                <div class="bg-black text-center h-100 project">
                  <div class="d-flex h-100">
                    <div class="project-text w-100 my-auto text-center text-lg-left justify-content-center">
                      <img
                        class=""
                        src={Circuit}
                        alt="Driver Behaviour"
                        style={{ height: "60px" }}
                      />
                      <h4 class="text-dark" style={{ marginTop: "10px" }}>
                        We reduce your TCO
                      </h4>
                      <p class="mb-0 text-dark-50">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur
                      </p>
                      <hr class="d-none d-lg-block mb-0 ml-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Project Three Row --> */}
            <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
              <div class="col-lg-6">
                <img
                  class="img-fluid"
                  src="https://raw.githubusercontent.com/BlackrockDigital/startbootstrap-grayscale/master/img/demo-image-01.jpg"
                  alt=""
                />
              </div>
              <div class="col-lg-6 bg-white">
                <div class="bg-black text-center h-100 project">
                  <div class="d-flex h-100">
                    <div class="project-text w-100 my-auto text-center text-lg-left justify-content-center">
                      <img
                        class=""
                        src={grow}
                        alt="Driver Behaviour"
                        style={{ height: "60px" }}
                      />

                      <h4 class="text-text-dark" style={{ marginTop: "10px" }}>
                        You can save even more with electric vechilces
                      </h4>
                      <p class="mb-0 text-dark-50">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur
                      </p>
                      <hr class="d-none d-lg-block mb-0 ml-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--  Section about landng page --> */}
        <section id="landing" className="container2   ">
          <div className=" justify-content-center no-gutters mb-5 mb-lg-0 lannding_section ">
            <div className="d-flex h-100">
              <div class="container d-flex h-100 align-items-center">
                <div class="mx-auto text-center landing_text ">
                  <h1 class="mx-auto head_text_landing  ">
                    Anyone can give you information on your fleet
                  </h1>
                  <p class=" mx-auto text-landing ">
                    Manage your drivers in one place. Track their performance.
                    Reach them instantly and improve their driving in the fly{" "}
                  </p>
                  {/* <a href="/blog/" class="btn btn-primary js-scroll-trigger">
                    Get Started
                  </a> */}
                </div>
              </div>
            </div>
            <div className="container11">
              <div className="row">
                <div className="col-md-4 col-lg-4  ">
                  <button className="btn landing_button_btn">
                    Digital Fleet
                  </button>
                </div>
                <div className="col-md-4 col-lg-4 ">
                  {" "}
                  <button className="btn landing_button_btn">
                    Digital Fleet App
                  </button>{" "}
                </div>
                <div className="col-md-4 col-lg-4  ">
                  {" "}
                  <button className="btn landing_button_btn">
                    Ev Recommend
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="review">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
              // data-interval="10000"
              data-interval="false"
              style={{ marginTop: "30px" }}
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className="row3">
                    We have replaced a part time fleet manager by using
                    VivaDrive. This software will increase the life of our
                    vehicles and equipment as well as reduce overall maintenance
                    costs. User friendly website which makes it very easy for
                    our mechanics to track repairs; one less thing that I have
                    to do. This has been the most adaptable and convenient
                    software for our needs. Vivadrive takes all the worry out of
                    fleet maintenance.
                    <div className="logo_person">
                      <img src={sixth} alt="First" className="landing_image" />
                      <p
                        style={{
                          marginTop: "5px",
                          left: "3%",
                          position: "relative"
                        }}
                        className=""
                      >
                        Rahul Raj <br></br> <span>Chairman</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item ">
                  <div className="row3">
                    We have replaced a part time fleet manager by using
                    VivaDrive. This software will increase the life of our
                    vehicles and equipment as well as reduce overall maintenance
                    costs. User friendly website which makes it very easy for
                    our mechanics to track repairs; one less thing that I have
                    to do. This has been the most adaptable and convenient
                    software for our needs. Vivadrive takes all the worry out of
                    fleet maintenance.
                    <div className="logo_person">
                      <img src={sixth} alt="First" className="landing_image" />
                      <p
                        style={{
                          marginTop: "5px",
                          left: "3%",
                          position: "relative"
                        }}
                        className=""
                      >
                        Rahul Raj <br></br> <span>Chairman</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="carousel-item">
                  <div className="row3">
                    We have replaced a part time fleet manager by using
                    VivaDrive. This software will increase the life of our
                    vehicles and equipment as well as reduce overall maintenance
                    costs. User friendly website which makes it very easy for
                    our mechanics to track repairs; one less thing that I have
                    to do. This has been the most adaptable and convenient
                    software for our needs. Vivadrive takes all the worry out of
                    fleet maintenance.
                    <div className="logo_person">
                      <img src={sixth} alt="First" className="landing_image" />
                      <p
                        style={{
                          marginTop: "5px",
                          left: "3%",
                          position: "relative"
                        }}
                        className=""
                      >
                        Rahul Raj <br></br> <span>Chairman</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="row3">
                    We have replaced a part time fleet manager by using
                    VivaDrive. This software will increase the life of our
                    vehicles and equipment as well as reduce overall maintenance
                    costs. User friendly website which makes it very easy for
                    our mechanics to track repairs; one less thing that I have
                    to do. This has been the most adaptable and convenient
                    software for our needs. Vivadrive takes all the worry out of
                    fleet maintenance.
                    <div className="logo_person">
                      <img src={sixth} alt="First" className="landing_image" />
                      <p
                        style={{
                          marginTop: "5px",
                          left: "3%",
                          position: "relative"
                        }}
                        className=""
                      >
                        Rahul Raj <br></br> <span>Chairman</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <a
                class="carousel-control-prev text-dark"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon text-dark"
                  aria-hidden="true"
                ></span>
                <span class="sr-only text-dark">Previous</span>
              </a>
              <a
                class="carousel-control-next text-dark"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon text-dark"
                  aria-hidden="true"
                ></span>
                <span class="sr-only text-dark">Next</span>
              </a>
            </div>
          </div>
        </section>
        {/* <!--  Section about compay --> */}

        <section className="company_section" style={{ marginTop: "40px" }}>
          <div className="work_with_company text-center">
            <div className="landing_image_section">
              <center>
                <img src={first} alt="First" className="landing_image" />
                <img src={second} alt="Second" className="landing_image" />
                <img src={third} alt="Third" className="landing_image" />
                <img src={fourth} alt="Four" className="landing_image" />
                <img src={fifth} alt="Five" className="landing_image" />
                <img src={sixth} alt="Six" className="landing_image" />
                <img src={seventh} alt="Seven" className="landing_image" />
              </center>
            </div>
          </div>
        </section>

        {/* <!--  Section about start boosting --> */}

        <section className="star_boosting">
          <div className="backbone">
            <div className="col-sm-7 col-md-12 col-xl-10 backdody ">
              <p
                className=" footer-don "
                style={{
                  marginTop: "80px"
                }}
              >
                Your fleet solution in less than 6 weeks
              </p>
              <h1
                className="header_text"
                style={{ marginTop: "-12px", fontSize: "50px" }}
              >
                Start boosting your
                <br></br> business today
              </h1>
              <p
                className="  footer-don1"
                style={{ marginTop: "20px", fontSize: "15px" }}
              >
                {" "}
                Questions? Call us at{" "}
                <strong
                  style={{ color: "black", opacity: "1" }}
                  className="font-weight-bolder"
                >
                  1-800-975-5304
                </strong>{" "}
                or email us{" "}
                <strong
                  style={{ color: "black", opacity: "1" }}
                  className="font-weight-bolder"
                >
                  digitalfleet@vivadrive.io
                </strong>
              </p>

              <div style={{ marginTop: "50px" }}>
                <div className="row">
                  <div className="col-md-6">
                    <input
                      className="form-control "
                      type="text"
                      placeholder="your@email.com"
                      name="email"
                    />
                  </div>
                  <div className="col-md-6">
                    <button
                      className="btn landing_button_btn bg-dark text-white"
                      style={{ padding: "4px" }}
                    >
                      Get in touch
                    </button>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Index;
