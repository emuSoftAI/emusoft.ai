import Image from "next/image";
import Link from "next/link";
import Container from "../Container";

const LINKS = [
  { href: "#activities", name: "Activities" },
  { href: "#career-talks", name: "Career Talks" },
  { href: "#tutorials", name: "Tutorial" },
  { href: "#projects", name: "Projects" },
  { href: "#about", name: "About Us" },
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
              className="w-14 lg:w-20"
              priority
            />
          </Link>
          <ul className="lg:flex hidden items-center gap-6 ms-auto">
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
