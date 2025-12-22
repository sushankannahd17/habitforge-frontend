import FeatureCard from "../Features/FeatureCards"

export default function Features() {
  return (
    <>
    <div className="w-full h-300 bg-[#F7F8FA] pt-10" id="features">
      <h1 className="inter-heading text-5xl pt-40 text-center">
        Everything you need to stay consistent
      </h1>
      <p className="inter-para text-7xl mt-5 text-[#878E99] text-center">
        We provide the tools to help you manage, track, and analyze your habits
        so you
      </p>
      <p className="inter-para text-7xl mt-5 text-[#878E99] text-center">
        can focus on doing the work
      </p>
      <FeatureCard />
    </div>
    </>
  );
}
