import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";



const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        {/* First Column: Categories */}
        <div style={styles.footerColumn}>
          <h4 style={styles.columnTitle}>Categories</h4>
          <ul style={styles.columnList}>
            <li style={styles.columnItem}>Sofa</li>
            <li style={styles.columnItem}>Armchair</li>
            <li style={styles.columnItem}>Wing Chair</li>
            <li style={styles.columnItem}>Wooden Chair</li>
          </ul>
        </div>

        {/* Second Column: Privacy & Support */}
        <div style={styles.footerColumn}>
          <h4 style={styles.columnTitle}>Privacy & Support</h4>
          <ul style={styles.columnList}>
            <li style={styles.columnItem}>Help & Support</li>
            <li style={styles.columnItem}>Terms & Conditions</li>
            <li style={styles.columnItem}>Privacy Policy</li>
          </ul>
        </div>

        {/* Third Column: Newsletter */}
        <div style={styles.footerColumn}>
          <h4 style={styles.columnTitle}>Newsletter</h4>
          <input type="email" placeholder="Enter your email" style={styles.emailInput} />
          <button style={styles.subscribeButton}>Subscribe</button>
        </div>
      </div>

      {/* Footer Bottom Section: Contact */}
      <div style={styles.footerBottom}>
        <h4 style={styles.contactTitle}>Contact Us</h4>
        <p>Phone: 0327 676 658776</p>
        <div style={styles.socialLinks}>
          <a href="https://facebook.com" style={styles.socialLink}>Facebook</a>
          <FaFacebookSquare />

          <a href="https://whatsapp.com" style={styles.socialLink}>WhatsApp</a>
          <FaWhatsapp className="text-9pxl" />

          <a href="https://youtube.com" style={styles.socialLink}>YouTube</a>
          <IoLogoYoutube  className=" text-6pxl"/>


        </div>
        <p>&copy; 2025 ComfySet | All Rights Reserved</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#5D3FD3",  // Purple background (you can change this to your website's color)
    color: "white",
    padding: "40px 20px",  // Proper padding to give space
    fontFamily: "'Poppins', sans-serif",  // Clean, modern font
    textAlign: "center",
  },
  footerContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "30px",  // Adequate gap between columns
    marginBottom: "40px",  // Space before bottom section
  },
  footerColumn: {
    flex: "1 1 30%",  // Each column takes 30% of width
    padding: "20px",
    textAlign: "left",  // Align text to the left for a professional look
  },
  columnTitle: {
    fontSize: "22px",  // Increased font size
    marginBottom: "15px",
    fontWeight: "700",  // Bold titles for visibility
    textTransform: "uppercase",  // Uppercase for headings
  },
  columnList: {
    listStyle: "none",
    padding: "0",
    margin: "0",
  },
  columnItem: {
    marginBottom: "12px",
    fontSize: "18px",  // Increased font size for readability
    transition: "color 0.3s ease",  // Hover effect on items
  },
  emailInput: {
    padding: "14px",
    width: "80%",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "none",
    fontSize: "16px",
    fontWeight: "600",
    backgroundColor: "#333",  // Dark input box
    color: "white",
  },
  subscribeButton: {
    padding: "14px 24px",
    backgroundColor: "#FF6F91",  // Pink button
    border: "none",
    borderRadius: "5px",
    color: "white",
    cursor: "pointer",
    fontSize: "18px",
    fontWeight: "700",
    transition: "background-color 0.3s ease",
  },
  footerBottom: {
    backgroundColor: "#4b2d91",  // Adjusted to a darker purple background
    padding: "20px",
    color: "#bbb",  // Lighter color for bottom text
  },
  contactTitle: {
    fontSize: "22px",  // Increased font size
    marginBottom: "10px",
    fontWeight: "700",
  },
  socialLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "15px",
  },
  socialLink: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "18px",  // Increased font size
    fontWeight: "600",
    transition: "color 0.3s ease",  // Hover effect for links
  },
};

export default Footer;






