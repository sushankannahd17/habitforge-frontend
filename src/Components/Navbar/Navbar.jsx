import logo from "../../../public/logo.png";
import "../../Fonts.css";

export default function Navbar() {
  return (
    <nav className="h-20 w-full bg-white py-2.5">
  <div className="flex flex-wrap justify-between px-10 mx-auto max-w-screen-2xl">
        <a href="#" className="flex items-center">
          <img src={logo} className="h-16 block" />
          <p className="poppins-semibold text-[#003B77] text-3xl">Habit</p>
          <p className="poppins-bold text-[#5AA50B] text-3xl">Forge</p>
        </a>
        <div className="flex items-center lg:order-2">
          <div className="hidden mt-2 mr-4 sm:inline-block">
            <span></span>
          </div>
          <a
            href="/login"
            className="text-black mr-4 h-10 w-[50%] px-6 py-2 bg-green-300 hover:bg-white border-white rounded-2xl"
          >
            Login
          </a>
          <a
            href="/register"
            className="text-black h-10 w-[65%] px-6 py-2 hover:bg-green-300 border-white rounded-2xl mr-10"
          >
            Register
          </a>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="true"
          >
            <span className="sr-only">Open Main Menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between bg-white w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <a
                href="#features"
                className="block py-2 pl-3 text-black hover:text-xl"
                aria-current="page"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#working"
                className="block py-2 pl-3 text-black hover:text-xl"
              >
                How it works
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-black hover:text-xl"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
