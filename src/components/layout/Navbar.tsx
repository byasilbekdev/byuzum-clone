import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex flex-col gap-5">
      <div className="glass-navbar">
        <div className="container flex h-9 items-center justify-between">
          <p>Tashkent</p>
          <div>dfg</div>
        </div>
      </div>
      <nav className="container flex ">
        <Link href={"/"} className="flex items-center gap-1 font-heading">
          ByMall
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
