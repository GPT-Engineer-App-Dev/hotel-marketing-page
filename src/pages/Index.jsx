import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaStar } from "react-icons/fa";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Hotel Paradise</h1>
          <nav className="space-x-4">
            <a href="#home" className="text-gray-700 hover:text-gray-900">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-gray-900">
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-gray-900">
              Services
            </a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('GPTENG:get_img(hotel exterior)')" }}>
          <div className="container mx-auto px-6 py-40 text-center text-white relative">
            <img src="GPTENG:get_img(hero image)" alt="Hero Image" className="absolute inset-0 w-full h-full object-cover opacity-50" />
            <h2 className="text-4xl font-bold">Welcome to Hotel Paradise</h2>
            <p className="mt-4 text-lg">Experience luxury and comfort in the heart of the city.</p>
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700">Book Now</button>
          </div>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold">About Us</h2>
            <p className="mt-4 text-gray-600">Hotel Paradise offers the finest amenities and services to make your stay unforgettable. Our rooms are designed with comfort and luxury in mind, ensuring a relaxing experience for all our guests.</p>
            <div className="mt-8 flex justify-center">
              <img src="GPTENG:get_img(hotel lobby)" alt="Hotel Lobby" className="w-1/2 rounded-lg shadow-lg" />
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-gray-100">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold">Our Services</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <FaStar className="text-yellow-500 text-4xl mx-auto" />
                <h3 className="mt-4 text-xl font-bold">Luxury Rooms</h3>
                <p className="mt-2 text-gray-600">Our rooms are equipped with the best amenities to ensure a comfortable stay.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <FaStar className="text-yellow-500 text-4xl mx-auto" />
                <h3 className="mt-4 text-xl font-bold">Fine Dining</h3>
                <p className="mt-2 text-gray-600">Enjoy gourmet meals prepared by our world-class chefs.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <FaStar className="text-yellow-500 text-4xl mx-auto" />
                <h3 className="mt-4 text-xl font-bold">Spa & Wellness</h3>
                <p className="mt-2 text-gray-600">Relax and rejuvenate with our spa and wellness services.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold">Contact Us</h2>
            <p className="mt-4 text-gray-600">We would love to hear from you. Reach out to us for any inquiries or reservations.</p>
            <div className="mt-8 flex justify-center space-x-8">
              <div className="flex items-center space-x-2">
                <FaPhone className="text-blue-600" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-blue-600" />
                <span>info@hotelparadise.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-blue-600" />
                <span>123 Paradise St, City, Country</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2023 Hotel Paradise. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
