import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-5xl bg-white shadow-lg rounded-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">About Us</h1>
        <p className="text-center text-gray-600 text-lg mb-8">
          Welcome to <span className="font-semibold text-blue-600">Book Haven</span>, your one-stop destination for buying, selling, and discovering books from every genre.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed">
              At <span className="font-semibold">Book Haven</span>, we believe that every story deserves a reader. Our mission is to connect book lovers worldwide through a platform that makes books accessible, affordable, and enjoyable.
              Whether you're a fan of fiction, non-fiction, or rare collectibles, we have something for everyone.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Offer</h2>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed">
              <li>A vast collection of books across various genres.</li>
              <li>Exclusive deals and discounts on bestsellers.</li>
              <li>User-friendly platform for buying and selling books.</li>
              <li>Community recommendations and curated book lists.</li>
              <li>Fast and reliable delivery to your doorstep.</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            We envision a world where knowledge, stories, and education are accessible to all. Join us on this journey to bring books closer to readers and create a community of passionate book lovers.
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <a
            href="/course"
            className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-blue-700 transition-all"
          >
            Explore Our Collection
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
