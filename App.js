import { useState } from "react";
import { motion } from "framer-motion";

const wordPairs = [
  { en: "Monkey", ru: "Обезьяна", img: "https://cdn-icons-png.flaticon.com/512/616/616408.png" },
  { en: "Milk", ru: "Молоко", img: "https://cdn-icons-png.flaticon.com/512/590/590685.png" },
  { en: "Wolf", ru: "Волк", img: "https://cdn-icons-png.flaticon.com/512/616/616408.png" },
  { en: "Peach", ru: "Персик", img: "https://cdn-icons-png.flaticon.com/512/590/590685.png" },
  { en: "Duck", ru: "Утка", img: "https://cdn-icons-png.flaticon.com/512/616/616408.png" },
  { en: "Watch", ru: "Часы", img: "https://cdn-icons-png.flaticon.com/512/61/61045.png" },
  { en: "House", ru: "Дом", img: "https://cdn-icons-png.flaticon.com/512/616/616554.png" },
  { en: "Egg", ru: "Яйцо", img: "https://cdn-icons-png.flaticon.com/512/590/590685.png" },
  { en: "Fork", ru: "Вилка", img: "https://cdn-icons-png.flaticon.com/512/590/590685.png" },
  { en: "Rice", ru: "Рис", img: "https://cdn-icons-png.flaticon.com/512/590/590685.png" }
];

const speak = (text) => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  speechSynthesis.speak(utterance);
};

export default function EnglishMatchGame() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);

  const nextWord = () => {
    setShowTranslation(false);
    setCurrentIndex((prev) => (prev + 1) % wordPairs.length);
  };

  const currentWord = wordPairs[currentIndex];

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', textAlign: 'center' }}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ fontSize: '24px', fontWeight: 'bold' }}
      >
        Match the Word
      </motion.h1>

      <div style={{
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        borderRadius: 16,
        padding: 24,
        backgroundColor: 'white',
        marginTop: 24
      }}>
        <p style={{ fontSize: '20px', fontWeight: '600' }}>{currentWord.en}</p>
        <img
          src={currentWord.img}
          alt={currentWord.en}
          style={{ width: 120, height: 120, objectFit: 'contain', margin: '16px auto' }}
        />
        {showTranslation && <p style={{ fontSize: '18px' }}>{currentWord.ru}</p>}
        <div style={{ marginTop: 12 }}>
          <button
            onClick={() => {
              speak(currentWord.en);
              setShowTranslation(true);
            }}
            style={{
              backgroundColor: '#3b82f6',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '12px',
              border: 'none',
              marginRight: 8
            }}
          >
            Show + Speak
          </button>
          <button
            onClick={nextWord}
            style={{
              backgroundColor: '#e5e7eb',
              padding: '8px 16px',
              borderRadius: '12px',
              border: 'none'
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
