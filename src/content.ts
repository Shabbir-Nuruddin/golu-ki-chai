import "@fontsource/fredoka/500.css";
import "@fontsource/fredoka/600.css";
import type { Site } from "./lib";

export const SITE: Site = {
  name: "Golu Ki Chai",
  sub: { en: "Pure veg café, open 24/7 · opposite HUDA Market, Sector 14", hi: "शुद्ध शाकाहारी कैफ़े, 24/7 खुला · हुडा मार्केट के सामने, सेक्टर 14" },
  banner: { en: "Kadak chai, any hour of the day", hi: "कड़क चाय, दिन के किसी भी वक़्त" },
  phone: "918168424646",
  phoneDisplay: "+91 81684 24646",
  lat: 28.4743972,
  lon: 77.046879,
  hours: [[0, 24], [0, 24], [0, 24], [0, 24], [0, 24], [0, 24], [0, 24]],
  theme: {
    dark: false,
    bg: "#ffffff",
    bg2: "#f1f4f8",
    panel: "#ffffff",
    ink: "#10141a",
    ink2: "#434a54",
    ink3: "#7d858f",
    line: "#dfe5ec",
    accent: "#3d5a80",
    onAccent: "#ffffff",
    display: "Fredoka",
    weight: 600,
    upper: false,
  },
  scene: "feast",
  align: "right",
  hero: {
    title: [
      { en: "Kadak chai,", hi: "कड़क चाय," },
      { en: "homemade taste.", hi: "घर जैसा स्वाद।" },
    ],
    proof: {
      en: "4.9 on Google from 123 reviews. Kadak chai, peri peri fries and homemade-style food, pure veg and open 24/7, opposite HUDA Market in Sector 14.",
      hi: "गूगल पर 123 रिव्यू से 4.9। कड़क चाय, पेरी पेरी फ़्राइज़ और घर जैसा खाना, शुद्ध शाकाहारी और 24/7 खुला, सेक्टर 14 में हुडा मार्केट के सामने।",
    },
    fallback: "/img/p1.jpg",
    slides: ["/img/p1.jpg", "/img/p10.jpg", "/img/p12.jpg"],
  },
  marquee: ["Kadak Chai", "Paratha", "Peri Peri Fries", "Iced Coffee", "Board Games", "Open 24/7", "Pure Veg"],
  dishes: {
    title: { en: "What to order, in guests' words", hi: "क्या मंगाएं, मेहमानों के शब्दों में" },
    body: { en: "Every line is a real Google review.", hi: "हर लाइन असली गूगल रिव्यू है।" },
    layout: "list",
    items: [
      { name: { en: "The chai", hi: "चाय" }, quote: "Absolutely loved the tea at Golu Ki Chai! Fresh, flavorful, and served with great hospitality. A perfect place for chai lovers.", img: "/img/p2.jpg" },
      { name: { en: "Tea & Peri Peri Fries", hi: "चाय और पेरी पेरी फ़्राइज़" }, quote: "I ordered Tea and Perry Perry Fries, both things were awesome.", img: "/img/p11.jpg" },
      { name: { en: "Homemade food", hi: "घर जैसा खाना" }, quote: "It truly feels like homemade comfort food.", img: "/img/p10.jpg" },
      { name: { en: "Kadak chai", hi: "कड़क चाय" }, quote: "Yummy food Kadak chai Good environment & silence", img: "/img/p12.jpg" },
    ],
  },
  gallery: { title: { en: "", hi: "" }, layout: "strip", photos: [] },
  feature: {
    kind: "hosts",
    title: { en: "A family-run corner", hi: "परिवार का चलाया कोना" },
    body: { en: "What guests say about the people behind it, word for word.", hi: "मेहमान इसे चलाने वालों के बारे में क्या कहते हैं, उन्हीं के शब्दों में।" },
    img: "/img/p4.jpg",
    hosts: [
      { name: "Anchal", quote: "Anchal is warm and humble, and her sibling proudly shared how much hard work went into starting the place." },
      { name: "The welcome", quote: "Pleasant atmosphere, polite and attentive girl, and a beautiful view of the mandir." },
      { name: "The people", quote: "One of the best place to chill and have an amazing chai People are also so sweet. Affordable and tasty food Under same roof." },
    ],
  },
  reviews: {
    title: { en: "119 of 123 reviews are five stars", hi: "123 में से 119 रिव्यू पांच स्टार" },
    rating: 4.9,
    dist: [119, 1, 0, 0, 3],
    quotes: [
      { quote: "An absolute hidden gem! Fresh ingredients, amazing flavors, and a very cozy atmosphere.", stars: 5 },
      { quote: "Your go-to no-frills neighborhood cafe serving chill vibes and familiar taste.", stars: 5 },
      { quote: "Just Fabulous !!!!! Great food - it feels like homemade.", stars: 5 },
    ],
  },
  visit: {
    title: { en: "Opposite HUDA Market, Sector 14", hi: "हुडा मार्केट के सामने, सेक्टर 14" },
    img: "/img/p7.jpg",
    alt: "Golu Ki Chai sign",
    address: { en: "Shop No. 171, opposite HUDA Market, Hanuman Mandir Road, DLF Colony, Sector 14, Gurugram 122007", hi: "शॉप नं. 171, हुडा मार्केट के सामने, हनुमान मंदिर रोड, डीएलएफ़ कॉलोनी, सेक्टर 14, गुरुग्राम 122007" },
    note: { en: "Open 24 hours, every day. Pure vegetarian.", hi: "हर दिन 24 घंटे खुला। शुद्ध शाकाहारी।" },
  },
  pour: { from: "jug", into: "kulhad", liquid: "#a0683a", foam: "#e0c09a", thick: 1.4, hot: true },
  story: [
    { kicker: { en: "The chai", hi: "चाय" }, title: { en: "For chai lovers.", hi: "चाय के शौक़ीनों के लिए।" }, quote: "Absolutely loved the tea at Golu Ki Chai! Fresh, flavorful, and served with great hospitality. A perfect place for chai lovers." },
    { kicker: { en: "The food", hi: "खाना" }, title: { en: "Like homemade.", hi: "घर के खाने जैसा।" }, quote: "It truly feels like homemade comfort food." },
    { kicker: { en: "The find", hi: "खोज" }, title: { en: "A hidden gem.", hi: "एक छुपा हुआ नगीना।" }, quote: "An absolute hidden gem! Fresh ingredients, amazing flavors, and a very cozy atmosphere." },
  ],
  build: {
    title: { en: "Build your order in a few taps", hi: "कुछ टैप में अपना ऑर्डर बनाइए" },
    body: { en: "Tap what you want and when. It goes to WhatsApp exactly as you see it.", hi: "जो चाहिए टैप करें और कब, चुनें। मैसेज व्हाट्सऐप पर ठीक ऐसे ही जाएगा।" },
    items: [
      { en: "Kadak Chai", hi: "कड़क चाय" },
      { en: "Paratha", hi: "पराठा" },
      { en: "Peri Peri Fries", hi: "पेरी पेरी फ़्राइज़" },
      { en: "Iced Coffee", hi: "आइस्ड कॉफ़ी" },
    ],
    people: true,
    when: true,
    hello: { en: "Hi Golu Ki Chai, I'd like:", hi: "नमस्ते गोलू की चाय, मुझे चाहिए:" },
  },
  waHello: {
    en: "Hi Golu Ki Chai, I'd like to order. Items: , people: , time: ",
    hi: "नमस्ते गोलू की चाय, मुझे ऑर्डर देना है। आइटम: , लोग: , समय: ",
  },
  order: ["build", "dishes", "feature", "reviews", "visit"],
};
