import { React, useEffect, useState, useRef } from "react";
import { Container, Row, Col, Button, Card } from "reactstrap";
import Narrow from "../Components/Common/Narrow";
import { Link } from "react-router-dom";
import Getintouch from "../Components/Getintouch";

export default function ITsupport() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      <Narrow>
        <div className="mb-36 mt-24 max-xl:mt-3">
          <Row>
            <Col className="firstbtnsec ">
              <span className="abouta1">Development</span>
            </Col>
          </Row>
          <Row
            className={`header ${isVisible ? "fade-in" : ""}`}
            style={{ marginTop: "10px" }}
          >
            <Col>
              <p className="aboutheader1 max-xl:text-3xl font-semibold">
                Development is the pillar of our{" "}
              </p>
              <p className="aboutheader1 max-xl:text-3xl font-semibold">
                {" "}
                company
              </p>

              <p className="aboutheader2 max-xl:px-3 text-2xl">
                Software development is the process of designing, programming,
                testing,
                <br />
                and maintaining software applications and systems.
              </p>
            </Col>
          </Row>
        </div>
      </Narrow>

      <div className="mb-32">
        <Narrow>
          <img
            src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/service-details.jpg"
            alt=""
          />
        </Narrow>
      </div>

      <Narrow>
        <div className="background p-20 rounded-lg">
          <div className="flex max-xl:flex-col gap-10">
            <div className="w-1/2 max-xl:w-full">
              <p className="home1para">SOFTWARE DEVELOPMENT</p>
              <h1 className=" text-5xl font-bold mt-3">Engine of progress</h1>
              <h1 className=" mt-5 text-3xl">
                Development as stone of innovation.
              </h1>
              <p className="homepara3">
                Software development is the stab process of designing,
                programming, solids to testing, and maintaining software as the
                applications and systems. It empowers us to turn ideas <br />
                <br /> Software developers, often rest referred to as coders or
                programmers, are sat the creative minds behind the digital
                innovations we use daily. They possess a unique blend of <br />
                <br /> Developers write lines of code by state using programming
                languages such as Python, Java, JavaScript, and C++,
              </p>
            </div>
            <div className="flex w-1/2 max-xl:w-full gap-2">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/service-details-2.jpg"
                alt=""
                className="frontimg w-1/2"
              />
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/service-details-3.jpg"
                alt=""
                className="frontimg w-1/2"
              />
            </div>
          </div>
        </div>
      </Narrow>

      <div className="productivity mb-32 mt-32">
        <Narrow>
          <div className="py-28 max-xl:py-5 flex gap-24 justify-between max-xl:flex-col">
            <div className="w-1/2 max-xl:w-full">
              <img
                className="rounded-lg mx-auto"
                src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/about-service-7.jpg"
                alt=""
              />
            </div>

            <div className="fetureproductbox max-xl:mt-10 section-title w-1/2 max-xl:w-full">
              <div>
                <div>
                  <h6 className="inhow">IMPORTANCE</h6>
                  <h1 className="fetureproducthead">The Role of Developers</h1>
                  <h4 className="fetureproductabout mt-3">
                    Software developers, often referred to as coders or
                    programmers, are the creative minds behind the digital
                    innovations we use daily.
                  </h4>
                </div>
              </div>

              <div className="flex-col gap-10 max-xl:gap-0 max-xl:flex-col">
                <div className="tasksign">
                  <img
                    src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                    alt=""
                    className="righticonimagesize h-10"
                  />
                  <h5 className="fetureproductabout my-auto">
                    PPD Development{" "}
                  </h5>
                </div>
                <div className="tasksign">
                  <img
                    src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                    alt=""
                    className="righticonimagesize h-10"
                  />
                  <h5 className="fetureproductabout my-auto">Easy to use </h5>
                </div>
              </div>
            </div>
          </div>
        </Narrow>
      </div>

      <Narrow>
        <div className="background p-20 rounded-lg">
          <div className="w-full max-xl:w-full">
            <p className="home1para">FEATURES</p>
            <h1 className=" text-5xl font-bold mt-3">
              Boosting your business using our team
            </h1>
          </div>

          <hr className="mt-14 " />

          <div className="grid grid-cols-2 max-xl:grid-cols-2">
            <div className="p-5">
              <div className="flex gap-2">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className="righticonimagesize h-8"
                />
                <h1 className="text-2xl font-semibold mb-3">
                  Requirements Gathering
                </h1>
              </div>
              <p className="text-xl text-gray-600">
                The development process starts with gathering and analyzing the
                requirements from stakeholders, including clients, end-users,
                and business analysts requirements from stakeholders,
              </p>
            </div>
            <div className="p-5">
              <div className="flex gap-2">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className="righticonimagesize h-8"
                />
                <h1 className="text-2xl font-semibold mb-3">
                  Devops Interoperability
                </h1>
              </div>
              <p className="text-xl text-gray-600">
                In today's interconnected world, software often needs to
                integrate with other systems and platforms. Developing software
                with interoperability in mind ensures.
              </p>
            </div>
            <div className="p-5">
              <div className="flex gap-2">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className="righticonimagesize h-8"
                />
                <h1 className="text-2xl font-semibold mb-3">
                  Data Integration
                </h1>
              </div>
              <p className="text-xl text-gray-600">
                Software applications should be designed and developed with
                scalability in mind. As user bases grow and data increases, the
                software should be able to handle.
              </p>
            </div>
            <div className="p-5">
              <div className="flex gap-2">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className="righticonimagesize h-8"
                />
                <h1 className="text-2xl font-semibold mb-3">
                  Analytics Performance
                </h1>
              </div>
              <p className="text-xl text-gray-600">
                The development process starts with gathering and analyzing the
                requirements from stakeholders, including clients, end and
                business analysts. As user bases grow and data increases
              </p>
            </div>
            <div className="p-5">
              <div className="flex gap-2">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className="righticonimagesize h-8"
                />
                <h1 className="text-2xl font-semibold mb-3">
                  Requirements Gathering
                </h1>
              </div>
              <p className="text-xl text-gray-600">
                The development process starts with gathering and analyzing the
                requirements from stakeholders, including clients, end-users,
                and business analysts requirements from stakeholders,
              </p>
            </div>
            <div className="p-5">
              <div className="flex gap-2">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className="righticonimagesize h-8"
                />
                <h1 className="text-2xl font-semibold mb-3">
                  Requirements Gathering
                </h1>
              </div>
              <p className="text-xl text-gray-600">
                The development process starts with gathering and analyzing the
                requirements from stakeholders, including clients, end-users,
                and business analysts requirements from stakeholders,
              </p>
            </div>
          </div>
        </div>
      </Narrow>

      <Getintouch />
    </div>
  );
}
