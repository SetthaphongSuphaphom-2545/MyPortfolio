import React from 'react';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Contact() {
  return (
    <div className="w-full flex flex-col items-center">
      
      {/* 1. การ์ดกล่องข้อความ CONTACT กระจกฝ้า */}
      <section 
        id="contact" 
        className="w-full rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-white/20 flex flex-col items-center justify-center text-center mt-12 mb-16"
      >
        <h2 className="text-2xl font-black tracking-wider text-white uppercase sm:text-3xl">
          CONTACT
        </h2>

        <p className="mt-4 max-w-xl text-xs sm:text-sm leading-relaxed text-slate-400">
          หากคุณสนใจร่วมงานหรือต้องการสอบถามข้อมูลเพิ่มเติม สามารถติดต่อผมผ่านช่องทางเหล่านี้ได้เลยครับ!
        </p>

        {/* 🎯 กลุ่มปุ่มกด: ใช้ Inline Style (style={{ color: '#ffffff' }}) บังคับไอคอนให้เป็นสีขาวสว่างแน่นอนร้อยเปอร์เซ็นต์ */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          
          {/* ปุ่ม Email Me */}
          <a 
            href="mailto:your-email@example.com" // 👈 เปลี่ยนเป็นอีเมลจริงของคุณได้เลยครับ
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/20 shadow-md"
          >
            <FiMail size={16} style={{ color: '#ffffff' }} />
            <span className="text-white">Email Me</span>
          </a>

          {/* ปุ่มไอคอน GitHub */}
          <a 
            href="https://github.com" // 👈 ใส่ลิงก์ GitHub ของคุณได้เลยครับ
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:bg-white/10 hover:border-white/20 shadow-md"
          >
            <FiGithub size={18} style={{ color: '#ffffff' }} />
          </a>

          {/* ปุ่มไอคอน LinkedIn */}
          <a 
            href="https://linkedin.com" // 👈 ใส่ลิงก์ LinkedIn ของคุณ (ถ้ามี)
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:bg-white/10 hover:border-white/20 shadow-md"
          >
            <FiLinkedin size={18} style={{ color: '#ffffff' }} />
          </a>

        </div>
      </section>

      {/* 🌌 2. แถบ FOOTER ด้านล่างสุด */}
      <footer className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 pt-8 pb-6 text-slate-500 font-sans">
        
        {/* ฝั่งซ้าย: ชื่อจริงของคุณ */}
        <span className="text-sm font-bold text-slate-300">
          Setthaphong Suphaphom
        </span>

        {/* ตรงกลาง: ข้อความลิขสิทธิ์ */}
        <span className="text-xs font-medium tracking-wide">
          © {new Date().getFullYear()} Setthaphong Suphaphom. All rights reserved.
        </span>

        {/* ฝั่งขวา: ลิงก์เมนูดิ่งกลับขึ้นข้างบน */}
        <div className="flex items-center gap-6 text-xs font-semibold">
          <a href="#about" className="hover:text-slate-300 transition-colors">About</a>
          <a href="#skills" className="hover:text-slate-300 transition-colors">Specialties</a>
          <a href="#projects" className="hover:text-slate-300 transition-colors">Projects</a>
        </div>

      </footer>

      {/* 🎯 3. เส้นขีดและพื้นที่ว่างปิดท้ายใต้หน้าจอคอมตามรอยขีดสีแดง (Bottom Accent Line) */}
      <div className="w-full max-w-6xl border-b border-white/[0.03] mb-12 pointer-events-none" />

    </div>
  );
}
