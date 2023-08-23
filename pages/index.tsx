import Link from "next/link";

export default function Home() {
  return (
    <Link href={"/dashboard"}>
      <div>Hello Dev Blog!</div>
    </Link>
  );
}
