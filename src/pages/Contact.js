import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can add actual backend logic here (EmailJS, Firebase, Resend)
    console.log("Form submitted:", formData);

    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitted(false), 3000); // Hide after 3 seconds
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Contact Us
        </h2>

        {submitted && (
          <div className="mb-4 p-3 text-green-800 bg-green-100 border border-green-300 rounded">
            Thank you! We’ll get back to you soon.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Your Name</label>
            <input
              name="name"
              type="text"
              required
              className="w-full border px-4 py-2 mt-1 rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block font-medium">Email Address</label>
            <input
              name="email"
              type="email"
              required
              className="w-full border px-4 py-2 mt-1 rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block font-medium">Your Message</label>
            <textarea
              name="message"
              required
              rows="4"
              className="w-full border px-4 py-2 mt-1 rounded resize-none focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Type your message here..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
