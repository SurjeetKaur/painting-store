import Counter from "../components/Counter";
import WavyDivider from "../components/WavyDivider";



 function AboutPage() {
  return (
    <div className="flex flex-col bg-gray-100 items-center">

      {/* Section Title */}
      <h1 className="text-4xl font-bold text-center p-4 mb-6 text-black">
        About Us
      </h1>

      {/* Image + Text */}
      <div className="w-full flex flex-col md:flex-row relative mb-10">
        
        {/* Left Image */}
        <div className="w-full md:w-7/12 h-[400px] md:h-[500px]">
          <img
            src="/images/collections/about_us.jpg"
            alt="About Us"
            className="w-full h-full object-cover shadow-lg shadow-black rounded-xl"
          />
        </div>

        {/* Right empty for desktop */}
        <div className="w-full md:w-5/12"></div>

        {/* Text Box */}
        <div
          className="bg-lightpink text-black flex flex-col justify-center items-center shadow-lg shadow-black rounded-2xl p-4
                     mt-4 md:absolute md:top-16 md:left-[40%] md:w-[55%] md:mt-0 w-full"
        >
          <p className="text-lg mb-2">
            Welcome to our Painting Store! We are passionate about art and dedicated to providing you with a curated selection of beautiful paintings from talented artists around the world.
          </p>
          <p className="text-lg mb-2">
            Our mission is to make art accessible to everyone, whether you're a seasoned collector or just starting your journey into the world of art. We believe that art has the power to inspire, uplift, and transform spaces, and we are committed to helping you find the perfect piece that resonates with you.
          </p>
          <p className="text-lg mb-2">
            At our store, you'll find a diverse range of styles and mediums, from contemporary abstracts to classic landscapes. Each painting is carefully selected for its quality, originality, and emotional impact. We work closely with artists to ensure that their work is represented authentically and respectfully.
          </p>
        </div>
      </div>

      {/* Counters */}
      <div className="flex flex-col md:flex-row justify-around w-full px-4 py-6 bg-lightpink shadow-lg rounded-2xl">
        
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <Counter target={500} />
          <p className="text-lg ">Happy Customers</p>
        </div>

        {/* Vertical line */}
        <div className="hidden md:block w-[2px] bg-black h-16 mx-6"></div>

        <div className="flex flex-col items-center mb-4 md:mb-0">
          <Counter target={120} />
          <p className="text-lg">Paintings Sold</p>
        </div>

        {/* Vertical line */}
        <div className="hidden md:block w-[2px] bg-black h-16 mx-6"></div>

        <div className="flex flex-col items-center">
          <Counter target={20} />
          <p className="text-lg">Artists</p>
        </div>
      </div>

      {/* Wavy Divider */}
      <div className="relative w-full mt-10">
        <WavyDivider className="w-full h-auto" />
      </div>

    </div>
  );
}
export default AboutPage;