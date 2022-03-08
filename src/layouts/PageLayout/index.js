//NOT EDITABLE!!!
import Topography from "../../components/Topography";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";

// EDITABLE
import background from "../../assets/img/background.png"; //Background
import logo from "../../assets/img/logo.png"; //Logo

function pageLayout(props) {
  //EDITABLE
  const deskripsi = "Selamat datang kembali di";
  const title1 = "Madrasah DIY";
  const title2 = "Blended Learning";
  const slogan =
    // "Dan ketahuilah, tidak ada jalan yang lebih dekat dari kejujuran, tidak ada dalil yang lebih berhasil dari ilmu, dan tidak ada bekal yang lebih sampai dari takwa."
    "Orang berilmu ibarat gula yang mengundang banyak semut. Dia menjadi cahaya bagi diri dan sekelilingnya";
  const copyright = "Madrasah DIY Blended Learning - Didukung oleh Geschool";

  return (
    <div>
      <Topography />
      <Hero
        logo={logo}
        background={background}
        deskripsi={deskripsi}
        title1={title1}
        title2={title2}
        slogan={slogan}
        appName={props.appName}
      >
        {props.children}
      </Hero>
      <Footer copyright={copyright} />
    </div>
  );
}

export default pageLayout;
