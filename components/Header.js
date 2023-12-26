import Image from "next/image";
import Container from "./Container";

const Header = ({}) => {
  return (
    <header className="py-10 bg-primary">
      <Container className="grid grid-cols-12 items-center">
        <div className="col-span-5">
          <h1 className="text-white text-6xl mb-4">
            SOFTWARE & AI DEVELOPMENT CLUB
          </h1>
          <p className="text-lg text-gray-200">
            We're all about creating cool stuff – from software and games to web
            apps/sites and AI applications. Whether you're a coding pro or just
            starting out, our club is the place to be for hands-on projects,
            learning, and connecting with fellow tech enthusiasts. Join us as we
            bring ideas to life through simple yet powerful code. Let's build
            the future together!
          </p>
        </div>
        <div className="col-span-7 flex justify-end">
          <Image
            src={"/logo.png"}
            width={1563}
            height={1563}
            className="w-4/12 lg:w-6/12"
          />
        </div>
      </Container>
    </header>
  );
};

export default Header;
