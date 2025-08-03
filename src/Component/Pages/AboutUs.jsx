import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="relative text-white px-4 py-20 space-y-20 overflow-hidden">
      {/* Background Image with dark overlay */}
      <div
  className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
  style={{
    backgroundImage: `url('https://files.123freevectors.com/wp-content/original/142195-blue-and-white-simple-background.jpg')`,
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black opacity-60"></div>
</div>


      {/* Content Container */}
      <div className="relative z-10">
        {/* Our Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto bg-[#111936]/80 backdrop-blur-md rounded-3xl shadow-xl p-8 flex flex-col md:flex-row gap-10 items-center hover:scale-[1.02] transition-transform duration-300"
        >
          <img
            // src="https://cpea.neocities.org/FOURMAX/images/Product.jpg"
            alt="C. PRABU - Managing Director"
            className="w-64 h-64 object-cover rounded-xl shadow-md"
          />
          <div className="text-center md:text-left space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-purple-400">C. PRABU</h2>
            <p className="text-sm bg-[#222b4f] inline-block px-4 py-1 rounded-full text-gray-100">Managing Director</p>
            <p className="text-gray-200 leading-relaxed">
              C.PRABU brings over 20 years of pharmaceutical industry experience to Fourmax.
              Under his leadership, the company has pioneered several breakthrough medications and expanded its global presence.
            </p>
            <ul className="space-y-2 text-sm text-purple-200">
              <li>🎓 Ph.D. in Pharmaceutical Sciences</li>
              <li>💼 Former Research Director at Global Pharma Institute</li>
              <li>👥 Board Member of International Pharmaceutical Association</li>
            </ul>
          </div>
        </motion.div>

        {/* Mission, Vision, Values */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          {[
            {
              title: "Our Mission",
              desc: "To provide innovative pharmaceutical solutions that improve the quality of life for people worldwide.",
            },
            {
              title: "Our Vision",
              desc: "To be a leading force in global healthcare, known for excellence in pharmaceutical research and development.",
            },
            {
              title: "Our Values",
              desc: (
                <ul className="space-y-2">
                  <li>✔ Quality</li>
                  <li>💡 Innovation</li>
                  <li>⚖ Integrity</li>
                  <li>🛡 Patient Safety</li>
                </ul>
              ),
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="bg-[#111936]/80 backdrop-blur-md p-6 rounded-2xl shadow-md text-center transform transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold text-blue-300 mb-3">{item.title}</h3>
              <div className="text-gray-200 text-sm leading-relaxed">
                {item.desc}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
