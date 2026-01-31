import { FaHeart, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-[#F7F8FA] py-5 mt-auto">
      <div className="flex flex-col items-center justify-center text-center gap-2 text-sm text-gray-600">

        {/* App tagline */}
        <p className="font-medium text-gray-700">
          Build habits. Track progress. Stay consistent.
        </p>

        {/* Credit line */}
        <p className="flex items-center gap-2">
          Made with
          <FaHeart className="text-red-500 text-xs" />
          by
          <span className="font-semibold text-black">
            Sushan Kannah D
          </span>

          {/* Optional socials */}
          <a
            href="https://github.com/sushankannahd17"
            target="_blank"
            rel="noreferrer"
            className="ml-2 hover:text-black transition"
          >
            <FaGithub size={14} />
          </a>

          <a
            href="https://www.linkedin.com/in/sushan-kannah-d"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin size={14} />
          </a>
        </p>

        {/* copyright */}
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} HabitForge. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
