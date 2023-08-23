import PostBanner from "./PostBanner";

export default function Posts(): React.ReactElement {
  return (
    <div className="inline-grid gap-4 w-full grid-cols-2 ">
      <PostBanner />
      <PostBanner />
      <PostBanner />
      <PostBanner />
      <PostBanner />
      <PostBanner />
    </div>
  );
}
