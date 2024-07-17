import "./footer.css";

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <>
      <div className="footer">All Right Reserved {year} ® - Add To Cart</div>
    </>
  );
};

export default Footer;
