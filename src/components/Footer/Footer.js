import FooterPicture from "../../assets/footer.png";

function Footer() {
  return (
    <div className="flex justify-center align-center">
      <img
        src={FooterPicture}
        alt="I don't know what is it"
        className="w-[195px] h-[48px] my-[48px]"
      />
    </div>
  );
}

export default Footer;
