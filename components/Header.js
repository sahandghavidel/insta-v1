import Image from "next/image";

export default function Header() {
  return (
    <div className="flex justify-between bg-white max-w-6xl">
      {/* Left */}
      <div className="cursor-pointer relative hidden lg:inline-grid w-24 h-24">
        <Image
          layout="fill"
          src="https://www.androidguys.com/wp-content/uploads/2015/04/insta.png"
          className="object-contain"
        />
      </div>
      <div className="cursor-pointer relative lg:hidden w-10 h-10">
        <Image
          layout="fill"
          src="https://static.xx.fbcdn.net/assets/?revision=816167972411634&name=desktop-instagram-gradient-logo&density=1"
          className="object-contain"
        />
      </div>
      <h1>Hello</h1>
      {/* Middle */}

      {/* Right */}
    </div>
  );
}
