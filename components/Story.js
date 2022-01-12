import { PlusIcon } from "@heroicons/react/solid";
export default function Story({ img, user, isUser }) {
  return (
    <div className="relative group cursor-pointer">
      <img
        className="object-cover h-14 rounded-full p-[1.5px] border-red-500 border-2  group-hover:scale-110 transition-transform duration-200 ease-out"
        src={img}
        alt={user}
      />
      {isUser && <PlusIcon className="absolute top-4 left-4 h-6 text-white " />}

      <p className="text-xs w-14 truncate text-center">{user}</p>
    </div>
  );
}
