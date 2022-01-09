export default function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="h-16 rounded-full border p-[2px]"
        src="https://static.skillshare.com/uploads/users/350301760/user-image-large.jpg?753816048"
        alt="userImage"
      />
      <div className="flex-1 ml-4">
        <h2 className="font-bold">codewithsahand</h2>
        <h3 className="text-sm text-gray-400 ">Welcome to Instageram</h3>
      </div>
      <button className="font-semibold text-blue-400 text-sm">Sing out</button>
    </div>
  );
}
