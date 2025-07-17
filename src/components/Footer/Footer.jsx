import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <span className="footer__developer">Developed by Thomisha Myers</span>
        <span className="footer__year">{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}

export default Footer;
