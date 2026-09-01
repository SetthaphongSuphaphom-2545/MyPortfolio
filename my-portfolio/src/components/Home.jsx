import React from 'react';

export default function Home() {
  return (
    // min-h-[60vh] คือขยายกล่องให้สูงอย่างน้อย 60% ของหน้าจอ
    <section id="home" className="w-full min-h-[60vh] flex flex-col justify-center items-center border border-white/10 bg-white/[0.02] rounded-3xl p-8 backdrop-blur-md">
      <h2 className="text-3xl font-bold tracking-wider text-slate-400">HOME</h2>
      {/* 🛠️ เว้นพื้นที่ว่างตรงนี้ไว้ รอข้อมูลที่จะมาใส่ในอนาคต */}
    </section>
  );
}
