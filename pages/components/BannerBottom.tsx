import UpScrollingButton from "./UpScrollingButton";

export default function BannerBottom(): React.ReactElement {
  return (
    <div className="flex w-full justify-between items-center bg-white rounded-sm  py-1 px-4">
      <UpScrollingButton />
    </div>
  );
}
