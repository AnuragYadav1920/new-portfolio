import React from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import "./pages.css";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const accessKey = "8b1279b2-bf74-4224-b094-fd568054e17c";

  const { submit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Anurag Yadav",
      subject: "New Contact Message from Portfolio",
    },
    onSuccess: () => {
      alert("Message sent successfully!");
      reset();
    },
    onError: (error) => {
      alert("Failed to send message. Please try again.");
      console.error(error);
    },
  });
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1 className="title">Contact Me</h1>
        <div className="contact-page-info">
          <div className="contact-item">
            <h2>Email</h2>
            <p>
              <a href="mailto:anuragyadav.webdev@gmail.com">
                anuragyadav.webdev@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-item">
            <h2>Phone</h2>
            <p>+91 6387208361</p>
          </div>
          <div className="contact-item">
            <h2>LinkedIn</h2>
            <p>
              <a
                href="https://www.linkedin.com/in/anuragyadav1920/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/anuragyadav
              </a>
            </p>
          </div>
          <div className="contact-item">
            <h2>GitHub</h2>
            <p>
              <a
                href="https://github.com/AnuragYadav1920"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/anuragyadav
              </a>
            </p>
          </div>
          <div className="contact-item">
            <h2>Location</h2>
            <p>C-41 sector 63A Noida, India</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(submit)} className="contact-form">
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Your Name"
          />
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Your Email"
          />
          <textarea
            {...register("message", { required: true })}
            placeholder="Your Message"
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
