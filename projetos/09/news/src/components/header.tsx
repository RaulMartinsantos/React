import Image from "next/image";
import Link from "./link";
import SingInButton from "./singInButton";

function Header() {
  return (
    <header className="h-20 border-b border-b-gray-800">
      <div className="max-w-[1120px] h-20 my-0 mx-auto py-0 px-8 flex items-center">
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={120}
          height={80}
        />
        <nav className="ml-20 h-20">
          <Link to="#">Home</Link>
          <Link to="#">Posts</Link>
        </nav>

        <SingInButton className="ml-auto" />
      </div>
    </header>
  );
}

export default Header;
