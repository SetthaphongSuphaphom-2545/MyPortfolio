import React from 'react';

export default function About() {
  return (
    // กำหนด w-full เพื่อให้กล่องขยายกว้างแผ่ออกข้างได้เต็มพิกัดตามหน้าหลัก บังคับ
    <section id="about" className="w-full text-white">
      
      {/* 🏷️ หัวข้อสไตล์มินิมอล (มีเลขลำดับกำกับด้านบนแบบเพื่อนคุณ) */}
      <div className="mb-8 text-left">
        <span className="text-xs font-mono tracking-widest text-slate-500 uppercase">
          01 · About Me
        </span>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl">
          From analysis to building
        </h2>
      </div>

      {/* 📦 โครงสร้างการ์ดกระจกฝ้าแบบแบ่งครึ่ง: บนมือถือซ้อนแนวดิ่ง (grid-cols-1) / จอคอมกางออกข้าง (md:grid-cols-2) */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 w-full">
        
        {/* 📝 กล่องฝั่งซ้าย: บรรยายประวัติ ความสนใจ และสไตล์การโค้ดของคุณ */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xl flex flex-col justify-center text-left">
          <p className="text-sm leading-relaxed text-slate-300 md:text-base">
            I am deeply passionate about expanding my knowledge in modern web technologies and practicing software engineering. My current focus is mastering <strong className="text-white font-semibold">Frontend Development</strong>, building clean interfaces, and solving logical layout problems.
          </p>
          <p className="mt-6 text-sm leading-relaxed text-slate-300 md:text-base">
            Every project in this portfolio represents a step forward in design and technical depth. You can explore interactive live versions right in your browser, and instantly audit the repository source code backing them.
          </p>
        </div>

        {/* 📊 กล่องฝั่งขวา: สรุปสถิติตัวเลข (Stats) คั่นด้วยเส้นขอบบางใส สะอาดตา */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xl flex flex-col justify-between gap-6">
          
          {/* แถวที่ 1: สถานะหรือเป้าหมายหลัก */}
          <div className="pb-6 border-b border-white/10 text-left">
            <div className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              Focusing
            </div>
            <div className="mt-1 text-xs text-slate-400 font-medium">
              Actively developing responsive web systems with React & Tailwind
            </div>
          </div>

          {/* แถวที่ 2: จำนวนชิ้นงานโปรเจกต์เดโม */}
          <div className="pb-6 border-b border-white/10 text-left">
            <div className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              Interactive
            </div>
            <div className="mt-1 text-xs text-slate-400 font-medium">
              Functional components designed for premium user experiences
            </div>
          </div>

          {/* แถวที่ 3: ข้อมูลสถาบันหรือการศึกษาของคุณ (ปรับเปลี่ยนได้ตามใจชอบเลยครับ) */}
          <div className="text-left">
            <div className="text-2xl font-extrabold text-white tracking-tight sm:text-3xl">
              IT Student
            </div>
            <div className="mt-1 text-xs text-slate-400 font-medium leading-relaxed">
              Information Technology / Computer Science Education
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
