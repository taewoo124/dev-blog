export default function MainWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="h-[1200px] sm:h-[1300px]">{children}</div>;
}
