// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a
        href="https://www.linkedin.com/in/aman-das-4ab630201/"
        target="_blank"
        title="Aman Das's Linkedin Profile"
      >
        Aman Das
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year}
      <a
        href="https://github.com/Amandas1081"
        target="_blank"
        title="Food Fire Github Repository"
      >
        <strong>
          Food<span>Fire</span>
        </strong>
      </a>
    </div>
  );
};

export default Footer;
