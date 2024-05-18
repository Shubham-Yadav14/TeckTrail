import React from 'react'
import Narrow from '../Components/Common/Narrow'
import Home2Review from '../Components/Home2Review'

export default function Home2Content() {
    return (
        <>
            <div className='bg-[rgb(243,246,253)]'>
                <Narrow>
                    <div className='pt-20'>
                    <div className='text-center'>TESTIMONIAL</div>
                    <div className='text-center my-3 text-4xl font-semibold'>What people think about us</div>
                    <div className='text-center my-8'>Their professionalism and commitment to our success were evident<br/>
throughout the entire process.</div>
                    </div>
                </Narrow>
                    <Home2Review speed="6000"/>
                    <Home2Review speed="3000"/>
            </div>





            <Narrow class='max-md:p-3 py-10'>
                <div className='text-blue-500'>CONTACT </div>
                <div className='flex justify-between max-md:flex-col my-2'>
                    <div className='text-5xl max-lg:text-3xl font-semibold'>We have branches all <br /> over the world</div>
                    <div className='w-4/12 text-sm max-md:my-10 max-md:w-8/12'>Reach out to us through the contact form below, and a member of our dedicated team will respond promptly. We're here to listen, assist, and collaborate.</div>
                </div>
                <div className='bg-[#F3F6FD] p-2 rounded-lg my-5'>
                    <div className='bg-[#1351d80d] p-20 border-[#1351d81a] border-2 max-lg:p-10 max-md:p-5'>
                        <div className='flex flex-col bg-white p-3 rounded-xl'>
                            <div className='flex macicons '>
                                <div style={{ width: "12px", height: "12px" }} className='bg-[#EC6B5E] rounded-full'></div>
                                <div style={{ width: "12px", height: "12px" }} className='bg-[#F4BE4F] mx-2 rounded-full'></div>
                                <div style={{ width: "12px", height: "12px" }} className='bg-[#61C554] rounded-full'></div>
                            </div>
                            <img src='https://wpriverthemes.com/synck/wp-content/uploads/2023/12/map.svg' alt='map' className='mx-auto my-5' />
                        </div>
                        <div className='bg-white p-5 rounded-xl my-5 max-md:p-3'>
                            <div className='grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1'>
                                <div className='flex flex-col items-center'>
                                    <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/support-icon.svg" alt="" style={{ height: "50px", width: "50px" }} />
                                    <div className='font-semibold my-3'>Contact Info</div>
                                    +91-965-090-0190<br />
                                    bluebase@mail.com<br />
                                    mandro@mail.com<br />
                                </div>
                                <div className='flex flex-col items-center'>
                                    <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/map-icon.svg" alt="" style={{ height: "50px", width: "50px" }} />
                                    <span className='font-semibold'>Visit our office</span> <br />
                                    Address dalna hai
                                </div>
                                <div className='flex  flex-col justify-around items-center'>
                                    <a href="/" className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" height="40" width="25" viewBox="0 0 512 512" className='mx-3'> <path fill="#1351D8" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" /></svg> Facebook</a>

                                    <a href="/" className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" height="40" width="25.75" viewBox="0 0 576 512" className='mx-3'> <path fill="#1351D8" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" /></svg>Youtube</a>

                                    <a href="/" className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" height="40" width="25.25" viewBox="0 0 448 512" className='mx-3'> <path fill="#1351D8" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>Linked In</a>

                                    <a href="/" className='flex items-center' accordion ><svg xmlns="http://www.w3.org/2000/svg" height="40" width="25.25" viewBox="0 0 448 512" className='mx-3'> <path fill="#1351D8" d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z" /></svg>Instagram</a>
                                </div>
                                <div className='flex flex-col justify-between px-4 py-3 max-md:text-center'>
                                    <div className=''>
                                        <div className='text-xl'><span className='text-3xl'>22+ </span>Years</div>
                                        <div className='text-blue-600'>Field Experience</div>
                                    </div>
                                    <hr className='my-3' />
                                    <div className=''>
                                        <div className='text-xl'><span className='text-3xl'>950+ </span>Projects</div>
                                        <div className='text-blue-600'>Done Around World</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Narrow>

        </>
    )
}
