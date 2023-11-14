import React, { useState, useRef, useEffect  } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Avatar from "@/app/Assets/Avatar.png";
import "./header.css";
import { NavDropdown } from "react-bootstrap";

export default function Header() {
    const router = useRouter();
const [isDropdownOpen, setIsDropdownOpen] = useState(false);
const dropdownRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: any) => {
        if(!isDropdownOpen && !dropdownRef.current?.contains(event.target as Node)){
            console.log("clicked active");
            setIsDropdownOpen(false);
        }
  };
    window.addEventListener("click",handleClickOutside)
    const redirectToSettings = () => {
        console.log("redirected to Settings Page");
    };
  const toggleDropdown = (state: boolean) => {
    console.log("toggled");
    setIsDropdownOpen(!state);
  };
  const redirectToLoginPage = () => {
    router.push("/auth/signin");
  };

    return (
       <header className="header" >
        <div className="navbar-container-flex">
          <div className="navigation" >
                <div className= "header-heading x-large"> <h1>Crypto Co Counsel - Compass</h1> </div>
                    <div className="signout-label" >
                        <div className="mb-6" ref={dropdownRef}>
                            <Image
                                src={Avatar}
                                alt="User Avatar"
                                className="image-positioning"
                                onClick={ (e) => toggleDropdown(isDropdownOpen)}
                            />
                        </div>
                    </div>
            {isDropdownOpen && (
        <div className="dropdown">
          <div className="option text-white"  onClick={() => redirectToSettings()} >
          Account Settings
          </div>
          <div className="option text-white" onClick={redirectToLoginPage} >
          Sign Out
          </div>
        </div>
       )} 
          </div>
        </div>
      </header>
    );
  }