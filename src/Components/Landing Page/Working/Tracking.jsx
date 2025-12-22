import TrackingImg from "../../../assets/Tracking.jpg"

export default function Tracking() {
    return (
        <div className="w-full h-150 bg-[#F3F4F6] flex gap-6">
            <div className="w-1/2 flex-row lg:flex-col pl-60 items-center">
                <img src={TrackingImg} className="h-150"/>
            </div>
            <div className="items-start w-1/2 pl-40 pt-35">
                <h1 className="inter-heading text-[#5B6CFF]">ANALYTICS</h1>
                <h1 className="mt-8 inter-heading text-4xl mb-8">Don't break the chain</h1>
                <p className="w-3/5 inter-para text-gray-400 mb-10">Seeing your progress visually is the best motivator. our streak indicators and daily completion rings give you that extra push to check off your tasks every single day</p>
                <p className="inter-para text-gray-400 mb-10 w-3/5">Every check-in reinforces your identity as someone who shows up</p>
            </div>
        </div>
    );
}