import { useState } from "react";

const FlipCard = ({ front, back }: { front: string; back: string }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group w-full h-[500px] perspective-1000 cursor-pointer mb-8"
      onClick={() => setFlipped(!flipped)}
    >
      {/* The Card Container - Handles the rotation */}
      <div
        className={`relative border border-slate-300 w-full h-full duration-700 transition-all shadow-xl rounded-3xl ${
          flipped
            ? "rotate-y-180"
            : "hover:-translate-y-2 hover:shadow-2xl hover:shadow-rose-200/40"
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT FACE */}
        <div
          className="absolute inset-0 bg-[#fcfbf9] rounded-3xl p-10 flex flex-col border border-slate-100"
          style={{
            backfaceVisibility: "hidden",
            backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        >
          {/* Decorative Header */}
          <div className="flex justify-between items-start pb-6 border-b border-slate-200">
            <i className="bi bi-journal-text text-3xl text-rose-500"></i>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest border border-slate-200 px-3 py-1 rounded-full">
              Question
            </span>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex items-center justify-center py-6 overflow-y-auto custom-scrollbar">
            <p className="text-3xl md:text-4xl font-sans font-medium text-slate-800 text-center leading-relaxed whitespace-pre-wrap">
              {front}
            </p>
          </div>

          {/* Footer Hint */}
          <div className="pt-6 flex justify-center items-center gap-2 text-slate-400 text-sm font-medium group-hover:text-rose-600 transition-colors">
            <span className="uppercase tracking-wide">Tap to flip</span>
            <i className="bi bi-arrow-repeat animate-spin-slow"></i>
          </div>
        </div>

        {/* BACK FACE */}
        <div
          className="absolute inset-0 rounded-3xl p-10 flex flex-col text-white rotate-y-180 shadow-inner border border-rose-800"
          style={{
            backfaceVisibility: "hidden",
            background: "linear-gradient(135deg, #881337 0%, #4c0519 100%)",
          }}
        >
          {/* Decorative Header */}
          <div className="flex justify-between items-start pb-6 border-b border-white/10">
            <i className="bi bi-check2-circle text-3xl text-rose-300"></i>
            <span className="text-xs font-bold text-rose-200 uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
              Answer
            </span>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex items-center justify-center py-6 overflow-y-auto custom-scrollbar relative z-10">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-sans font-light text-white/95 leading-relaxed whitespace-pre-wrap drop-shadow-md">
                {back}
              </p>
            </div>
          </div>

          {/* Decorative background elements */}
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute top-20 right-10 w-16 h-16 border border-white/10 rounded-full pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
