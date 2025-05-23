"use client";

import React, { useState, useEffect } from "react";
import { FaCog, FaTimes } from "react-icons/fa";

const colors = [
  { light: "#54B689", dark: "#3B7F60" },
  { light: "#5BC3D5", dark: "#3693A4" },
  { light: "#5ECCA9", dark: "#3B9778" },
  { light: "#5D6BA7", dark: "#3C4A7D" },
  { light: "#6C51A4", dark: "#4D3A7A" },
  { light: "#D67553", dark: "#A95139" },
  { light: "#5FCB71", dark: "#3F9B4F" },
  { light: "#EEA73B", dark: "#B87B1F" },
];


const ColorSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [themeColor, setThemeColor] = useState(colors[0]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--main-color",
      themeColor.light
    );
    document.documentElement.style.setProperty(
      "--main-dark-color",
      themeColor.dark
    );
  }, [themeColor]);

  return (
    <div className="fixed top-[80px] right-0 z-50">
      {/* Toggle Button */}
      {!isOpen && (
        <button
          className="bg-[#223142] text-white px-3 py-3 rounded-l shadow-md"
          onClick={() => setIsOpen(true)}
        >
          <FaCog className="text-2xl" />
        </button>
      )}

      {/* Color Options */}
      {isOpen && (
        <div className="relative  flex items-center justify-center">
          <div className="bg-[#223142] text-white px-3 py-3 rounded-l">
            <FaCog className="text-2xl" />
          </div>

          <div className="relative flex flex-col bg-[#223142] pr-8 p-4 rounded-sm">
            {/* Close Icon inside the box */}
            <button
              className="absolute top-2 right-2   text-gray-500 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes className=" text-xs bg-white rounded-full border  border-white" />
            </button>

            <p className="text-sm font-semibold mb-2 text-white">
              CHOOSE COLOUR
            </p>
            <div className="grid grid-cols-4 gap-2">
              {colors.map((color) => (
                <button
                  key={color.light}
                  className="w-6 h-6 rounded"
                  style={{ backgroundColor: color.light }}
                  onClick={() => setThemeColor(color)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorSwitcher;
