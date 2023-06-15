import SecondarySidebar from "../components/Sidebars/SecondarySidebar";
import PrimarySidebar from "../components/Sidebars/PrimarySidebar";
import PostsListing from "../components/PostsListing";

export default function HomePage() {
  return (
    <div className="flex justify-center gap-2">
      <PrimarySidebar />
      <PostsListing />
      <SecondarySidebar />
    </div>
  );
}
