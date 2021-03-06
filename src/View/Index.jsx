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
import headerImage from "./img/headerImage.png";

import "./index.css";

export class Index extends Component {
  render() {
    return (
      <div>

        {/*  Test Firmino*/}
        <section id="Header" >

          <div class="container-fluid" >
            <div class="row d-flex justify-content-center header_center" >
              <div class="col-lg-4 col-md-8 col-xs-8 ">
                <h1 className="head-title header_text" >AI-powered platform to reduce your car fleet operational cost</h1>
                <p className="header_subtext" style={{ marginTop: "20px" }}>Manage your drivers in one place. Track their performance. Reach them instantly and improve their driving on the fly.</p>
                <div className="row" style={{ marginTop: "20px" }}>
                  <div className="col-sm-6 col-md-5 col-lg-7  ">
                    <input
                      className="form-control "
                      type="text"
                      placeholder="your@email.com"
                      name="email"
                    />
                  </div>
                  <div className="col-lg-5 col-md-8 col-xs-8 ">
                    {" "}
                    {/* <button
                      className="btn landing_button_btn1 " >
                      Free consultation
                    </button>{" "} */}
                    <a
                      className="nav-link btn contact_btn text-dark"
                      href="#contactt"
                      rel="modal:open">
                      Free consultation
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-8 col-xs-8 intro-img d-flex align-items-center position">
                <div class="intro-img-place ">
                  <img src={headerImage} alt="Platform product overview" className="img-fluid" />
                </div>
              </div>

            </div>
          </div>

        </section>

        {/*  */}

        {/* <section id="" className="container2   " style={{ marginTop: "100px" }}>
          <div className=" justify-content-center no-gutters mb-5 mb-lg-0 main_containr ">
            <div className="d-flex h-100">
              <div class="container d-flex h-100 align-items-center">
                <div class="mx-auto  landing_text1 ">
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
        </section> */}

        {/* <!-- Projects Section --> */}
        <section id="projects" class="projects-section ">
          <div class="container">
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
                  <div class="d-flex align-self-center h-100">
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
                        We help you to change<br />your drivers behaviour
                      </h4>
                      <p class="mb-0">
                        You can see all the data in one place, check the performance,
                        but of course that’s not enought!
                        We can help you change your driver’s driving behaviour,
                        with situation specific suggestions and personalized feedback
                        for each driver how to be more efficient, take better care
                        of your vehicles and motivate them to improve.
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
                      <h4 class="text-text-dark text-style" style={{ marginTop: "10px" }}>
                        We reduce your TCO
                      </h4>
                      <p class="mb-0 text-dark-50" >
                        You’re sick of using multiple tools or just an excel spreacheat to see how your fleet behaves? View the performance of your fleet in one single place so you can use your time in other tasks you have to do. Check and compare the data from different metrics to get a complete view of your drivers performance live.
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

                      <h4 class="text-text-dark text-style" style={{ marginTop: "10px" }}>
                        You can save even more<br />with electric vechilces
                      </h4>
                      <p class="mb-0 text-dark-50">
                        VivaDrive #DigitalFleet program provides smart analytics about driving and mobility taking into account driving behavior, car use, safety and risk and helps you optimize your TCO.
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
        <section id="landing" className="container">
          <div className=" justify-content-center no-gutters mb-5 mb-lg-0 lannding_section ">
            <div className="d-flex h-100" style={{ paddingBottom: "30px" }}>
              <div class="container d-flex h-100 align-items-center">
                <div class="mx-auto text-center landing_text ">
                  <h1 class="mx-auto head_text_landing  ">
                    Anyone can give you information on your fleet
                  </h1>
                  <p class=" mx-auto text-landing ">
                    VivaDrive is develope to make all data more accessible and readable to you. We have the tools to reduce costs and improve your fleet performance.Learn more about VivaDrive and how we can help you.
                  </p>
                  {/* <a href="/blog/" class="btn btn-primary js-scroll-trigger">
                    Get Started
                  </a> */}
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row d-flex justify-content-center h-100 ">
                {/* <div className="">
                  <button className="btn landing_button_btn">
                    Digital Fleet
                  </button>
                </div> */}
                <div className="">
                  <a href="https://vivadrive.io/digitalfleet" class="btn landing_button_btn" role="button" target="_blank">Digital Fleet</a>
                </div>

                <div className="">
                  <a href="#" class="btn landing_button_btn disabled" role="button" target="_blank" >Ev Recommend</a>
                </div>
                {/* <div className="">
                  {" "}
                  <button className="btn landing_button_btn">
                    Ev Recommend
                  </button>{" "}
                </div> */}

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

        <section className="company_section" >
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

        <section className="star_boosting container-fluid">
          <div className="row backbone">
            <div className="col-sm-7 col-md-12 col-xl-10  ">
              <div style={{ marginTop: "50px" }}>
                <p className=" footer-don" >
                  Your fleet solution in less than 6 weeks
              </p>
                <h1 className="header_text">
                  Start boosting your business today
              </h1>
                <p className="  footer-don1">
                  {" "}
                Questions? Call us at{" "}
                  <strong style={{ color: "black", opacity: "1" }} className="font-weight-bolder">
                    1-800-975-5304
                </strong>{" "}
                or email us{" "}
                  <strong style={{ color: "black", opacity: "1" }} className="font-weight-bolder">
                    digitalfleet@vivadrive.io
                </strong>
                </p>
              </div>
              <div style={{ margin: "50px 0" }}>
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
