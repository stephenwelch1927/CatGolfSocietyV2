import Bkk from "../../../public/Bangkok-Region.jpg";
import Image from "next/image";
export default function Page() {
  return (
   <div>
      <Image src={Bkk} alt="Golf" className="cursor-pointer" priority />
      <h1>Hello from Thailand!</h1>
      </div>
  );
}
