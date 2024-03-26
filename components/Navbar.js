import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

export default function Navbar() {
  return (
    <div className="w-full text-black">
      <nav className="rounded-full bg-white flex justify-between py-3 px-5 my-2 shadow-lg">
        <div className="flex items-center">
          <Link className="text-2xl font-bold" href={"/"}>QuickMark</Link>
        </div>

        <div className="flex items-center font-semibold">
          <Link href="/markdown" id="inside" className="text-nowrap flex items-center justify-center gap-1 hover:underline">
            Markdown<FiExternalLink/>
          </Link>
        </div>
      </nav>
    </div>
  );
}
