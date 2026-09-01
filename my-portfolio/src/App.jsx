import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skill";
import Projects from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    // กำหนดธีมสีมืด ความกว้างเต็มจอ และจัดองค์ประกอบเนื้อหาดิ่งลงมาตรงกลาง
    <div className="w-full min-h-screen bg-[#0B1120] text-white flex flex-col items-center justify-start overflow-x-hidden font-sans">
      
      {/* เรียกใช้งาน Navbar ลอยด้านบน */}
      <Navbar />

      {/* กล่องหลักคุมเนื้อหา ยิ่งใช้ gap-32 หรือ gap-40 จะยิ่งเพิ่มพื้นที่ว่างระหว่างคอมโพเนนต์ */}
      <main className="w-full max-w-4xl flex flex-col items-center gap-40 mt-32 px-6 mb-40">
        
        {/* แต่ละ Component ใส่บล็อกครอบและดันพื้นที่ว่างบน-ล่าง (py-24) ไว้ให้ล่วงหน้า */}
        <div className="w-full py-24 border border-white/5 bg-white/[0.01] rounded-2xl p-6 backdrop-blur-sm">
          <Home />
        </div>

        <div className="w-full py-24 border border-white/5 bg-white/[0.01] rounded-2xl p-6 backdrop-blur-sm">
          <About />
        </div>

        <div className="w-full py-24 border border-white/5 bg-white/[0.01] rounded-2xl p-6 backdrop-blur-sm">
          <Skills />
        </div>

        <div className="w-full py-24 border border-white/5 bg-white/[0.01] rounded-2xl p-6 backdrop-blur-sm">
          <Projects />
        </div>

        <div className="w-full py-24 border border-white/5 bg-white/[0.01] rounded-2xl p-6 backdrop-blur-sm">
          <Experience />
        </div>

        <div className="w-full py-24 border border-white/5 bg-white/[0.01] rounded-2xl p-6 backdrop-blur-sm">
          <Contact />
        </div>

      </main>
    </div>
  );
}

export default App;
