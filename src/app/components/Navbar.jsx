import Golf from '../../../public/Golf-PNG-Free-Download.png';
import Image from "next/image";
import Link from "next/link";
import { MdOutlinePhone } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
const Navbar = () => {
  return (
    <div>
      <header className="relative w-full h-20 bg-slate-800">
        <div className="flex items-start ">
          <MdOutlinePhone
            size={60}
            className="flex fill-white py-4 space-x-30"
          />
          <p className="text-white py-5 ">+66 801567162</p>
          <div  className="flex fill-white float-right hover:bg-gray-200">
          <FaWpforms
            size={30}
            className="flex fill-white float-right ml-10 mt-4"
          />
          <Link href="/form">
          <p className="text-white py-5 ml-1">Contact Form</p>
          </Link>
          </div>
          <div className="text-white float-right py-5 ml-5 flex fill-white">
          <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton></UserButton>
      </SignedIn>
      </div>
        </div>
      </header>
      <nav className="relative w-full h-25 bg-gray-200">
        <div className="flex items-center h-full w-full px-4 2xl:px-16 text-center sm:text-left">
          <Link href="/">
            <Image
              src={Golf}
              alt="Golf"
              width="150"
              height="10"
              className="cursor-pointer"
              priority
            />
          </Link>

          <div className="relative left-10">
            <p class="peer px-5 py-2 hover:bg-gray-300 text-slate-950 text-xl">
              Golf Holidays |
            </p>

            <div
              class="hidden peer-hover:flex hover:flex
         w-[200px]
         flex-col bg-white drop-shadow-lg absolute z-10"
            >
              <Link className="px-5 py-3 hover:bg-gray-200" href="/thailand">
                Thailand
              </Link>
              <a class="px-5 py-3 hover:bg-gray-200" href="#">
                Cambodia
              </a>
              <a class="px-5 py-3 hover:bg-gray-200" href="#">
                Vietnam
              </a>
            </div>
          </div>
          <div className="relative left-10">
            <p class="peer px-5 py-2 hover:bg-gray-300 text-slate-950 text-xl">
              Tournaments |
            </p>
            <div
              class="hidden peer-hover:flex hover:flex
         w-[200px]
         flex-col bg-white drop-shadow-lg absolute z-10"
            >
              <Link className="px-5 py-3 hover:bg-gray-200" href="/thailand">
                Bangkok Pro Classic
              </Link>
              <a class="px-5 py-3 hover:bg-gray-200" href="#">
                Cambodia Angkor Open
              </a>
              <a class="px-5 py-3 hover:bg-gray-200" href="#">
                Vietnam Saigon Tour
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="h-6 bg-slate-900"></div>
    </div>
  );
};

export default Navbar;