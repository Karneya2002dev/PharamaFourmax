import React, { useState } from 'react';
import { motion } from 'framer-motion';

const categories = ['All Products', 'Cardiovascular', 'Respiratory', 'Infectious Disease', 'Diabetics'];

const products = [
  {
    id: 1,
    category: 'Cardiovascular',
    title: 'Cardiovascular Care',
    description: 'Advanced medications for heart health and blood pressure management.',
    image: 'https://cpea.neocities.org/FOURMAX/images/Product.jpg',
  },
  {
    id: 2,
    category: 'Respiratory',
    title: 'Respiratory Solutions',
    description: 'Treatments for asthma, COPD, and other respiratory conditions.',
    image: "https://cpea.neocities.org/FOURMAX/images/Product.jpg",
  },
  {
    id: 3,
    category: 'Infectious Disease',
    title: 'Antibiotics',
    description: 'Broad-spectrum and targeted antibiotics for various infections.',
    image: "https://cpea.neocities.org/FOURMAX/images/Product.jpg",
  },
  {
    id: 4,
    category: 'Diabetics',
    title: 'Diabetes Management',
    description: 'Comprehensive solutions for effective blood sugar control and diabetic care.',
    image: "https://cpea.neocities.org/FOURMAX/images/Product.jpg",
  },
];

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Products');

  const filteredProducts =
    selectedCategory === 'All Products'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="relative text-white py-16 px-4 sm:px-12 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center  z-0"
        style={{
          backgroundImage: `url('https://img.pikbest.com/wp/202347/capsule-pill-pharmacy-and-healthcare-concept-blue-background-with-pills-in-panoramic-layout-3d-render_9763081.jpg!sw800')`,
        }}
      >
        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-10"
        >
          Our Products
        </motion.h2>

        {/* Category Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className={`px-5 py-2 rounded-full font-medium transition shadow-md ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-white text-gray-800 hover:bg-blue-100'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#112244]/80 hover:bg-[#19325f]/90 backdrop-blur-md rounded-2xl p-6 shadow-lg flex flex-col items-center text-center transition-all duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-36 h-36 object-contain mb-4 rounded-xl"
              />
              <h3 className="text-xl font-semibold text-purple-300 mb-2">
                {product.title}
              </h3>
              <p className="text-gray-200 text-sm">{product.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
