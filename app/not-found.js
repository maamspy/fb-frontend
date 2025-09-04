// app/not-found.js

import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex-1 flex py-16 flex-col items-center justify-center text-center px-4">
      <Image
        src="/404.png"
        height={105}
        width={240}
        alt="404 Not Found Image PNG"
        className="mb-8"
      />
      <p className="text-xl mb-6">
        Sorry, the page you are looking for was not found.
      </p>
      <Link href="/">
        <button className="px-6 py-2 bg-[#AE94D8] text-white rounded-md font-semibold hover:bg-[#7053AB] cursor-pointer transition">
          Go Back Home
        </button>
      </Link>
    </main>
  );
}
