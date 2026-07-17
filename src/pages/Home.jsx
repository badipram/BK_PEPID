import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Home.css";
import counceling from "../assets/Marriage counseling-bro.svg"
import upgrade from "../assets/Upgrade-cuate.svg";

function Home() {
  return (
    <>
      <Navbar />
      <section className="home">
        <div className="row">
          <img src={counceling} alt="" />
          <div className="card">
            <p className="description">
              PEPID merupakan aplikasi berbasis web yang membantu guru
              Bimbingan dan Konseling memantau kondisi emosional serta
              tingkat kepuasan siswa terhadap lingkungan sekolah
              melalui pengisian kuesioner secara berkala.
            </p>
          </div>
        </div>
        <div className="row reverse">
          <div className="card">
            <p className="description">
              Data hasil pengisian kuesioner diolah menjadi informasi
              yang membantu guru BK dan pihak sekolah melakukan
              evaluasi serta menyusun strategi peningkatan mutu
              layanan pendidikan sehingga tercipta lingkungan sekolah
              yang lebih kondusif bagi proses belajar mengajar.
            </p>
          </div>
          <img src={upgrade} alt="" />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;