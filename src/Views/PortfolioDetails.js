import React from 'react'
import Narrow from '../Components/Common/Narrow'
import { Row, Col } from 'reactstrap'

export default function PortfolioDetails() {
    return (
        <Narrow>
            <div className="mb-24 mt-24 max-xl:mt-3">
                <Row>
                    <Col className="firstbtnsec ">
                        <span className="abouta1">Our Projects</span>
                    </Col>
                </Row>
                <Row
                    className=''
                    style={{ marginTop: "10px" }}
                >
                    <Col>
                        <p className="text-6xl text-center max-xl:text-3xl font-semibold">
                            E-commerce platform development
                        </p>
                        <p className="text-6xl text-center max-xl:text-3xl font-semibold">

                            for london based company
                        </p>

                        <p className="aboutheader2 max-xl:px-3">
                            The makers of AI have announced the company will be dedicating 20% of its <br /> compute processing power over the next four years
                        </p>
                    </Col>
                </Row>
            </div>
            <div>
                <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/portfolio-details.jpg" alt='image'/>
                <div className='bg-[#F3F6FD] mt-20 rounded-2xl p-32 mx-10 leading-8 text-lg' >
                    <h3 className='text-4xl font-semibold '>Introduction</h3>
                    <p className='my-4'>In today's fast-paced and technologically advanced world, businesses rely heavily on Information Technology (IT) services to remain competitive, innovative, and efficient. From streamlining operations to enhancing customer experience</p>
                    <p className='my-4'>IT services play a crucial role in transforming businesses across all industries. In this blog, we will explore the significance of IT services, the key benefits they offer, and how they can empower your business to reach new heights.</p>
                    <p className='my-4'>IT services encompass a wide range of solutions aimed at managing, optimizing, and supporting the technology infrastructure of a business. This includes hardware and software management, network administration, cybersecurity, data backup and recovery, cloud services, and more. Whether you run a small startup or a large enterprise, leveraging the right IT services can have a profound impact on your business's success. One of the primary benefits of adopting IT services is their ability to streamline various business operations. Automated processes, such as enterprise resource planning (ERP) systems, can integrate different departments and make data accessible in real-time.</p>

                    <img src='https://wpriverthemes.com/synck/wp-content/uploads/2024/01/portfolio-details-2.jpg' alt='image2'/>
                    <p className='my-4'>As businesses increasingly rely on digital technologies, the risk of cyber threats also grows. A robust IT service provider will implement cutting-edge cybersecurity measures to safeguard your valuable data, sensitive information, and intellectual property. From firewall protection to regular vulnerability assessments, a comprehensive security strategy ensures that your business stays protected against cyberattacks.</p>
                </div>
            </div>
        </Narrow>
    )
}
