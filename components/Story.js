export default function Story({ img, user }) {
  return (
    <div>
      <img
        className="object-cover h-14 rounded-full p-[1.5px] border-red-500 border-2 cursor-pointer hover:scale-110 transition-transform duration-200 ease-out"
        src={img}
        alt={user}
      />
      <p className="text-xs w-14 truncate text-center">{user}</p>
    </div>
  );
}
