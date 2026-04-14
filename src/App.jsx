import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import logo from "./images/logo.jpeg";
import sun from "./images/sun.jpeg";
import bow from "./images/bowkeychain.jpeg";
import bsf from "./images/bsflowerb.jpeg";
import ckc from "./images/cherrykeychain.jpeg";
import fb from "./images/fb.jpeg";
import fkey from "./images/fkeychain.jpeg";
import fkc from "./images/flowerkeychain.jpeg";
import fll from "./images/flowerlightlamp.jpeg";
import hbkc from "./images/honeybeekeychain.jpeg";
import lfp from "./images/lilyfp.jpeg";
import nbf from "./images/nbsfb.jpeg";
import ptf from "./images/pink-tulip-flower-pot.jpeg";
import pi from "./images/psfb.jpeg";
import pu from "./images/psfb2.jpeg";
import putf from "./images/purple-tulip-flower-pot.jpeg";
import rfkc from "./images/redflowerkeychain.jpeg";
import sfo from "./images/sflower.jpeg";
import sft from "./images/sflower1.jpeg";
import sfk from "./images/smallflowerkeychain.jpeg";
import skc from "./images/starkeychain.jpeg";
import tsfp from "./images/twosunflowerpot.jpeg";
import wb from "./images/whitebearkeychain.jpeg";
import lav from "./images/lavender.jpeg";
import big from "./images/big.jpeg";

export default function FlowerShop() {

  const aboutRef = useRef(null);
  const [page, setPage] = useState("home");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const [products] = useState([
    { id: 1, name: "Flower Bouquet", price: 750, img: big, category: "flower bouquet", summary: "A beautifully handcrafted crochet flower bouquet, designed to last forever. Featuring soft pastel tulips and delicate lilies, wrapped in elegant paper with a luxurious ribbon finish." },
    { id: 2, name: "Bow Key Chain", price: 30, img: bow, category: "key chain", summary: "A cute handmade bow key chain with a playful look for bags and keys." },
    { id: 3, name: "Blue Single Flower Bouquet", price: 230, img: bsf, category: "flower bouquet", summary: "A charming blue bouquet crafted for sweet gifting and soft room decor." },
    { id: 4, name: "Cherry Key Chain", price: 30, img: ckc, category: "key chain", summary: "A tiny cherry-inspired key chain that adds a fun handmade touch." },
    { id: 5, name: "Hand Made Flower Bouquet", price: 350, img: fb, category: "flower bouquet", summary: "A fuller handcrafted bouquet designed to feel special for birthdays and surprises." },
    { id: 6, name: "Flower Key Chain", price: 60, img: fkey, category: "key chain", summary: "A simple floral key chain that brings everyday accessories to life." },
    { id: 7, name: "Flower Key Chain", price: 60, img: fkc, category: "key chain", summary: "A compact flower key chain with a bright handmade finish." },
    { id: 8, name: "Flower Light Lamp", price: 550, img: fll, category: "lamp", summary: "A decorative flower lamp that adds a cozy glow and crafted charm to any corner." },
    { id: 9, name: "HoneyBee Key Chain", price: 60, img: hbkc, category: "key chain", summary: "A sweet little honeybee key chain with a fun and playful style." },
    { id: 10, name: "Lily Flower Pot", price: 150, img: lfp, category: "flower pot", summary: "A graceful lily flower pot made to bring calm elegance to your space." },
    { id: 11, name: "Navy Blue Single Flower Bouquet", price: 230, img: nbf, category: "flower bouquet", summary: "A deep-toned single bouquet with a rich, stylish handmade finish." },
    { id: 12, name: "Pink Tulip Flower Pot", price: 150, img: ptf, category: "flower pot", summary: "A soft pink tulip pot that feels fresh, delicate, and gift-ready." },
    { id: 13, name: "Pink Single Flower Bouquet", price: 230, img: pi, category: "flower bouquet", summary: "A lovely pink bouquet perfect for thoughtful gifts and cute room decor." },
    { id: 14, name: "Purple Single Flower Bouquet", price: 230, img: pu, category: "flower bouquet", summary: "A purple bouquet with a bold but elegant handmade feel." },
    { id: 15, name: "Purple Tulip Flower Pot", price: 150, img: putf, category: "flower pot", summary: "A tulip flower pot in purple tones that adds color without being too loud." },
    { id: 16, name: "Red Flower Key Chain", price: 60, img: rfkc, category: "key chain", summary: "A bright red floral key chain that stands out beautifully on bags and keys." },
    { id: 17, name: "Single Flower (1 pcs)", price: 120, img: sfo, category: "flower bouquet", summary: "A single handmade flower stem that works well for gifting or custom arrangements." },
    { id: 18, name: "Single Flower Bouquet", price: 230, img: sft, category: "flower bouquet", summary: "A neat single bouquet with a handmade finish that feels simple and special." },
    { id: 19, name: "Small Flower Key Chain", price: 60, img: sfk, category: "key chain", summary: "A mini flower key chain for a light, colorful everyday accessory." },
    { id: 20, name: "Star Key Chain", price: 30, img: skc, category: "key chain", summary: "A star-shaped handmade key chain with a cute, playful personality." },
    { id: 21, name: "Sunflower Pot (1 pcs)", price: 150, img: tsfp, category: "flower pot", summary: "A double sunflower pot arrangement that brings extra warmth and brightness." },
    { id: 22, name: "White Bear Key Chain", price: 30, img: wb, category: "key chain", summary: "An adorable white bear key chain that makes a sweet gift or bag charm." },
    { id: 23, name: "Faux Lavender Flower Pot", price: 150, img: lav, category: "flower pot", summary: "A faux lavender pot with a calm, soothing look for home decor." },
     { id: 24, name: "Sun-Flower Pot", price: 150, img: sun, category: "flower pot", summary: "A cheerful sunflower pot that brightens desks, shelves, and gifting moments." },
  ]);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const floatingPetals = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    x: 120 + i * 140,
    duration: 10 + i * 2,
  }));

  return (
    <div className="bg-[#FFFBF7] text-gray-700 font-sans min-h-screen">


      {/* NAVBAR */}
      <nav className="fixed w-full bg-white/70 backdrop-blur-xl border-b px-4 md:px-8 py-4 flex justify-between items-center z-50">

        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setPage("home")}>
          <img src={logo} alt="The Art Of Hand Made Craft logo" className="w-10 h-10 rounded-full object-cover" />
          <h1 className="text-xl md:text-2xl font-bold text-[#D4A373]">
            THE ART OF HANDMADE CRAFT
          </h1>
        </div>

        <div className="hidden md:flex gap-10 uppercase text-sm tracking-widest">
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("shop")}>Shop</button>
          <button onClick={() => aboutRef.current?.scrollIntoView({ behavior: "smooth" })}>About</button>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <button className="md:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
            <div className="w-6 h-0.5 bg-black mb-1"></div>
            <div className="w-6 h-0.5 bg-black mb-1"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </button>
        </div>

        {mobileMenu && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-6 md:hidden">
            <button onClick={() => { setPage("home"); setMobileMenu(false); }}>Home</button>
            <button onClick={() => { setPage("shop"); setMobileMenu(false); }}>Shop</button>
            <button onClick={() => { aboutRef.current?.scrollIntoView({ behavior: "smooth" }); setMobileMenu(false); }}>About</button>
          </div>
        )}
      </nav>


      {/* ================= HOME PAGE ================= */}
      {page === "home" && (
        <>

          {/* HERO */}
          <section className="h-screen flex items-center justify-center relative overflow-hidden">

            {/* Background Image Animation */}
            <motion.img
              src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9"
              className="absolute w-full h-full object-cover"
              initial={{ scale: 1.3 }}
              animate={{ scale: 1 }}
              transition={{ duration: 6 }}
            />

            <div className="absolute w-full h-full bg-black/40"></div>

            {/* Floating petals effect */}
            {floatingPetals.map((petal) => (
              <motion.div
                key={petal.id}
                className="absolute w-6 h-6 bg-pink-200 rounded-full opacity-70"
                initial={{ y: -50, x: petal.x }}
                animate={{ y: 900 }}
                transition={{ repeat: Infinity, duration: petal.duration, ease: "linear" }}
              />
            ))}

            {/* Text Animation */}
            <div className="text-center text-white z-10">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-3xl sm:text-4xl md:text-7xl font-bold mb-6 px-4"
              >
                Handmade Flower Bouquets & Crafts
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="mb-8 text-lg md:text-xl"
              >
                Handmade flowers for gifts, weddings and special moments 🌸
              </motion.p>

              <motion.button
                onClick={() => setPage("shop")}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="bg-[#D4A373] px-10 py-4 rounded-full font-semibold shadow-xl hover:scale-105 transition"
              >
                Shop Now
              </motion.button>
            </div>
          </section>


          {/* MOVING FLOWERS (LEFT TO RIGHT CONTINUOUS) */}
          <section className="py-16 bg-white overflow-hidden">

            <motion.div
              animate={{ x: [0, -2000] }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="flex gap-10 w-max"
            >
              {[...products, ...products].map((item, index) => (
                <img
                  key={index}
                  src={item.img}
                  className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-3xl shadow-lg"
                />
              ))}
            </motion.div>

          </section>


          {/* ABOUT */}
          <section ref={aboutRef} className="py-24 px-8 text-center">
            <h2 className="text-4xl mb-6 font-bold">About The Art Of Hand Made Craft</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              We create Handmade flower bouquets, handmade pipe cleaner flowers, and premium floral gift crafts for birthdays, weddings and special occasions.
            </p>
          </section>
        </>
      )}


      {/* ================= SHOP PAGE ================= */}
      {page === "shop" && (
        <div className="pt-32 px-8 max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-4">Handmade Flowers & Crafts</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {["all", "flower bouquet", "flower pot", "key chain", "lamp"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full border transition ${
                  selectedCategory === category
                    ? "bg-[#D4A373] text-white border-[#D4A373]"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                {category === "all"
                  ? "All"
                  : category === "flower bouquet"
                    ? "Flower Bouquet"
                    : category === "flower pot"
                      ? "Flower Pot"
                  : category === "key chain"
                    ? "Key Chain"
                    : category === "lamp"
                      ? "Lamp"
                      : "Flower Bouquet"}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-3xl shadow-lg overflow-hidden">

                <img src={product.img} className="w-full h-80 object-cover" />

                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-500 text-sm mb-2">{product.summary}</p>
                  <p className="text-[#D4A373] font-bold mb-5">₹{product.price}</p>

                </div>

              </div>
            ))}
          </div>

        </div>
      )}


      {/* FOOTER */}
      <footer className="bg-[#4A4A4A] text-white py-16 px-8 text-center mt-24">
        <h2 className="text-3xl font-bold mb-6">The Art Of Hand Made Craft</h2>
        <p className="opacity-70">Luxury flower shop for your special moments.</p>

        <a
          href="https://www.instagram.com/theartofhandmadecrafts?igsh=d240N2Rrdm1xbGxz"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 mt-6 text-sm hover:opacity-80"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
          <span>Instagram</span>
        </a>
      </footer>

    </div>
  );
}
