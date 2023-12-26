import Image from "next/image";
import Link from "next/link";
import Container from "../Container";

const LINKS = [
  { href: "#activities", name: "Activities" },
  { href: "#projects", name: "Projects" },
  { href: "#about", name: "About Us" },
  { href: "#vision", name: "Our Vision" },
  { href: "#directors", name: "Board of Directors" },
];

const Navbar = () => {
  return (
    <header className="py-3">
      <Container>
        <nav className="flex items-center">
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              width={1563}
              height={1563}
              alt="EMUSoft AI"
              className="w-20"
            />
          </Link>
          <ul className="flex items-center gap-4 ms-auto">
            {LINKS.map((link) => (
              <Link className="nav-link" href={link.href} key={link.href}>
                {link.name}
              </Link>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
