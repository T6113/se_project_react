import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        Developed by Thomisha Myers {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
