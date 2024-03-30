import Link from "next/link";

export default function AboutLayout({children}){
    return (
      <div>
        <nav className="w-full bg-purple-500">
          <button className="m-2 p-2 border-2 rounded-xl">
            <Link href="/"> Home </Link>
          </button>
          <Link href="/about/details">
            <button className="m-2 p-2 border-2 rounded-xl">Details</button>
          </Link>
        </nav>
        {children}
      </div>
    );
}