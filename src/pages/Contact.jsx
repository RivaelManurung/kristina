import React, { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", 
        "YOUR_TEMPLATE_ID", 
        form.current,
        "YOUR_USER_ID" 
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("An error occurred, please try again.");
        }
      );
  };

  return (
    <div id="contact" className="p-10 bg-base-200 text-center">
      <h2 className="text-4xl font-bold mb-5">Contact Me</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 max-w-md mx-auto"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="input input-bordered"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="input input-bordered"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="textarea textarea-bordered"
          required
        ></textarea>
        <button type="submit" className="btn btn-primary mt-3">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
