import React, { useState, useEffect } from 'react';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  const menuItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Specialties' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' }
  ];

  // 1. ฟังก์ชันสั่งเลื่อนหน้าจอดิ่งขึ้นไปด้านบนสุด (Top of the page)
  const scrollToTop = (e) => {
    e.preventDefault(); // ป้องกันไม่ให้ URL เติม # ต่อท้าย
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // เลื่อนหน้าจออย่างนุ่มนวลไหลลื่น
    });
  };

  useEffect(() => {
    const handleScrollProgress = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScrollProgress);

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', 
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    menuItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScrollProgress);
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-center bg-[#0B1120]/80 py-4 px-6 backdrop-blur-md border-b border-white/5">
      
      {/* เส้นวิ่ง Progress Bar */}
      <div 
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="flex w-full max-w-6xl items-center justify-between">
        
        {/* 🎯 จุดแก้ไข: เอา href="#home" ออก แล้วผูกคำสั่ง onClick={scrollToTop} แทนที่เพื่อให้ขึ้นบนสุดขอบจอทันที */}
        <button 
          onClick={scrollToTop}
          className="text-sm font-bold tracking-tight text-white transition-opacity hover:opacity-80 cursor-pointer bg-transparent border-none p-0"
        >
          Setthaphong Suphaphom
        </button>

        {/* รายการเมนูฝั่งขวา */}
        <div className="flex items-center gap-3 text-xs font-semibold tracking-wide">
          {menuItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative px-4 py-1.5 rounded-full transition-all duration-300 flex flex-col items-center justify-center group ${
                  isActive
                    ? 'text-white border border-white/10 bg-white/5 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-1 w-2.5 h-[2px] bg-white rounded-full opacity-80" />
                )}
              </a>
            );
          })}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;