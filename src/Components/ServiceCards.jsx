import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { services } from "../Data";

const ServiceCards=()=>{
    return(
        <>
        <section className="services-section">
      {services.slice(0, 3).map((box, i) => (
        <motion.div
          className={`service-card ${box.dark ? "dark" : ""}`}
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: i * 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="service-top">{box.titleTop}</h2>
          <h3 className="service-title">{box.title}</h3>
          <p className="service-sub">{box.subtitle}</p>

          <motion.button
            className="service-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
           <Link to='/apt'> BOOK APPOINTMENT</Link>
          </motion.button>
        </motion.div>
      ))}
    </section>
        </>
    )
}

export default ServiceCards;