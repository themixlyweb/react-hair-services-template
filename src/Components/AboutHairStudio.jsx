import React from "react";
import { motion } from "framer-motion";
import homeAbout from "../Images/home-about.webp";

const AboutHairStudio = () => {
  return (
    <>
      <section className="about-section">
        <div className="about-section-content">
        {/* IMAGE SIDE */}
        <motion.div
          className="image-div"
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.img
            src={homeAbout}
            alt="about hair studio"
            className="about-img"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </motion.div>

        {/* TEXT SIDE */}
        <motion.div
          className="text-div"
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* HEADING */}
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="special-heading-wrapper">
              About
              {/* LINE UNDER “ABOUT” */}
              <motion.span
                className="heading-line"
                initial={{ width: 0 }}
                whileInView={{ width: "120px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              ></motion.span>
            </div>

            {/* SUB-HEADING */}
            <motion.div
              className="main-title"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.6 }}
            >
              HAIR STUDIO
            </motion.div>
          </motion.h2>

          {/* PARAGRAPH */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
            viewport={{ once: true }}
          >
            At The Hair Studio, we believe that great style begins with great
            care and attention to detail. Our salon blends creativity, comfort,
            and craftsmanship — a space where every client enjoys a truly
            personalized experience. From precision haircuts and advanced
            coloring techniques to rejuvenating treatments and signature styling,
            our expert team ensures each look is uniquely tailored to enhance
            your individuality. With a warm, modern atmosphere and a passion for
            perfection, we go beyond trends to create timeless beauty and
            confidence. Whether you’re seeking a subtle refresh or a complete
            transformation, The Hair Studio is where your best look begins and
            lasting impressions are made.
          </motion.p>
        </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutHairStudio;
