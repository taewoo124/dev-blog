export default function PostBanner(): React.ReactElement {
  return (
    <div className="flex flex-col p-6 border-2 mb-8 rounded-xl border-gray rounded-1xl">
      <div>
        <p className="text-3xl mb-6">Front End</p>
      </div>
      <div className="flex justify-between">
        <span className="flex">
          <p className="mx-2">tag</p>
          <p className="mx-2">tags</p>
        </span>
        <span className="flex">
          <p className="mx-2">dd</p>
          <p className="mx-2">11</p>
        </span>
      </div>
    </div>
  );
}
