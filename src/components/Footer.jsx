function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        <li>
          <a href="https://www.instagram.com/nsbecsun" className="icon brands fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/csun-nsbe" className="icon brands fa-linkedin-in">
            <span className="label">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://www.tiktok.com/@nsbecsun" className="icon brands fa-tiktok">
            <span className="label">TikTok</span>
          </a>
        </li>
        <li>
          {/* TODO: confirm the canonical contact email - Home, Vision, and
              Sponsorship each used a different address before this was unified */}
          <a href="mailto:nsbecsun@gmail.com" className="icon solid fa-envelope">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <p className="copyright">&copy; 2025 CSUN NSBE Chapter</p>
    </footer>
  );
}

export default Footer;
