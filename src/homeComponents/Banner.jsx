import banner from "../assets/Banner.png";

function Banner() {
  return (
    <>
      <br />
      <img src={banner} alt="banner" style={{ objectFit: "cover" }} />
    </>
  );
}
export default Banner;
