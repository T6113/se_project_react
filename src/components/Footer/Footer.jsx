import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        © {new Date().getFullYear()}Developed by Thomisha Myers
      </p>
    </footer>
  );
}

export default Footer;
