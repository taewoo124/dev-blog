export default function HeaderLink({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="mx-4 flex items-center">
      <h1>{children}</h1>
    </span>
  );
}
