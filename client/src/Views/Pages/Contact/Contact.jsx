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
        "service_a7ogqo6",
        "template_1u12neg",
        form.current,
        "0F1I_evtXzAvXqrLL"
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
      <div className="flex items-center justify-center w-full sm:w-3/4 md:w-1/2 lg:w-1/3 h-3/4 bg-transparent p-6">
        <div className="w-full max-w-md">
          <h2 className=" text-center !text-cyan-300 !text-5xl sm:text-4xl md:text-5xl mb-6 pt-10">
            Contact Me
          </h2>
          <Form
            ref={form}
            onSubmit={sendEmail}
            className="bg-transparent p-6 rounded-lg shadow-lg"
          >
            <Form.Group
              controlId="name"
              className="mb-4 flex items-center space-x-4 sm:space-x-6 md:space-x-8"
            >
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
              {/* <Form.Label className="text-white text-lg sm:text-xl md:text-2xl font-bold w-1/4 text-right">
                Phone:
              </Form.Label> */}
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
              {/* <Form.Label className="text-white text-lg sm:text-xl md:text-2xl font-bold w-1/4 flex items-center text-right">
                Email:
              </Form.Label> */}

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
              {/* <Form.Label className="text-white text-lg sm:text-xl md:text-2xl font-bold w-1/4">
                Message:
              </Form.Label> */}
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
                className="!text-xl sm:text-xl md:text-2xl  px-20 py-3 !rounded-full border-2 font-semibold bg-cyan-300 hover:bg-black hover:text-cyan-300 hover:border-cyan-300 transition-all cursor-pointer"
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
