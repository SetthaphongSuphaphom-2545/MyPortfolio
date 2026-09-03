import React from 'react';
// 1. ดึงตัวโลโก้แท้จากแพ็กเกจ react-icons เข้ามาใช้งานโดยตรง (แยกตามชุดภาษา)
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3, IoLogoNodejs, IoLogoGithub } from 'react-icons/io5';
import { SiTailwindcss, SiGit, SiPostman, SiFigma } from 'react-icons/si';

export default function Skill() {
  // 2. ปรับขนาดไอคอนให้กะทัดรัด (พอดีกับกล่องขนาดเล็ก)
  const skillCategories = [
    {
      title: "LANGUAGES & FOUNDATIONS",
      skills: [
        { name: "JavaScript", icon: <IoLogoJavascript size={28} className="text-[#F7DF1E] bg-black p-0.5 rounded" /> },
        { name: "HTML5", icon: <IoLogoHtml5 size={30} className="text-[#E34F26]" /> },
        { name: "CSS", icon: <IoLogoCss3 size={30} className="text-[#1572B6]" /> }
      ]
    },
    {
      title: "BACKEND & API",
      skills: [
        { name: "Node.js", icon: <IoLogoNodejs size={30} className="text-[#339933]" /> }
      ]
    },
    {
      title: "FRONTEND & MOBILE",
      skills: [
        { name: "Tailwind", icon: <SiTailwindcss size={30} className="text-[#06B6D4]" /> }
      ]
    },
    {
      title: "DATA & TOOLS",
      skills: [
        { name: "Git", icon: <SiGit size={28} className="text-[#F05032]" /> },
        { name: "GitHub", icon: <IoLogoGithub size={30} className="text-[#181717]" /> },
        { name: "Postman", icon: <SiPostman size={28} className="text-[#FF6C37]" /> },
        { name: "Figma", icon: <SiFigma size={26} className="text-[#F24E1E]" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="w-full text-white mt-12">
      
      {/* ส่วนหัวข้อหลัก */}
      <div className="mb-8 text-left">
        <span className="text-xs font-mono tracking-widest text-slate-500 uppercase">
          02 · My Specialties
        </span>
        <h2 className="mt-2 text-xl font-extrabold tracking-tight text-white sm:text-2xl md:text-3xl">
          Technologies & Tools
        </h2>
      </div>

      {/* แผงตารางลูปการ์ดสี่เหลี่ยมสีครีมนวลตา */}
      <div className="flex flex-col gap-6 w-full">
        {skillCategories.map((category, catIndex) => (
          <div key={catIndex} className="w-full text-left">
            
            <h3 className="text-[11px] font-mono font-bold tracking-wider text-slate-500 mb-3 uppercase">
              {category.title}
            </h3>

            {/* 🛠️ ปรับเปลี่ยนจาก Grid มาใช้ Flex-wrap เพื่อไม่ให้ระบบบังคับขยายกล่องตามขนาดช่องตารางบนหน้าจอใหญ่ */}
            <div className="flex flex-wrap gap-3 w-full">
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={skillIndex} 
                  
                  className="flex flex-col items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-xl border border-white/5 bg-[#FDFBF7]/95 p-2 shadow-md transition-all duration-300 hover:scale-105 hover:bg-white"
                >
                  {/* กล่องคลุมตัวไอคอน */}
                  <div className="h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center">
                    {skill.icon}
                  </div>

                  {/* ตัวหนังสือชื่อสกิลด้านล่าง */}
                  <span className="mt-1.5 text-[10px] sm:text-xs font-bold text-slate-800 tracking-wide text-center truncate w-full px-0.5">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
