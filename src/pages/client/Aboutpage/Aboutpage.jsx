import React from 'react';

const About = () => {
  return (
    <div className="bg-white text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
      <img
        className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]"
        src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxtYWtlJTIwdXAlMkNnbGFtfGVufDB8fHx8MTYxMjQ1NjU4Nnw&ixlib=rb-4.0.3&q=80&w=1080"
        alt="Glam Craft"
      />
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          About Glam Craft
        </h1>
        <p className="text-lg leading-relaxed mb-4">
          Welcome to <span className="text-pink-500">Glam Craft</span>, your one-stop destination for high-quality cosmetics that enhance your natural beauty. We are passionate about bringing you the best products from the world of beauty, offering a curated selection of items that are both luxurious and affordable.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          At Glam Craft, we believe that everyone deserves to look and feel their best, which is why we focus on providing a wide range of products to suit every skin tone, type, and personal style. Whether you’re looking for bold and vibrant colors or subtle and sophisticated shades, you’ll find exactly what you need in our collection.Our mission is to empower you to express yourself through makeup and skincare, offering products that not only enhance your appearance but also boost your confidence. We carefully select each item to ensure it meets our high standards of quality, safety, and effectiveness.
        </p>
       
        <p className="text-lg leading-relaxed mb-4">
          Glam Craft is more than just a beauty store; it’s a community of beauty enthusiasts who share a love for creativity, self-expression, and self-care. We are committed to providing exceptional customer service and a seamless shopping experience, so you can focus on what truly matters embracing your unique beauty.Join us on our journey to celebrate beauty in all its forms. Discover the perfect products to craft your own glam look, and let us help you shine every day.
        </p>
       
      </div>
    </div>
  );
};

export default About;