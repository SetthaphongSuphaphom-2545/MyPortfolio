import React from 'react';

export default function Experience() {
  // 1. เปลี่ยนเป็นข้อมูลประวัติจริงของคุณ เรียบเรียงให้เป็นภาษาสากลที่ดูเป็นมืออาชีพ
  const journeyData = [
    {
      type: "self-taught",
      title: "Self-Driven IT Learning & Services Industry",
      company: "Independent Learning / Hospitality & Services",
      date: "2024 to Present",
      details: [
        "Dedicated to self-studying modern web technologies, focusing on deep diving into React ecosystem, advanced Tailwind CSS, and frontend architectures.",
        "Gaining valuable real-world soft skills including communication, problem-solving under pressure, and customer relations through professional work in the services industry.",
        "Actively building side projects to refine coding skills and stay up-to-date with current technology trends."
      ]
    },
    {
      type: "internship",
      title: "Software Engineer Intern (React Focus)",
      company: "TCC Technology",
      date: "2023",
      details: [
        "Participated in intensive tech workshops and contributed directly to production-ready enterprise software projects.",
        "Utilized React as the core framework to build and optimize responsive, user-friendly frontend interfaces.",
        "Mastered team collaboration workflow and version control systems using Git for project integration, code merging, and conflict resolution across the development team."
      ]
    },
    {
      type: "education",
      title: "B.Sc. in Computer Science / Information Technology",
      company: "Khon Kaen University (KKU)",
      date: "2020 to 2024",
      details: [
        "Graduated with a solid foundation in computer science principles, database systems, and software engineering methodologies.",
        "Participated in academic projects that laid the groundwork for modern web development technologies."
      ]
    }
  ];

  return (
    <section id="experience" className="w-full text-white mt-12 text-left">
      
      {/* หัวข้อหมวดหมู่มินิมอล */}
      <div className="mb-10">
        <span className="text-xs font-mono tracking-widest text-slate-500 uppercase">
          04 · Experience & Education
        </span>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl">
          My journey
        </h2>
      </div>

      {/* 🗺️ โครงสร้างเส้นแกนดิ่ง Timeline ลากเชื่อมผ่านทุกกล่องอย่างสวยงาม */}
      <div className="relative border-l border-white/10 ml-4 md:ml-6 flex flex-col gap-3 pl-6 md:pl-8">
        
        {journeyData.map((item, index) => (
          <div key={index} className="relative w-full">
            
            {/* 🔵 จุดวงกลมบอกสถานะเวลานำสายตา ลอยตัวหลบอยู่ตรงขอบพอดีเป๊ะ */}
            <span className="absolute -left-[31px] md:-left-[39px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white/40 bg-[#0B1120] shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
            </span>

            {/* 🎴 การ์ดกระจกฝ้าสะท้อนแสงจัดเรียงช่องไฟนุ่มนวลสบายตา */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-white/20">
              
              {/* ชื่องาน / ชื่อวุฒิการศึกษา พร้อมชื่อบริษัทและสถาบันมข. (KKU) ของคุณ */}
              <h3 className="text-lg font-bold text-white tracking-tight md:text-xl">
                {item.title} <br className="sm:hidden" />
                <span className="text-slate-300 font-medium text-base sm:text-lg">· {item.company}</span>
              </h3>

              {/* ป้ายกำกับระบุช่วงปี (Date Tag) */}
              <div className="mt-2 inline-flex rounded-md bg-white/5 border border-white/5 px-2.5 py-0.5 text-xs text-slate-400 font-mono">
                {item.date}
              </div>

              {/* รายการอธิบาย (Bullet Points) ข้อมูลจริงของคุณ */}
              <ul className="mt-5 flex flex-col gap-3 list-disc list-inside text-sm leading-relaxed text-slate-300 md:text-base">
                {item.details.map((detail, dIndex) => (
                  <li key={dIndex} className="marker:text-slate-500 pl-1 text-left">
                    {/* จัดคำเยื้องหลบจากหัวข้อจุดจุด เพื่อความเป็นระเบียบเรียบร้อย */}
                    <span className="relative -left-2">{detail}</span>
                  </li>
                ))}
              </ul>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}
