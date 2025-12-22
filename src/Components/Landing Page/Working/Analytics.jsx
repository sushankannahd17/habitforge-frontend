import AnalyticsImg from "../../../assets/Analytics.jpg"

export default function Analytics() {
  return (
    <div className="h-200 w-full bg-[#F3F4F6] pl-70 flex">
      <div className="w-[80%] flex-row lg:flex-col pt-40">
        <h1 className="text-[#5B6CFF] inter-heading pt-30">ANALYTICS</h1>
        <h1 className="text-[#0F1724] inter-heading pt-3 text-5xl">
          Data that drives improvement
        </h1>
        <p className="w-3/4 text-2xl pt-4">
          Go beyond simple checkmarks. View your completion rates over time, identify weak spots in your week, and adjust your goals based on real data.
        </p>
      </div>
      <div className="w-3/4 mr-55 mt-30">
        <img src={AnalyticsImg} className="w-full"/>
      </div>
    </div>
  );
}
