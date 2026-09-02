import React from 'react';
// อย่าลืมตรวจสอบว่าโปรเจกต์ติดตั้ง react-icons ไว้แล้ว (npm install react-icons)
import { FiMail, FiPhone, FiArrowRight } from 'react-icons/fi';

export default function Home() {
  return (
    // เปลี่ยนจาก section กล่องว่างเดิม มาเป็นการ์ดสไตล์กระจกฝ้าสะท้อนแสง มีความสูง min-h-[50vh] ที่กำลังพอดีสวย
    <section 
      id="home" 
      className="w-full min-h-[50vh] flex flex-col justify-center rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 md:p-12 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-white/20"
    >
      
      {/* จัด Layout ข้างใน: บนมือถือเรียงแนวดิ่ง (flex-col) / บนคอมพิวเตอร์ขยายออกข้าง (md:flex-row) */}
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12 w-full">
        
        {/* 📸 ฝั่งซ้าย: กรอบรูปภาพ Profile โทนขาวดำมินิมอลตามดีไซน์ต้นฉบับ */}
        <div className="flex-shrink-0 w-full sm:w-auto flex justify-center md:justify-start">
          <div className="h-52 w-48 overflow-hidden rounded-2xl border-2 border-white/10 bg-slate-900/50 shadow-inner">
            <img 
              src="https://scontent.fbkk33-1.fna.fbcdn.net/v/t39.30808-6/370367725_2294379394284037_8118846247542989678_n.jpg?stp=dst-jpg_tt6&cstp=mx960x958&ctp=s960x958&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF8vcXzXB1Nty1TYPhO329TrDGHwI4PBqisMYfAjg8GqBA1GDxApZ2EGLMtMmUwJ_r6THOmRZzcfsjVT_Y-D2cI&_nc_ohc=OP6WtOKKKaoQ7kNvwHdF5yW&_nc_oc=AdrSy2vyApSoshfXm6pu3IT-f2MoukayNhF2hmSg7ikIo-OTbd2TsHxC1hTviuYFPFg&_nc_zt=23&_nc_ht=scontent.fbkk33-1.fna&_nc_gid=c1CnXfCuwx4de8Hyqst6CA&_nc_ss=7b2a8&oh=00_AQJSwwz7ZwOtYmSS1IkvSL2SoX8mQ_oyXJ9KjZzbfr2gUg&oe=6A9DB87D" // 👈 สามารถนำ URL รูปภาพใบหน้าจริงของคุณมาใส่แทนตรงนี้ได้เลยครับ
              alt="Profile" 
              className="h-full w-full object-cover grayscale brightness-95" 
            />
          </div>
        </div>

        {/* 📝 ฝั่งขวา: กล่องข้อมูลตัวตนและกลุ่มปุ่มกดติดต่อ */}
        <div className="flex-1 w-full min-w-0 text-center md:text-left">
          
          {/* ป้ายสถานะความพร้อมทำงาน (Available Status Tag) พร้อมจุดเขียวกะพริบ */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> 
            Available for work
          </div>

          {/* ชื่อจริงของคุณ ขนาดตัวอักษรใหญ่เด่นชัด */}
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Setthaphong Suphaphom
          </h1>

          {/* แถบป้ายระบุตำแหน่งและป้ายสถานที่ทำงาน (Badges) */}
          <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs font-semibold md:justify-start">
            <span className="rounded-md border border-white/5 bg-white/5 px-2.5 py-1 text-slate-200">Frontend Developer</span>
            <span className="rounded-md border border-white/5 bg-white/5 px-2.5 py-1 text-slate-200">React Specialist</span>
            <span className="rounded-md border border-white/5 bg-white/5 px-2.5 py-1 text-slate-400">Udonthani, TH</span>
          </div>

          {/* ข้อความสรุปแนะนำตัวสั้น ๆ แฝงความมั่นใจ */}
          <p className="mt-6 text-sm leading-relaxed text-slate-300 md:text-base">
            I'm a Frontend Developer focusing on building beautiful and high-performance web applications using React and Tailwind CSS. I love transforming complex designs into pixel-perfect, clean code. Every project below is a functional demo you can try.
          </p>

          {/* 🎯 กลุ่มปุ่มกดจัดการช่องทางติดต่อและการเข้าถึงข้อมูลแบบจัดวางอย่างมีระเบียบ */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            
            {/* ปุ่มหลัก: ดึงสายตาด้วยพื้นหลังสีขาว ลิงก์ดิ่งไปยังส่วนผลงาน */}
            <a href="#projects" className="flex items-center gap-1 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-[#0B1120] transition-transform active:scale-95 hover:bg-slate-200">
              See live demos <FiArrowRight className="mt-0.5" />
            </a>
            
            {/* ปุ่มรอง: ขอบบางสีจาง ลิงก์ดิ่งไปยังตารางสกิลความเข้าใจ */}
            <a href="#skills" className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">
              My specialties
            </a>

            {/* ปุ่มไอคอนช่องทางจดหมายอีเมล */}
            <a href="mailto:your-email@example.com" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white">
              <FiMail size={18} />
            </a>
            
            {/* ปุ่มไอคอนเบอร์ติดต่อโทรศัพท์ */}
            <a href="tel:+66" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white">
              <FiPhone size={18} />
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
