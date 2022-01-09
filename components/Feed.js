import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

export default function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 max-w-3xl xl:grid-cols-3 max-w-6xl mx-auto">
      <section className="col-span-2">
        {/* Stories */}
        <Stories />
        {/* Posts */}
        <Posts />
      </section>

      <section className="hidden xl:inline-grid md:col-span-1 min-h-screen">
        {/* Mini Profile */}
        <div className="fixed w-[380px]">
          <MiniProfile />
          <Suggestions />
        </div>
        {/* Suggestions */}
      </section>
    </main>
  );
}
