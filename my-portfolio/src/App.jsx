import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skill";
import Projects from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    // จัด Container หลักสีเข้มมืด และตัดปัญหาส่วนล้นออกข้าง
    <div className="w-full min-h-screen bg-[#0B1120] text-white flex flex-col items-center justify-start overflow-x-hidden font-sans relative">
      
      {/* 🔮 เติม Ambient Glow (แสงฟุ้งฉากหลัง) ให้เว็บดูมีมิติเหมือนเพื่อนคุณ */}
      <div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-1/3 h-80 w-80 rounded-full bg-indigo-500/10 blur-[130px] pointer-events-none z-0" />

      {/* เรียกใช้งาน Navbar ลอยด้านบน */}
      <Navbar />

      {/* 🎯 จุดสำคัญ: ขยายความกว้างสูงสุดเป็น max-w-6xl และปรับ w-full md:w-11/12 เพื่อดันให้ยืดออกข้างเพิ่มขึ้นครับ */}
      <main className="w-full md:w-11/12 max-w-6xl flex flex-col items-center gap-24 mt-32 px-4 sm:px-6 mb-40 z-10">
        
        {/* 💡 ถอดกล่อง div ครอบตัวเกู่ออก เพื่อปล่อยให้คลาสกระจกฝ้าในไฟล์ลูกทำงานและกางขนาดได้เต็มที่ร้อยเปอร์เซ็นต์ */}
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />

      </main>
    </div>
  );
}

export default App;
