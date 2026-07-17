import "../styles/About.css";
import education from "../assets/Education-bro.svg"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
    <Navbar />
      <section className="about">
        <div className="about-left">
          <div className="about-card">
            <p className="description">
              <strong>PEPID (Pemantauan Emosi dan Kepuasan Peserta Didik)</strong>
              adalah aplikasi berbasis web yang membantu guru Bimbingan dan
              Konseling (BK) memantau kondisi emosional serta tingkat kepuasan
              siswa terhadap lingkungan sekolah melalui kuesioner berkala.
              Hasil survei diolah menjadi informasi yang mendukung evaluasi dan
              peningkatan kualitas pelayanan, fasilitas, serta lingkungan
              belajar.
            </p>
          </div>
        </div>
        <div className="about-right">
          <img src={education} alt="Education" />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;