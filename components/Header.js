import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
export default function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div className="shadow-sm bg-white border-b sticky top-0 z-50">
      <div className="select-none flex justify-between max-w-6xl mx-5 xl:mx-auto">
        {/* Left */}
        <div className="cursor-pointer relative hidden lg:inline-grid w-24">
          <Image
            layout="fill"
            src="https://www.androidguys.com/wp-content/uploads/2015/04/insta.png"
            className="object-contain"
            onClick={() => router.push("/")}
          />
        </div>

        <div className="cursor-pointer relative lg:hidden w-8 mt-1">
          <Image
            layout="fill"
            src="https://static.xx.fbcdn.net/assets/?revision=816167972411634&name=desktop-instagram-gradient-logo&density=1"
            className="object-contain"
            onClick={() => router.push("/")}
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

        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" onClick={() => router.push("/")} />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          {session ? (
            <>
              <PaperAirplaneIcon className="navBtn rotate-45" />
              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className="navBtn"
              />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />
              <img
                onClick={signOut}
                className="rounded-full h-10 cursor-pointer"
                src={session.user.image}
              />
            </>
          ) : (
            <button onClick={signIn}>sign in</button>
          )}
        </div>
      </div>
    </div>
  );
}
