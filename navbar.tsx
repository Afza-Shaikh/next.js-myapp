import React from "react";
import Link from "next/link";
import { RiSofaFill } from "react-icons/ri";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      {/* Free Shipping Banner */}
      <div style={styles.shippingBanner}>
        <p>Free Shipping on all orders</p>
      </div>

      <nav style={styles.navbar}>
        <div style={styles.container}>
          {/* Logo with Icon */}
          <div style={styles.logoContainer}>
            <RiSofaFill className="text-4xl" style={styles.logoIcon} />
            <h1 style={styles.logoText}>Comfy-Set</h1>
          </div>

          {/* Add to Cart Button with Icon */}
          <button style={styles.cartButton}>
            <FaCartArrowDown style={styles.cartIcon} />
            Add to Cart
          </button>
        </div>

        {/* Navbar links */}
        <ul style={styles.navLinks}>
          <li><Link href="/" style={styles.navLink}>Home</Link></li>
          <li><Link href="/about" style={styles.navLink}>About</Link></li>
          <li><Link href="/contact-us" style={styles.navLink}>Contact Us</Link></li>
          <li><Link href="/order-now" style={styles.navLink}>Order Now</Link></li>
        </ul>
      </nav>
    </>
  );
};

const styles = {
  shippingBanner: {
    backgroundColor: "#ff6ec7", // Subtle pink background for banner
    textAlign: "center",
    padding: "10px 0",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#ffffff",
  },
  navbar: {
    backgroundColor: "#ffffff", // Clean white background for the navbar
    padding: "15px 30px", // Standard padding for the navbar
    color: "#333", // Dark text color for contrast
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Light shadow for depth
    borderRadius: "10px", // Rounded corners for the navbar
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logoIcon: {
    fontSize: "32px", // A moderate size for the logo icon
    color: "#ff6ec7", // Soft pink color for the icon
  },
  logoText: {
    fontSize: "28px", // Moderate size for the logo text
    fontWeight: "600",
    marginLeft: "12px",
    color: "#333", // Dark color for the text
    textTransform: "capitalize", // Normal text capitalization
  },
  cartButton: {
    backgroundColor: "#FF6E6E", // A subtle red for the cart button
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "30px", // Rounded corners for the button
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontWeight: "600",
  },
  cartIcon: {
    fontSize: "18px", // Smaller icon size for the cart icon
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    gap: "30px", // Standard gap between links
  },
  navLink: {
    color: "#333", // Dark color for the links
    textDecoration: "none",
    fontSize: "18px", // Standard font size for the links
    fontWeight: "500",
    position: "relative",
    paddingBottom: "5px", // Space for the underline effect
    transition: "color 0.3s ease, transform 0.3s ease",
  },
  navLinkHover: {
    color: "#FF6E6E",  // Subtle red color for the hover effect
    transform: "scale(1.05)",  // Slight zoom effect on hover
    borderBottom: "2px solid #FF6E6E",  // Underline effect on hover
  },
};

export default Navbar;
