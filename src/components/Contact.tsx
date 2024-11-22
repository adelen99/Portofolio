import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const Contact = (): React.ReactNode => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setLoading(true);

    emailjs
      .send(
        "service_8efj11z",
        "template_8c7tfcr",
        {
          from_name: form.name,
          to_name: "Adelin",
          from_email: form.email,
          to_email: "lupuadelin4@gmail.com",
          message: form.message,
        },
        "F0BtiREFZe2TT26KQ"
      )
      .then(
        () => {
          setLoading(false);
          alert("Than you. I will get back to you as soon as possible");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong.");
        }
      );

    // Reset loading state after submission
    setLoading(false);
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden ">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-[#2d6a4f] p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-[#1a4e47] py-4 px-6 text-white rounded-lg outline-none placeholder:text-secondary border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-[#1a4e47] py-4 px-6 text-white rounded-lg outline-none placeholder:text-secondary border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-[#1a4e47] py-4 px-6 text-white rounded-lg outline-none placeholder:text-secondary border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-[#1a4e47] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
