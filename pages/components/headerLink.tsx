export default function HeaderLink({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span>
      <h1 className="text-2xl text-white flex items-center font-bold mx-4">
        {children}
      </h1>
    </span>
  );
}
