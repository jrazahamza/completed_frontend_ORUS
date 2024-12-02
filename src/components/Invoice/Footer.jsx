import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-5xl mx-auto flex justify-between">
        <div>
          <h2 className="text-lg font-bold">ORUS</h2>
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <nav className="flex flex-col gap-2">
          <Link href="/" className="text-sm">Privacy & Cookies</Link>
          <Link href="/" className="text-sm">Terms of Use</Link>
          <Link href="/" className="text-sm">Get The App</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
