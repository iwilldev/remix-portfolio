import { Link } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";

export function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);
  return (
    <>
      <nav ref={wrapperRef} className="bg-will-900 h-16 w-full fixed text-will-50 flex items-center px-4 lg:px-8 justify-between">
        <Link to="/" className="hover:text-will-500 transition-colors">
          owilliamgoncalves.dev
        </Link>
        <ul className={`flex flex-col lg:flex-row -z-10 gap-4 fixed lg:relative ${open ? 'mt-60' : '-mt-96'} lg:mt-0 -mx-4 lg:mx-0 w-full lg:w-auto p-4 lg:p-0 text-right bg-will-900 lg:bg-transparent transition-all duration-300 ease-in-out`}>
          <li>
            <Link to="/sobre" className="hover:text-will-500 transition-colors">
              sobre
            </Link>
          </li>
          <li>
            <Link to="/curriculo" className="hover:text-will-500 transition-colors">
              currículo
            </Link>
          </li>
          <li>
            <Link to="/skills" className="hover:text-will-500 transition-colors">
              skills
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="hover:text-will-500 transition-colors">
              portfólio
            </Link>
          </li>
          <li>
            <Link to="/contato" className="hover:text-will-500 transition-colors">
              contato
            </Link>
          </li>
        </ul>
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
      <main className="relative min-h-screen flex justify-center -z-10">
        {children}
      </main>
    </>
  )
}