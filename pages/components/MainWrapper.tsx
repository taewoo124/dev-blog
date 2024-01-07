export default function MainWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="h-[1350px] sm:h-[1400px]">{children}</div>;
}
