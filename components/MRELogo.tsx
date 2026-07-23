"use client";

export default function MRELogo() {
  return (
    <div className="relative inline-flex items-center">

      {/* Glow layer */}
      <span className="absolute inset-0 text-white blur-xl opacity-0 animate-mre-glow">
        MRE LABS
      </span>


      {/* Main logo */}
      <span className="relative text-xl font-bold tracking-[0.25em] text-white">
        MRE LABS
      </span>


      {/* Electrical sparks */}

      <span className="mre-spark spark-one"></span>
      <span className="mre-spark spark-two"></span>
      <span className="mre-spark spark-three"></span>

    </div>
  );
}