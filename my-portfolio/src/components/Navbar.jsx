import React from 'react';

function Navbar() {
  return (
    // ยึดติดขอบบน โปร่งแสงกระจกฝ้า แผ่เต็มจอ และให้ตัวหนังสือทั้งหมดเป็นสีขาวนวล
    <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-center bg-[#0B1120]/80 py-5 px-6 backdrop-blur-md border-b border-white/5">
      
      {/* จำกัดความกว้างเนื้อหาให้พอดีกับการ์ดหลักด้านล่าง (max-w-4xl) */}
      <div className="flex w-full max-w-4xl items-center justify-between">
        
        {/* ฝั่งซ้าย: ชื่อของคุณ ตัวหนาชัดเจน */}
        <a href="#home" className="text-base font-bold tracking-tight text-white transition-opacity hover:opacity-80">
          Setthaphong Suphaphom
        </a>

        {/* ฝั่งขวา: ปุ่มเมนูต่างๆ (ปรับตัวหนังสือให้พอดี และใส่ลูกเล่นปุ่ม About แบบในภาพ) */}
        <div className="flex items-center gap-6 text-sm font-medium text-slate-300">
          
          {/* ปุ่ม About แบบ Active: มีกรอบมน และเส้นใต้ข้อความ */}
          <a 
            href="#about" 
            className="relative rounded-full border border-white/40 bg-white/5 px-4 py-1.5 text-white shadow-sm flex flex-col items-center group"
          >
            <span>About</span>
            <span className="absolute bottom-1 w-3 h-[2px] bg-white rounded-full"></span> {/* เส้นใต้บางๆ ในปุ่ม */}
          </a>

          {/* เมนูข้อความอื่นๆ จะเป็นสีเทานวลและเปลี่ยนเป็นสีขาวเมื่อเมาส์ชี้ (Hover) */}
          <a href="#skills" className="hover:text-white transition-colors">Specialties</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
