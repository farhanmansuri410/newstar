import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_bjnfmlf", // ✅ Replace with your actual Service ID
        "template_tx9brl6", // ✅ Replace with your actual Template ID
        formData,
        "QTOwp16DqY9IUolfU" // ✅ Replace with your Public Key
      )
      .then(
        (result) => {
          alert("Thank you for contacting New Star Service Center!");
          setFormData({ name: "", phone: "", email: "", message: "" });
        },
        (error) => {
          alert("Something went wrong, please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <section id="contact" className="bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-6">
          Connect With New Star Service Center
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Have questions or need help? Send us a message and our team will get back to you shortly.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-blue-50 p-8 rounded-2xl shadow-xl"
        >
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your mobile number"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email address"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message / Issue
            </label>
            <textarea
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tell us about the issue you're facing..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
