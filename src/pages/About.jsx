import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">About Hotel Paradise</h1>
        </div>
      </header>

      <main className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="mt-4 text-gray-600">Hotel Paradise was established in 1990 with the vision of providing luxury and comfort to travelers from around the world. Our commitment to excellence has earned us numerous awards and a loyal clientele.</p>
          <div className="mt-8 flex justify-center">
            <img src="GPTENG:get_img(hotel history)" alt="Hotel History" className="w-1/2 rounded-lg shadow-lg" />
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2023 Hotel Paradise. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
