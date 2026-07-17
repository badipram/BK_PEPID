import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import questions from "../data/questions";
import "../styles/Survei.css";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const options = [
  { label: "Sangat Setuju", value: 5 },
  { label: "Setuju", value: 4 },
  { label: "Netral", value: 3 },
  { label: "Tidak Setuju", value: 2 },
  { label: "Sangat Tidak Setuju", value: 1 },
];

function Survei() {
  const [step, setStep] = useState(1);
  const [student, setStudent] = useState({
    name: "",
    kelas: "",
  });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleStart = () => {
    if (!student.name || !student.kelas) {
      alert("Nama dan kelas wajib diisi");
      return;
    }
    setStep(2);
  };

  const handleAnswer = (value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = value;
    setAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (answers[currentQuestion] === undefined) {
      alert("Pilih jawaban terlebih dahulu");
      return;
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setStep(3);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const downloadPDF = () => {
  const doc = new jsPDF();

  // Judul
  doc.setFont("helvetica", "bold");
  doc.setFontSize(15);
  doc.text("PEPID - Pantau Emosi Peserta Didik", 105, 18, {
    align: "center",
  });

  doc.setFontSize(11);

  doc.text(
    "Fakultas Tarbiyah dan Keguruan - Program Studi Bimbingan dan Konseling",
    105,
    25,
    { align: "center" }
  );

  doc.text("Institut Daarul Qur'an", 105, 31, {
    align: "center",
  });

  doc.setFontSize(9);

  doc.text(
    "Jl. Cipondoh Makmur Raya RT003/RW009, Cipondoh Makmur",
    105,
    37,
    { align: "center" }
  );

  doc.text(
    "Kec. Cipondoh, Kota Tangerang, Banten 15148",
    105,
    42,
    { align: "center" }
  );

  doc.line(10, 48, 200, 48);

  // Judul hasil
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("HASIL SURVEI", 105, 60, { align: "center" });

  doc.setFontSize(11);

  doc.text(`Nama : ${student.name}`, 15, 72);
  doc.text(`Kelas : ${student.kelas}`, 15, 80);
  doc.text(`Skor Rata-rata : ${average.toFixed(2)}`, 15, 88);
  doc.text(`Hasil : ${result}`, 15, 96);

  autoTable(doc, {
    startY: 105,

    head: [["No", "Pertanyaan", "Jawaban"]],

    body: questions.map((q, index) => [
      index + 1,
      q.text,
      options.find((o) => o.value === answers[index])?.label,
    ]),

    headStyles: {
      fillColor: [52, 122, 183],
    },

    styles: {
      fontSize: 9,
      cellPadding: 2,
    },

    alternateRowStyles: {
      fillColor: [245, 245, 245],
    },
  });

  doc.save(`Hasil-Survei-${student.name}.pdf`);
};

  const total = answers.reduce((a, b) => a + b, 0);
  const average = total / questions.length;

  // eslint-disable-next-line no-useless-assignment
  let result = "";
  // eslint-disable-next-line no-useless-assignment
  let emoji = "";

  if (average >= 4.5) {
    result = "SANGAT PUAS";
    emoji = "😊";
  } else if (average >= 3.5) {
    result = "PUAS";
    emoji = "🙂";
  } else if (average >= 2.5) {
    result = "NETRAL";
    emoji = "😐";
  } else if (average >= 1.5) {
    result = "TIDAK PUAS";
    emoji = "🙁";
  } else {
    result = "SANGAT TIDAK PUAS";
    emoji = "😣";
  }

  return (
    <>
      <Navbar />

      <section className="survei">
        {step === 1 && (
          <div className="identity-card">
            <div className="form-group">
              <label>Nama Lengkap</label>
              <input
                type="text"
                value={student.name}
                onChange={(e) =>
                  setStudent({ ...student, name: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label>Kelas</label>
              <input
                type="text"
                value={student.kelas}
                onChange={(e) =>
                  setStudent({ ...student, kelas: e.target.value })
                }
              />
            </div>
            <div className="alert">
              <label className="alert-label">
                <ul>
                  <li>Bacalah setiap pernyataan dengan teliti.</li>
                  <li> Pilih jawaban yang paling sesuai dengan kondisi Anda.</li>
                  <li> Tidak ada jawaban benar atau salah.</li>
                  <li> Jawaban bersifat rahasia.</li>
                  <li> Isi dengan jujur.</li>
                </ul>
              </label>

            </div>

            <button className="start-btn" onClick={handleStart}>
              Mulai Kuisioner
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="question-container">
            <div className="survei-info">
              <p><strong>Nama :</strong> <strong className="isi">{student.name}</strong></p>
              <p><strong>Kelas :</strong> <strong className="isi">{student.kelas}</strong></p>
              <p>
                <strong>Pertanyaan:</strong> <strong>{currentQuestion + 1}</strong>
                /<strong>{questions.length}</strong>
              </p>
            </div>

            <div className="question-card">
              <h3>
                {currentQuestion + 1}.{" "}
                {questions[currentQuestion].text}
              </h3>

              <div className="options">
                {options.map((option) => (
                  <label key={option.value} className="option-item">
                    <input
                      type="radio"
                      name={`question-${currentQuestion}`}
                      checked={answers[currentQuestion] === option.value}
                      onChange={() => handleAnswer(option.value)}
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            <div className="navigation-buttons">
              <button
                onClick={handlePrev}
                disabled={currentQuestion === 0}
              >
                Sebelumnya
              </button>

              <button onClick={handleNext}>
                {currentQuestion === questions.length - 1
                  ? "Submit"
                  : "Selanjutnya"}
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="result-card">
            <div className="emoji">{emoji}</div>
            <h2>{result}</h2>
            <p>
              Terima kasih telah mengisi kuisioner. <br /> Jawaban Anda
              akan digunakan sebagai bahan evaluasi sekolah.
            </p>
          <div className="result-buttons">
            <button
              className="download-btn"
              onClick={downloadPDF}
            >
              📄 Download PDF
            </button>

            <button
              className="back-btn"
              onClick={() => (window.location.href = "/")}
            >
              Kembali ke Beranda
            </button>
          </div>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}

export default Survei;