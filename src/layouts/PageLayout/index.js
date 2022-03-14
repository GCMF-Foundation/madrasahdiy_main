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
  const slogan = "Informasi Penerimaan Peserta Didik Baru (PPDB) Madrasah DIY ";
  const copyright = "Madrasah DIY Blended Learning - Didukung oleh ";

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
