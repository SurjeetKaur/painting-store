
import { useRef } from "react";
import { MOCK_DATA} from "../constants/mockData.js";
import { useNavigate } from "react-router-dom";



function TrendingPaintings() {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const trendingPaintings = MOCK_DATA.paintings.filter(
    (p) => p.isTrending
  );

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300; // pixels to scroll
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 px-6 md:px-20 bg-lightpink relative">
      <h2 className="text-3xl font-bold text-center mb-8">Trending Paintings</h2>

      {/* Left Scroll Button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black text-white p-3 rounded-full shadow z-10 hover:bg-gray-800"
      >
        ◀
      </button>

      {/* Scrollable Row */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden scroll-smooth"
      >
        {trendingPaintings.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow hover:shadow-xl overflow-hidden min-w-[250px]"
          >
            <img
              onClick={() => navigate(`/painting/${item.id}`)}
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-500 mb-4">${item.price}</p>
              <button
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Right Scroll Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black text-white p-3 rounded-full shadow z-10 hover:bg-gray-800"
      >
        ▶
      </button>
    </section>
  );
}

export default TrendingPaintings;
