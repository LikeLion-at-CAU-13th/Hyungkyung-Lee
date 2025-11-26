import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiVelog } from "react-icons/si";

export default function Footer() {
    return (
        <>
        <footer className="text-gray-600 body-font">
  <div className="container flex flex-col items-center px-5 py-8 mx-auto sm:flex-row">
    <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
      <span className="ml-3 text-xl text-gray-500">멋쟁이사자처럼</span>
    </a>
    <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0">© 2025 Likelions —
      <a href="https://twitter.com/knyttneve" className="ml-1 text-gray-600" rel="noopener noreferrer" target="_blank">@Jihaeee</a>
    </p>
    {/* 소셜 아이콘 */}
    <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start gap-x-5">
        <a href="#" className="transition-colors hover:text-pink-500">
            <FaInstagram size={20} />
        </a>
        <a href="#" className="transition-colors hover:text-blue-400">
            <FaLinkedinIn size={20} />
        </a>
        <a href="#" className="transition-colors hover:text-gray-900">
            <FaGithub size={22} />
        </a>
        <a href="#" className="transition-colors hover:text-green-500">
            <SiVelog size={22} />
        </a>
    </span>
  </div>
</footer>
        </>
    )
}