import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";

export default function Header() {
  return (
    <div className="select-none flex justify-between bg-white max-w-6xl">
      {/* Left */}
      <div className="cursor-pointer relative hidden lg:inline-grid w-24">
        <Image
          layout="fill"
          src="https://www.androidguys.com/wp-content/uploads/2015/04/insta.png"
          className="object-contain"
        />
      </div>
      <div className="cursor-pointer relative lg:hidden w-10 flex-shrink-0">
        <Image
          layout="fill"
          src="https://static.xx.fbcdn.net/assets/?revision=816167972411634&name=desktop-instagram-gradient-logo&density=1"
          className="object-contain"
        />
      </div>
      {/* Middle - install https://github.com/tailwindlabs/tailwindcss-forms before that */}

      <div className="relative mt-1 p-3 rounded-md ">
        <div className="absolute inset-y-0 pl-3 flex items-center">
          <SearchIcon className="h-5 text-gray-500" />
        </div>
        <input
          className="bg-gray-50 pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
          type="text"
          placeholder="Search"
        />
      </div>

      {/* Right */}
    </div>
  );
}
