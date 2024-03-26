import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full text-black">
      <nav className="rounded-full bg-white flex justify-between py-3 px-5 my-2 shadow-lg">
        <div className="flex items-center">
          <Link className="text-2xl font-bold" href={"/"}>QuickMark</Link>
        </div>

        <div className="flex items-center font-semibold">
          <Link href="/markdown" id="inside">
            Markdown
          </Link>
        </div>
      </nav>
    </div>
  );
}
