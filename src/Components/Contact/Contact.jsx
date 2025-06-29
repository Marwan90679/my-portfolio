import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaLinkedin, // For LinkedIn social link
  FaTwitterSquare, // For Twitter social link
  FaGithubSquare, // For GitHub social link
} from "react-icons/fa"; // Import necessary Font Awesome icons from react-icons
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="h-6 w-6" />,
      title: "My Location",
      text: "Sylhet, Bangladesh",
    },
    {
      icon: <FaEnvelope className="h-6 w-6" />,
      title: "Email Me",
      text: "marwanedyes@gmail.com",
    },
    {
      icon: <FaPhone className="h-6 w-6" />,
      title: "Call or WhatsApp",
      text: ["+8801763193473"],
    },
    {
      icon: <FaClock className="h-6 w-6" />,
      title: "Availability",
      text: [
        'Weekdays: 9:00 AM - 5:00 PM (GMT+6)',
        'Weekends: By Appointment',
      ],
    },
  ];
  return (
    <section name='contact' className="min-h-screen bg-stone-900 font-rubik py-12 lg:py-20">
      <div className="w-11/12 md:w-3/4 lg:w-2/3 mx-auto flex flex-col justify-center">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-50 mb-4">
            Let's connect
          </h1>
          <p className="text-stone-300 text-lg sm:text-xl max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        {/* Contact Form and Info Grid */}
        <div className="flex lg:flex-row flex-col gap-12 flex-grow items-center ">
          {/* Contact Form */}
          <div className="bg-stone-800 p-6 sm:p-8 md:p-10 rounded-xl shadow-lg w-full">
            <h2 className="font-rubik text-2xl sm:text-3xl font-bold text-gray-50 mb-6">
              Send me a message
            </h2>

            <form className="space-y-5" action='https://formspree.io/f/xwpbykdy' method="POST">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm sm:text-base font-medium text-stone-700 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name" 
                  className="mt-1 block w-full rounded-md border-stone-300 bg-white text-stone-800 shadow-sm
                             focus:border-stone-500 focus:ring-stone-500 p-3 outline-none focus:ring-2"
                  placeholder="Name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm sm:text-base font-medium text-stone-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email" 
                  className="mt-1 block w-full rounded-md border-stone-300 bg-white text-stone-800 shadow-sm
                             focus:border-stone-500 focus:ring-stone-500 p-3 outline-none focus:ring-2"
                  placeholder="your email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm sm:text-base font-medium text-stone-700 mb-1"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="_subject" 
                  className="mt-1 block w-full rounded-md border-stone-300 bg-white text-stone-800 shadow-sm
                             focus:border-stone-500 focus:ring-stone-500 p-3 outline-none focus:ring-2"
                >
                  <option>General Inquiry</option>
                  <option>Project Collaboration</option>
                  <option>Career Opportunity</option>
                  <option>Feedback</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm sm:text-base font-medium text-stone-700 mb-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5} 
                  className="mt-1 block w-full rounded-md border-stone-300 bg-white text-stone-800 shadow-sm
                             focus:border-stone-500 focus:ring-stone-500 p-3 outline-none focus:ring-2"
                  placeholder="Tell me about your project or inquiry..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-50 text-stone-800 font-bold py-3 px-4 rounded-md
                           transition duration-300 flex items-center justify-center hover:bg-stone-700 hover:text-white"
              >
                <FaEnvelope className="mr-3 text-lg" /> Send Message
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="w-full space-y-6 md:space-y-8 p-6 sm:p-8 md:p-10 bg-stone-800 rounded-xl shadow-lg text-gray-50">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Contact Information
            </h2>
            {contactInfo.map(({ icon, title, text }, index) => (
              <div className="flex items-start" key={index}>
                <div className="flex-shrink-0 bg-stone-700 p-3 rounded-full text-white shadow-md">
                  {icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg sm:text-xl font-medium mb-1">
                    {title}
                  </h3>
                  {Array.isArray(text) ? (
                    text.map((t, i) => (
                      <p
                        className="text-stone-300 text-sm sm:text-base leading-snug"
                        key={i}
                      >
                        {t}
                      </p>
                    ))
                  ) : (
                    <p className="text-stone-300 text-sm sm:text-base leading-snug">
                      {text}
                    </p>
                  )}
                </div>
              </div>
            ))}
            <div className="pt-6 border-t border-stone-700 mt-6">
              <h3 className="text-lg sm:text-xl font-medium mb-4">Connect with me:</h3>
              <div className="flex space-x-5 text-gray-50 justify-center">
                <a
                  href="https://github.com/Marwan90679"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="hover:text-stone-300 transition-colors"
                >
                  <FaGithubSquare className="text-3xl sm:text-4xl" />
                </a>
                <a
                  href="https://x.com/marwanedyes"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X/Twitter"
                  className="hover:text-stone-300 transition-colors"
                >
                  <FaXTwitter className="text-3xl sm:text-4xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
