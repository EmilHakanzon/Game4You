import Link from "next/link";
import Image from "next/image"; 

export default function Footer() {
  return (
    <footer className="bg-[#1E293B] text-[#F1F5F9] py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Left - Logo/Text */}
        <div className="flex flex-col items-center md:items-start space-y-2 text-center md:text-left">
          <Link href="/">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-blue-500 to-purple-500 text-transparent bg-clip-text">
              Game4You
            </h1>
          </Link>
          <p className="text-[#F1F5F9] text-sm">
            © {new Date().getFullYear()} Game4You. <br /> All rights reserved.
          </p>
        </div>

        {/* Center - Links */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-6 text-sm">
          <Link href="/" className="hover:text-purple-400 transition">
            Home
          </Link>
          <Link href="/overview" className="hover:text-purple-400 transition">
            Overview
          </Link>
          <Link href="/list" className="hover:text-purple-400 transition">
            List
          </Link>
          <Link href="/ratings" className="hover:text-purple-400 transition">
            Ratings
          </Link>
        </div>

        {/* Right - Icons */}
        <div className="flex justify-center md:justify-end space-x-4">
          <Link
            href="https://github.com/EmilJohanssonz/framework-project-f24"
            target="_blank"
            className="hover:bg-[#7C3AED] p-1 rounded-full transition"
          >
            <Image
              src="/githublogo.png" 
              alt="GitHub" 
              width={40} 
              height={40} 
              className="rounded-full hover:scale-110 transition"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
