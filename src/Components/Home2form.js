import React from "react";
import Narrow from "./Common/Narrow";
import { useState, useEffect } from "react";

export default function Home2form() {
  const companyTypes = ["SAAS", "Banking", "Agency", "Business", "Other"];
  const options = [
    "App design",
    "Web design",
    "Branding",
    "Development",
    "Cloud service",
    "Other",
  ];

  const [message, setMessage] = useState("");

  const [selectedType, setSelectedType] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, like sending data to a server
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      country: "",
      message: "",
    });
  };

  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleOption = (option) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(option)
        ? prevSelected.filter((item) => item !== option)
        : [...prevSelected, option]
    );
  };

  const [value, setValue] = useState(100);

  const handleSliderChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    const slider = document.getElementById("budget-slider");
    const percentage = (value / 200) * 100;
    slider.style.setProperty("--value", `${percentage}%`);
  }, [value]);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <Narrow>
        <div className="bg-[#F3F6FD] p-2 rounded-lg">
          <div className="bg-[#1351d80d] p-20 max-xl:p-2 border-[#1351d81a] border-2">
            <div className="bg-white py-5 px-9 max-xl:px-3 rounded-lg">
              <h1 className="text-xl text-gray-600">
                You can reach us anytime via{" "}
                <span className="text-blue-700 font-semibold">
                  infopanacee@gmail.com
                </span>
              </h1>

              <hr className="mt-5 mb-5" />

              <div className="flex max-xl:flex-col gap-16">
                <div className="w-1/2 max-xl:w-full">
                  <form onSubmit={handleSubmit} className=" rounded mb-4">
                    <div className="flex justify-between">
                      <div style={{ width: "48%" }} className="mb-4">
                        <label
                          className="block text-gray-700 font-semibold text-sm mb-2"
                          htmlFor="firstName"
                        >
                          First Name
                        </label>
                        <input
                          className=" appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="firstName"
                          name="firstName"
                          placeholder="First Name"
                          type="text"
                          value={formData.firstName}
                          onChange={handleChange}
                        />
                      </div>
                      <div style={{ width: "48%" }} className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-semibold mb-2"
                          htmlFor="firstName"
                        >
                          Last Name
                        </label>
                        <input
                          className=" appearance-none border rounded w-full py-2 px-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="lastName"
                          name="lastName"
                          type="text"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-semibold mb-2"
                        htmlFor="firstName"
                      >
                        Email
                      </label>
                      <input
                        className=" appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="flex justify-between">
                      <div style={{ width: "48%" }} className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-semibold mb-2"
                          htmlFor="firstName"
                        >
                          Phone Number
                        </label>
                        <input
                          className=" appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="phoneNumber"
                          name="phoneNumber"
                          type="number"
                          placeholder="Your Number"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                        />
                      </div>
                      <div style={{ width: "48%" }} className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-semibold mb-2"
                          htmlFor="firstName"
                        >
                          Country
                        </label>
                        <input
                          className=" appearance-none border rounded w-full py-2 px-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="country"
                          name="country"
                          type="text"
                          placeholder="Your Country"
                          value={formData.country}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label className="mb-4 text-md font-medium">
                        What's the type of your company?
                      </label>
                      <div className="flex space-x-4">
                        {companyTypes.map((type) => (
                          <button
                            key={type}
                            onClick={() => setSelectedType(type)}
                            className={`px-4 py-2 border rounded ${
                              selectedType === type
                                ? "bg-blue-600 text-white"
                                : "bg-white text-gray-500"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col items-start mt-3">
                      <label className="mb-4 text-md font-medium">
                        What you need from us?
                      </label>
                      <div className="grid grid-cols-3 gap-4">
                        {options.map((option) => (
                          <button
                            key={option}
                            onClick={() => toggleOption(option)}
                            className={`flex items-center justify-center px-2 py-2 border rounded ${
                              selectedOptions.includes(option)
                                ? "bg-blue-600 text-white"
                                : "bg-white text-gray-500"
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  </form>
                </div>

                <div className="w-1/2 max-xl:w-full">
                  <div className="flex flex-col items-start">
                    <label
                      className="mb-2 text-md font-medium"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Leave us a message..."
                      className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows="6"
                    />
                  </div>

                  <div className="w-full max-w-lg mt-10">
                    <label
                      htmlFor="budget-slider"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Budget
                    </label>
                    <input
                      type="range"
                      id="budget-slider"
                      min="0"
                      max="200"
                      value={value}
                      onChange={handleSliderChange}
                      className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #3b82f6 ${value/2}%, #d1d5db ${value/2}%)`,
                      }}
                    />
                    <div className="flex justify-between mt-2 text-sm text-gray-600">
                      <span>$0</span>
                      <span>${value}k</span>
                      <span>$200k</span>
                    </div>
                  </div>

                  <div className="flex items-center mt-10">
                    <input
                      type="checkbox"
                      id="terms"
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    <label
                      htmlFor="terms"
                      className="ml-2 text-xl text-gray-600"
                    >
                      Click the box and agree to our <u>terms and conditions</u>
                      .
                    </label>
                  </div>

                  <div className="mt-10">
                    <button
                      className="bg-blue-700 w-full text-xl hover:bg-black text-white py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Narrow>
    </div>
  );
}