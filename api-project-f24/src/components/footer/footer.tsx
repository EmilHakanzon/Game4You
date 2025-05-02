import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1E293B] text-[#F1F5F9] py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Left - Logo/Text */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <h1 className="text-xl font-bold bg-gradient-to-r from-white via-blue-500 to-purple-500 text-transparent bg-clip-text">
              Game4You
            </h1>
          </Link>
          <p className="text-[#F1F5F9] text-sm mt-4">
            © {new Date().getFullYear()} Game4You. <br></br>All rights
            reserved.
          </p>
        </div>

        {/* Center - Links */}
        <div className="flex space-x-6 text-sm pr-25">
          <a href="/" className="hover:text-purple-400 transition">
            Home
          </a>
          <a href="/overview" className="hover:text-purple-400 transition">
            Overview
          </a>
          <a href="/list" className="hover:text-purple-400 transition">
            List
          </a>
          <a href="/ratings" className="hover:text-purple-400 transition">
            Ratings
          </a>
        </div>

        {/* Right - Icons */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/EmilJohanssonz/framework-project-f24"
            target="_blank"
          >
            <img
              src="/github.png"
              alt="GitHub"
              className="w-10 h-10 rounded-full"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
