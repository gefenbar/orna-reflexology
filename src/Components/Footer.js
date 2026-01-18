export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a
            href="https://www.facebook.com/profile.php?id=100010434510829&mibextid=ZbWKwL"
            rel="noreferrer"
            className="social-link"
            target="_blank"
          >
            <img src="facebook.webp" alt="Facebook" />
          </a>
          <a
            href="https://wa.me/+972549794777"
            rel="noreferrer"
            className="social-link"
            target="_blank"
          >
            <img src="whatsapp.webp" alt="WhatsApp" />
          </a>
          <a
            href="https://www.instagram.com/nissaniklein"
            rel="noreferrer"
            className="social-link"
            target="_blank"
          >
            <img src="instagram.webp" alt="Instagram" />
          </a>
        </div>
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <a href="/articles" style={{ color: "inherit", textDecoration: "underline" }}>לכל המאמרים</a>
        </div>
        <div className="copyright">
          <div className="centered-copyright">
            &copy; {new Date().getFullYear()} ארנה קליין
          </div>

        </div>
      </div>
    </footer>
  );
}
