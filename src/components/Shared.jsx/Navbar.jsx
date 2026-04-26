import Image from "next/image";
import Link from "next/link";
import avtar from "../../assets/user.png";


const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-4  max-w-5xl mx-auto">
            <div></div>
            <ul className="flex justify-center items-center gap-4  text-center">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/careare">Careare</Link></li>
            </ul>

            <div className="flex justify-between gap-2 items-center px-4">
               <Image src={avtar} alt="Logo" width={40} height={30} />
               <button className="btn bg-blue-500 text-white">Login</button>
            </div>
        </div>
    );
};

export default Navbar;