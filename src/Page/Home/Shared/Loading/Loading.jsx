import React, { useState, useEffect } from "react";

const LoadingComponent = () => {
  const messages = [
    "Now Loading",
    "Now Loading.",
    "Now Loading..",
    "Now Loading...",
  ];
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" flex flex-col justify-center items-center ">
      {/* <div className="w-20 h-20 border-double border-8 border-pink-500 animate-spin-custom mb-3"></div> */}
      <p className="text-black font-mono text-lg">{messages[messageIndex]}</p>
    </div>
  );
};

export default LoadingComponent;
