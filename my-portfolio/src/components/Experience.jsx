import React from 'react';

function Experience() {
  return (
    // ปรับความสูงขั้นต่ำเป็นสัดส่วน (min-h-[35vh]) พร้อมใส่กรอบกระจกฝ้าและเอฟเฟกต์เบลอ
    <section 
      id="experience" 
      className="w-full min-h-[35vh] flex flex-col justify-center items-center rounded-3xl border border-white/10 bg-white/[0.02] p-8 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-white/20"
    >
      {/* หัวข้อส่วนประวัติการทำงาน */}
      <h2 className="text-3xl font-bold tracking-wider text-slate-400 uppercase">
        Experience
      </h2>
      
      {/* 🛠️ พื้นที่ว่างตรงนี้สำหรับนำเนื้อหา Timeline หรือประวัติการฝึกงาน/ทำงานมาใส่ในอนาคต */}
      <p className="mt-4 text-sm text-slate-500 italic">
        [ Space reserved for your professional timeline ]
      </p>

    </section>
  );
}

export default Experience;
