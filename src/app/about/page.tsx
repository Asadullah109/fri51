import Link from "next/link";
import Button from "../component/Button";

export default function About(){
    return (
        <div className="flex justify-center items-center h-screen bg-green-400 px20">
            <div className="space-y-5 bg-green-200 p-5 rounded-lg">

                <h1 className="text-6xl text-center font-bold">About us</h1>
                <p className="text-2xl text-justify">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia quas eligendi eaque in aperiam quis reprehenderit iure maxime accusamus, ipsa minus ducimus quos tenetur tempora temporibus sapiente. Neque, magnam nam.
                </p>
                <div>
                    <Link href={"/"}>
                    <Button/>
                    </Link>
                </div>
            </div>
        </div>
    )
}