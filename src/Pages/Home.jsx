import Features from "../Components/Landing Page/Features/Features";
import Hero from "../Components/Landing Page/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";
import Management from "../Components/Landing Page/Working/Management";
import Tracking from "../Components/Landing Page/Working/Tracking";
import Analytics from "../Components/Landing Page/Working/Analytics";
import Footer from "../Components/Footer/Footer";

export default function Home() {
    return (
        <div className="min-h-screen w-full">
            <Navbar />
            <Hero />
            <Features />
            <Management />
            <Tracking />
            <Analytics />   
            <Footer />
        </div>
    );
}