import Link from "next/link";
import { FaTwitter, FaGithub, FaLaptop } from "react-icons/fa";

export default function NavBar() {
  return (
    <>
      <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
        <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
          <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
            <Link
              href="/"
              className="text-white/70 no-underline hover:text-white"
            >
              SinhuDev
            </Link>
          </h1>
          <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
            <Link href="https://twitter.com/sinhudev" className="text-white/70 hover:text-white" target='_blank'>
              <FaTwitter />
            </Link>
            <Link href="https://github.com/horuscamacho" className="text-white/70 hover:text-white" target='_blank'>
              <FaGithub />
            </Link>
            <Link
              href="https://sinhu.dev"
              className="text-white/70 hover:text-white"
            >
              <FaLaptop />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
