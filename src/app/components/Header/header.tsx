"use Client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Avatar from "@/app/Assets/Avatar.png";
import "./header.css";
import { NavDropdown } from "react-bootstrap";

export default function Header() {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      isDropdownOpen &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      console.log("clicked outside");
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when the component is unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const redirectToSettings = () => {
    console.log("redirected to Settings Page");
  };

  const toggleDropdown = () => {
    console.log("toggled");
    setIsDropdownOpen((prevState) => !prevState);
  };

  const redirectToLoginPage = () => {
    console.log("logged Out")
    router.push("/auth/signin");
  };

  return (
    <header className="header">
      <div className="navbar-container-flex">
        <div className="navigation">
          <div className="header-heading x-large">
            <h1>Crypto Co Counsel - Compass</h1>
          </div>
          <div className="signout-label">
            <div className="mb-6" ref={dropdownRef}>
              <Image
                src={Avatar}
                alt="User Avatar"
                className="image-positioning"
                onClick={toggleDropdown}
              />
            </div>
          </div>
          {isDropdownOpen && (
            <div className="dropdown">
              <div className="option text-white" onClick={redirectToSettings}>
                Account Settings
              </div>
              <div className="option text-white" onClick={redirectToLoginPage}>
                Sign Out
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
