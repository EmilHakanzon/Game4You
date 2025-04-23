import Link from "next/link";

export const LogoNav = () => {
  return (
    <div className="h-20">
      <Link href="/">
        <h1 className="text-4xl font-bold bg-gradient-to-r pt-3  from-white via-blue-500 to-purple-500 text-transparent bg-clip-text">
          Game4You
        </h1>
      </Link>
    </div>
  );
};

export default LogoNav;
