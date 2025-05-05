// src\app\components\Navbar.tsx
"use client";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from "framer-motion";
import ConsultationButton from "./ConsultationButton";
import "./Navbar.css";

const NavItem = ({
  text,
  isActive = false,
  onClick,
  href = "#"
}: {
  text: string;
  isActive?: boolean;
  onClick?: () => void;
  href?: string;
}) => (
  <Link
    href={href}
    onClick={onClick}
    className={`relative px-4 py-2 not-lg:text-2xl font-medium transition-all duration-300 ${isActive
      ? 'text-blue-600'
      : 'text-gray-600 hover:text-gray-900'
      }`}
    aria-current={isActive ? "page" : undefined}
  >
    <span className="flex items-center gap-2">
      {text}
      {isActive && (
        <motion.span
          className="absolute inset-x-0 bottom-5 h-[1px] bg-gradient-to-r from-blue-400 to-blue-600"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      )}
    </span>

    {/* Hover effect */}
    {!isActive && (
      <motion.span
        className="absolute inset-x-0 bottom-5 h-[1px] bg-gray-200"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    )}
  </Link>
);

const NavItemMobile = ({
  text,
  isActive = false,
  onClick,
  icon,
  href = "#"
}: {
  text: string;
  isActive?: boolean;
  onClick?: () => void;
  icon: React.ReactNode;
  href?: string;
}) => (
  <Link
    href={`${href}`}
    onClick={onClick}
    className={`flex items-center gap-4 px-6 py-4 rounded-xl transition-all duration-300 
      ${isActive
        ? 'bg-blue-50 border-l-4 border-blue-500 text-blue-600 font-semibold'
        : 'hover:bg-gray-50 hover:pl-8 text-gray-700'}`
    }
    aria-current={isActive ? "page" : undefined}
  >
    <span className="w-6 h-6 opacity-70">{icon}</span>
    <span className="text-lg">{text}</span>
  </Link>
);

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isPastThreshold = window.scrollY > 85;
      setIsScrolled(isPastThreshold);
    };

    // Ensure window is available (client-side only)
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      // Initial check
      handleScroll();

      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <nav className="drawer min-w-full">
      <input id="nav-drawer" type="checkbox" className="drawer-toggle" />

      {/* Main Content */}
      <div className={`drawer-content ${(isScrolled) ? "bg-gray-50 shadow-lg opacity-100" : ""} fixed top-0 z-20 flex min-w-full items-center justify-center transition-all duration-700`}>
        <div className="navbar px-4 sm:px-8 py-4 flex items-center justify-center">
          {/* Mobile Menu Button */}
          <div className="flex-1 lg:hidden">
            <div className="flex items-center gap-1.5">
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">VA</span>
              </div>
              <span>
                <span className="block text-[1rem]">Victory Analytica</span>
                <span className='block -mt-1.5 text-[1rem]'>& Security LLC</span>
              </span>
            </div>
          </div>

          {/* Hamburger Icon */}
          <div className="flex-none lg:hidden">
            <label
              htmlFor="nav-drawer"
              className="btn btn-ghost btn-square drawer-button"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex flex-1 justify-between items-center max-w-7xl mx-auto px-8">
            {/* Branding */}
            <motion.div
              className="flex items-center gap-1.5"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">VA</span>
              </div>
              <span>
                <span className="block text-[1rem]">Victory Analytica</span>
                <span className='block -mt-1.5 text-[1rem]'>& Security LLC</span>
              </span>
            </motion.div>

            {/* Navigation Links */}
            <div className="flex items-center gap-6 mx-8">
              {[
                { text: "Home", path: "/" },
                { text: "About Us", path: "/about" },
                { text: "Case Studies", path: "/case-studies" },
                { text: "Services", path: "/services" },
                { text: "Contact Us", path: "/contact" },
                { text: "FAQs", path: "/faq" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <NavItem
                    text={item.text}
                    isActive={pathName === item.path}
                    href={item.path}
                  />
                  <div className="absolute bottom-5 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                </motion.div>
              ))}
            </div>

            {/* Logo */}
            <motion.div
              // src="https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/d38c8c93a564088312c95cd8902607820f5ba37f?placeholderIfAbsent=true"
              // alt="Company logo"
              className="object-contain w-40 hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            ><ConsultationButton /></motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer - Enhanced Sidebar */}
      <div className="drawer-side z-50">
        <label htmlFor="nav-drawer" className="drawer-overlay"></label>
        <div className="menu bg-gradient-to-b from-blue-50/70 to-white w-80 min-h-full p-6 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-200/30 rounded-full blur-xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-200/30 rounded-full blur-xl" />

          {/* Branding Section */}
          {/* <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-100">
            <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">VA</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Victory Analytica</h2>
              <p className="text-sm text-gray-500">Innovating Solutions</p>
            </div>
          </div> */}
          <div className="flex items-center gap-1.5 mb-8 border-b border-gray-100">
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">VA</span>
              </div>
              <span>
                <span className="block text-[1rem]">Victory Analytica</span>
                <span className='block -mt-1.5 text-[1rem]'>& Security LLC</span>
              </span>
          </div>

          {/* Navigation Menu */}
          <div className="space-y-2 flex-1">
            <NavItemMobile
              text="Home"
              href="/"
              isActive={pathName === "/"}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              }
            />
            <NavItemMobile
              text="About Us"
              href='/about'
              isActive={pathName === "/about"}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
            <NavItemMobile
              text="Case Studies"
              href='/case-studies'
              isActive={pathName === "/case-studies"}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              }
            />
            <NavItemMobile
              text="Services"
              href='/services'
              isActive={pathName === "/services"}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              }
            />
            <NavItemMobile
              text="Contact Us"
              href='/contact'
              isActive={pathName === "/contact"}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
            />
            <NavItemMobile
              text="FAQs"
              href='/faq'
              isActive={pathName === "/faq"}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-18c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.5 9a2.5 2.5 0 115 0c0 1.5-2 2-2 3m0 3h0"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 17.5v.5"
                  />
                </svg>
              }
            />
          </div>

          {/* Company Logo Card */}
          <div className="mt-8 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div
              className="w-full opacity-90 hover:opacity-100 transition-opacity"
            >
              <ConsultationButton className="m-auto" />
            </div>
            <p className="text-center text-sm text-gray-500 mt-2">
              Trusted Since 2015
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};