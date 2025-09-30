export const MOCK_DATA = {
  hero: {
    title: "Bring Art Into Your Home",
    subtitle: "Discover unique hand-painted artworks, crafted with passion.",
    buttonText: "Shop Paintings",
    backgroundImage: "/images/test.jpg",
    painting1:"images/hero-painting1.jpeg",
    painting2:"images/hero-painting2.jpeg",
    painting3:"images/hero-painting3.jpg"  
  },
   collections: [
    { id: "c1", name: "Abstract", image: "/images/collections/abstract-art.jpg" },
    { id: "c2", name: "Landscape", image: "/images/collections/landscape-art.jpg" },
    { id: "c3", name: "Modern", image: "/images/collections/modern-art.jpg" },
    { id: "c4", name: "Traditional", image: "/images/collections/traditional-art.jpg" }
  ],
  paintings: [
    // Abstract
    { id: "p1", title: "Color Splash", artist: "A. Sharma", price: 120, image: "/images/collections/abstract-art.jpg", collectionId: "c1", isTrending: true },
    { id: "p2", title: "Dream Flow", artist: "K. Singh", price: 200, image: "/images/collections/abstract-art.jpg", collectionId: "c1", isBestSeller: true },
    { id: "p3", title: "Chaos Harmony", artist: "N. Verma", price: 180, image: "/images/collections/abstract-art.jpg", collectionId: "c1" },

    // Landscape
    { id: "p7", title: "Mountain View", artist: "L. Brown", price: 180, image: "/images/collections/landscape-art.jpg", collectionId: "c2", isTrending: true },
    { id: "p8", title: "Sunset Valley", artist: "J. Patel", price: 250, image: "/images/collections/landscape-art.jpg", collectionId: "c2", isBestSeller: true },
    { id: "p9", title: "Golden Field", artist: "C. White", price: 190, image: "/images/collections/landscape-art.jpg", collectionId: "c2" },

    // Modern
    { id: "p13", title: "Urban Nights", artist: "C. Lee", price: 300, image: "/images/collections/modern-art.jpg", collectionId: "c3", isTrending: true },
    { id: "p14", title: "Neon Dreams", artist: "M. Carter", price: 350, image: "/images/collections/modern-art.jpg", collectionId: "c3" },
    { id: "p15", title: "Digital Flow", artist: "A. Johnson", price: 280, image: "/images/collections/modern-art.jpg", collectionId: "c3", isOnSale: true },

    // Traditional
    { id: "p19", title: "Village Life", artist: "R. Mehta", price: 220, image: "/images/collections/traditional-art.jpg", collectionId: "c4" },
    { id: "p20", title: "Cultural Roots", artist: "S. Kaur", price: 270, image: "/images/collections/traditional-art.jpg", collectionId: "c4", isBestSeller: true },
    { id: "p21", title: "Festival Night", artist: "P. Joshi", price: 240, image: "/images/collections/traditional-art.jpg", collectionId: "c4", isTrending: true }
  ],
  about: {
    text: "We are a passionate team creating and selling original artworks for your home.",
    image: "/images/about-image.jpg"
  },
  contact: {
    email: "info@paintingstore.com",
    phone: "+1 123 456 7890",
    address: "123 Art Street, Toronto, Canada",
    socialLinks: {
      facebook: "https://facebook.com/paintingstore",
      instagram: "https://instagram.com/paintingstore",
      twitter: "https://twitter.com/paintingstore"
    }
  }
};

