import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="pt-48 md:pt-24">
        <div className="relative max-w-xl mx-auto mt-20">
          <Image
            className="h-64 w-full object-cover rounded-md"
            src="/health.jpg"
            alt="Random image"
            width={900}
            height={900}
          />
          <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold">
              Hello, I am new to Nextjs
            </h2>
          </div>
        </div>
        <div className="justify-center m-8 text-black font-bold text-3xl flex underline">
          <Link href="/posts">Link to my Posts</Link>
        </div>
      </main>
    </>
  );
}
