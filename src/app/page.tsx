import Link from "next/link";
import Button from "./component/Button";
export default function Home() {
  return (
    <div className="bg-red-600 h-screen flex justify-center items-center flex-col gap-5">
      <h1 className="text-4xl font-bold">Home page</h1>
    <div className="space-x-5">
      <Link href={"/about"}>
      <Button props="About" />
      </Link>
      <Link href={"/contact"}><Button props="Contact" /></Link>
    </div>
    </div>
    
  );
}
