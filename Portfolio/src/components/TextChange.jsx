import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = [
    "Full-Stack Developer",
    "MERN Stack Engineer",
    "NITJ CS Undergrad",
    "AI & RAG Enthusiast"
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
    <div className="inline-flex items-center whitespace-nowrap">
      <span>{currenText}</span>
      <span className="inline-block w-1 sm:w-1.5 h-6 sm:h-8 lg:h-9 bg-indigo-400 ml-1.5 animate-pulse" />
    </div>
  );
};

export default TextChange;