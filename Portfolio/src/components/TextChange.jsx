import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = [
    "Hi, I'm Gurkirat Singh",
    "Full-Stack Developer",
    "NIT Jalandhar Undergrad",
    "AI & Web Tech Enthusiast"
  ];
  const [currenText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(1);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));
      if (isForward) {
        setEndValue((prev) => prev + 1);
      } else {
        setEndValue((prev) => prev - 1);
      }
      if (endValue > texts[index].length + 10) {
        setIsForward(false);
      }
      if (endValue < 1) {
        setIsForward(true);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }, 60);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);

  return (
    <div className="transition-all duration-200">
      <span>{currenText}</span>
      <span className="inline-block w-1.5 h-8 md:h-12 bg-[#5367b8] ml-1.5 animate-pulse align-middle" />
    </div>
  );
};

export default TextChange;