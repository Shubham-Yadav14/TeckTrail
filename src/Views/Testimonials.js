import React, { useState, useEffect } from "react";
import Narrow from "../Components/Common/Narrow";
import { Row, Col, Button } from "reactstrap";
import img from "../Images/jeevshakti.png"; // Ensure this path is correct
import Getintouch from "../Components/Getintouch";

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      <Narrow>
        <div className="mb-24 mt-24 max-xl:mt-3">
          <Row>
            <Col className="firstbtnsec">
              <span className="abouta1">Testimonials</span>
            </Col>
          </Row>
          <Row
            className={`header ${isVisible ? "fade-in" : ""}`}
            style={{ marginTop: "10px" }}
          >
            <Col>
              <p className="text-6xl aboutheader1 text-center max-xl:text-3xl font-semibold">
                Success Stories from Our Clients
              </p>

              <p className="aboutheader2 max-xl:px-3">
                Read the stories of our satisfied customers.
              </p>
            </Col>
          </Row>
        </div>
      </Narrow>

      <div className="card1 bg-[#F3F6FD] mb-32 py-10 ">
        <Narrow>
          <div className="jeevshaktibg relative  bg-cover bg-center bg-no-repeat h-[90vh] max-xl:h-[70vh] p-40 max-xl:p-10 group rounded-xl">
            <div className="absolute inset-0 bg-black opacity-5 group-hover:opacity-60 transition-opacity duration-300 rounded-xl"></div>
            <div className="relative z-10 hidden group-hover:block transition-opacity duration-300 rounded-xl">
              <div className="h-full w-full">
                <h1 className="text-white text-6xl max-xl:text-3xl font-bold text-center mt-10">
                  Jeevshakti
                </h1>
                <p className="text-white text-3xl max-xl:text-lg font-semibold mt-3 text-center leading-10">
                  Jeevshakti Foundation, a charitable trust established in 2017,
                  is committed to the welfare of stray animals in Delhi. Through
                  initiatives like feeding, medical care, and sterilizations,
                  they aim to improve the lives of these animals. Their
                  innovative solutions and community involvement reflect their
                  dedication to alleviating animal suffering and promoting
                  compassion.
                </p>
                <div className="text-center mt-3">
                  <a
                    href="http://jeevshaktifoundation.org/"
                    target="_blank"
                    className="bg-blue-600 text-white text-xl font-bold px-4 py-2 rounded-full"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="medecombg relative  bg-cover bg-center bg-no-repeat h-[90vh] max-xl:h-[70vh] p-40 mt-10 max-xl:p-10 group rounded-xl">
            <div className="absolute inset-0 bg-black opacity-5 group-hover:opacity-60 transition-opacity duration-300 rounded-xl"></div>
            <div className="relative z-10 hidden group-hover:block transition-opacity duration-300 rounded-xl">
              <div className="h-full w-full">
                <h1 className="text-white text-6xl max-xl:text-3xl font-bold text-center mt-10">
                  Jeevshakti
                </h1>
                <p className="text-white text-3xl max-xl:text-lg font-semibold mt-3 text-center leading-10">
                  Jeevshakti Foundation, a charitable trust established in 2017,
                  is committed to the welfare of stray animals in Delhi. Through
                  initiatives like feeding, medical care, and sterilizations,
                  they aim to improve the lives of these animals. Their
                  innovative solutions and community involvement reflect their
                  dedication to alleviating animal suffering and promoting
                  compassion.
                </p>
                <div className="text-center mt-3">
                  <a
                    href="https://mede-com.com/"
                    target="_blank"
                    className="bg-blue-600 text-white text-xl font-bold px-4 py-2 rounded-full"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="jeevshaktibg mt-10 relative  bg-cover bg-center bg-no-repeat h-[90vh] max-xl:h-[70vh] p-40 max-xl:p-10 group rounded-xl">
            <div className="absolute inset-0 bg-black opacity-5 group-hover:opacity-60 transition-opacity duration-300 rounded-xl"></div>
            <div className="relative z-10 hidden group-hover:block transition-opacity duration-300 rounded-xl">
              <div className="h-full w-full">
                <h1 className="text-white text-6xl max-xl:text-3xl font-bold text-center mt-10">
                  Jeevshakti
                </h1>
                <p className="text-white text-3xl max-xl:text-lg font-semibold mt-3 text-center leading-10">
                  Jeevshakti Foundation, a charitable trust established in 2017,
                  is committed to the welfare of stray animals in Delhi. Through
                  initiatives like feeding, medical care, and sterilizations,
                  they aim to improve the lives of these animals. Their
                  innovative solutions and community involvement reflect their
                  dedication to alleviating animal suffering and promoting
                  compassion.
                </p>
                <div className="text-center mt-3">
                  <a
                    href="http://jeevshaktifoundation.org/"
                    target="_blank"
                    className="bg-blue-600 text-white text-xl font-bold px-4 py-2 rounded-full"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="medecombg relative  bg-cover bg-center bg-no-repeat h-[90vh] max-xl:h-[70vh] p-40 mt-10 max-xl:p-10 group rounded-xl">
            <div className="absolute inset-0 bg-black opacity-5 group-hover:opacity-60 transition-opacity duration-300 rounded-xl"></div>
            <div className="relative z-10 hidden group-hover:block transition-opacity duration-300 rounded-xl">
              <div className="h-full w-full">
                <h1 className="text-white text-6xl max-xl:text-3xl font-bold text-center mt-10">
                  Jeevshakti
                </h1>
                <p className="text-white text-3xl max-xl:text-lg font-semibold mt-3 text-center leading-10">
                  Jeevshakti Foundation, a charitable trust established in 2017,
                  is committed to the welfare of stray animals in Delhi. Through
                  initiatives like feeding, medical care, and sterilizations,
                  they aim to improve the lives of these animals. Their
                  innovative solutions and community involvement reflect their
                  dedication to alleviating animal suffering and promoting
                  compassion.
                </p>
                <div className="text-center mt-3">
                  <a
                    href="https://mede-com.com/"
                    target="_blank"
                    className="bg-blue-600 text-white text-xl font-bold px-4 py-2 rounded-full"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Narrow>
      </div>

      <Getintouch/>
    </div>
  );
}
