import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <header>
        <div>
          <div>
            <Link href="/">
              <img src="https://links.papareact.com/yvf" alt="medium_logo" />
            </Link>
          </div>

          <div>
            <h3>About</h3>
            <h3>Contact</h3>
            <h3>Follow</h3>
          </div>
        </div>

        <div>
          <h3>Sign In</h3>
          <h3>Get Started</h3>
        </div>
      </header>
    </>
  );
};

export default Header;
