import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col pt-5 h-screen">
        <div className="flex lg:flex-row flex-col-reverse gap-2">
          <div className="flex-1">
            <Image
              src="/sample.png"
              alt="Hero"
              width={500}
              height={500}
              className="[filter:drop-shadow(0px_4px_8px_rgba(0,_0,_0,_0.5))]"
            />
          </div>
          <div className="flex-1 mt-10">
            <span className="text-5xl font-bold">Welcome to QuickMark</span>
            <p className="text-xl mt-4 font-medium">
              QuickMark is a Markdown editor for creating and editing markdown
              files, with syntax highlighting and live preview.
            </p>
            <div className="flex  mt-4 w-full items-center justify-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 shadow-md">
                <a href="/markdown">Get Started</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
