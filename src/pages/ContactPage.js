import { FaPhone, FaEnvelope,FaClock} from "react-icons/fa";

function ContactPage() {
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen px-4 md:px-20 py-10">
      
      <h1 className="text-4xl font-bold text-center mb-8 text-black">
        Contact Us
      </h1>

      <div className="w-full flex flex-col md:flex-row gap-8">
        
        {/* Contact Form */}
        <div className="w-full md:w-6/12 bg-white rounded-2xl shadow-black shadow-lg p-6">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-orange"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-orange"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-orange"
            />
            <button
              type="submit"
              className="bg-orange text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-6/12 bg-white rounded-2xl shadow-lg shadow-black p-6 flex flex-col gap-6 justify-center">
        <h5 className="text-black font-bold">Working hours</h5>
        <div className="flex items-center gap-4">
            <FaClock className="text-orange text-xl" />
            <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
        </div>
        <div className="flex items-center gap-4">
            <FaClock className="text-orange text-xl" />
            <p>Saturday: 10:00 AM – 4:00 PM</p>
        </div>
        <div className="flex items-center gap-4">
            <FaClock className="text-orange text-xl" />
            <p>Sunday: Closed</p>
        </div>
        <hr/>
          <div className="flex items-center gap-4">
            <FaPhone className="text-orange text-xl" />
            <p>+1 (123) 456-7890</p>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-orange text-xl" />
            <p>surjeetkaur961@gmail.com</p>
          </div>
          <p className="text-gray-600">
            Feel free to contact us for any inquiries, orders, or collaborations. We’re happy to assist you!
          </p>
        </div>

      </div>
    </div>
  );
}
export default ContactPage;