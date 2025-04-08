import React, { useState, useRef } from "react";
import { Form } from "react-bootstrap";
import Background from "../../../assets/images/pg6BG.png";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactForm = () => {
  const form = useRef();

  const [formData, setFormData] = useState({});


  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qwiukxg",
        "template_1u12neg",
        form.current,
        "rVaqQ8LD7meENcXdA"
      )
      .then(
        (result) => {
          console.log("form submitted:", result.text);
          toast.success("Message sent successfully!");
          setFormData({});
        },
        (error) => {
          console.log("Error", error.text);
          toast.warning("Failed to send message. Please try again.");
        }
      );
  };

  // Handle form field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div
      className="h-screen w-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url(${Background})`,
        height: "100vh",
        width: "100vw",
      }}
    >
      <h2 className="w-1/2 text-center !text-cyan-300 !text-4xl sm:text-4xl md:text-5xl mb-6 pt-10">
        Contact Me
      </h2>
      <div className="flex items-center justify-center w-full sm:w-3/4 md:w-1/2 lg:w-1/3 h-3/4 bg-transparent p-6">
        <div className="w-full max-w-md">
          <Form
            ref={form}
            onSubmit={sendEmail}
            className="bg-transparent p-6 rounded-lg shadow-lg"
          >
            <Form.Group
              controlId="name"
              className="mb-4 flex items-center space-x-4 sm:space-x-6 md:space-x-8"
            >
              <Form.Label className="text-white text-lg sm:text-xl md:text-2xl font-bold w-1/4 text-right">
                Name:
              </Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name || ""}
                onChange={handleChange}
                placeholder="Enter your name"
                className="form-control bg-white text-black w-3/4"
                required
              />
            </Form.Group>

            <Form.Group
              controlId="phone"
              className="mb-4 flex items-center space-x-4 sm:space-x-6 md:space-x-8"
            >
              <Form.Label className="text-white text-lg sm:text-xl md:text-2xl font-bold w-1/4 text-right">
                Phone:
              </Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={formData.phone || ""}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="form-control bg-white text-black w-3/4"
                required
              />
            </Form.Group>

            <Form.Group
              controlId="email"
              className="mb-4 flex items-center space-x-4 sm:space-x-6 md:space-x-8"
            >
              <Form.Label className="text-white text-lg sm:text-xl md:text-2xl font-bold w-1/4 flex items-center text-right">
                Email:
              </Form.Label>

              <Form.Control
                type="email"
                name="email"
                value={formData.email || ""}
                onChange={handleChange}
                placeholder="Enter your email"
                className="form-control bg-white text-black w-3/4"
                required
              />
            </Form.Group>

            <Form.Group
              controlId="message"
              className="mb-6 flex items-center space-x-4 sm:space-x-6 md:space-x-8"
            >
              <Form.Label className="text-white text-lg sm:text-xl md:text-2xl font-bold w-1/4">
                Message:
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                value={formData.message || ""}
                onChange={handleChange}
                placeholder="Your message"
                className="form-control bg-white text-black w-3/4"
                required
              />
            </Form.Group>
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="px-10 text-lg sm:text-xl md:text-2xl py-1 !rounded-full border-2 border-cyan-300 text-cyan-300 font-semibold hover:bg-cyan-300 hover:text-black transition-all cursor-pointer"
              >
                Send
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
