import faker from "faker";
import { useEffect, useState } from "react";
import Story from "./Story";
import { useSession } from "next-auth/react";

export default function Stories() {
  const [suggestions, setSuggestions] = useState([]);
  const { data: session } = useSession();
  console.log(session);
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);
  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-none">
      {session && (
        <Story
          img={session.user.image}
          user={session.user.username}
          isUser="true"
        />
      )}

      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={`https://i.pravatar.cc/150?img=${profile.id}`}
          user={profile.username}
        />
      ))}
      {/* Story */}
      {/* Story */}
    </div>
  );
}
