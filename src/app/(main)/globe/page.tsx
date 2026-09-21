import { GlobeSphere } from "@/components/modules/home/globe-sphere";

export const metadata = {
  title: "3D Globe Demo | Universal Language",
  description: "Interactive 3D globe model built with Three.js for Universal Language PTE Coaching.",
};

export default function GlobeDemoPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#060d1e] px-4 py-12">
      <h1 className="text-2xl sm:text-3xl font-black text-white mb-2 tracking-tight">
        Universal Language — 3D Globe
      </h1>
      <p className="text-sm text-blue-300/70 mb-8 font-medium">
        Interactive · Drag to spin · PTE Academic Coaching Services
      </p>
      <div className="w-full max-w-2xl">
        <GlobeSphere />
      </div>
    </div>
  );
}
