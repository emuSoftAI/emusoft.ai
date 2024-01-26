import Image from "next/image";
import styles from "./Header.module.css";
import Container from "../Container";
import Link from "next/link";

const Header = ({ activities }) => {
  return (
    <>
      <header className="mt-16 mb-48">
        <Container className={"lg:grid lg:grid-cols-12"}>
          <div className="col-span-8 grid grid-cols-12">
            <div className="col-span-12 xl:col-span-9">
              <h1 className="text-4xl lg:text-6xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline">
                EMU Software & AI Development Club
              </h1>
              <p className="lg:text-lg text-gray-500 my-6">
                Welcome to the Software & AI Development Club at EMU! We are a
                vibrant community of tech enthusiasts, programmers, and
                artificial intelligence aficionados coming together to explore
                the exciting realms of software development and AI.
              </p>
              <Link
                href={"/"}
                className="text-primary hover:text-primary-darker font-semibold"
              >
                More about us
              </Link>
            </div>
          </div>
          <div className="col-span-4 mt-24 lg:mt-0">
            <Image
              src={"/development.png"}
              width={1920}
              height={1909}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </Container>
      </header>
      {/* <header className={`flex ${styles.snapContainer}`}>
        {activities.map((activity, index) => (
          <div className={`relative  ${styles.snapItem}`} key={index}>
            <Image
              width={activity.thumbnail.size.width}
              height={activity.thumbnail.size.height}
              src={activity.thumbnail.source}
              style={{
                width: "100%",
                objectFit: "cover",
                objectPosition: index !== 2 ? "center" : "top",
              }}
            />
            <div className="absolute bg-gradient-to-tr from-black to-gray-700 opacity-80 top-0 w-full h-full p-12"></div>
            <div className="absolute top-0 w-full p-4 lg:p-12">
              <h1 className="text-2xl lg:text-6xl text-white mb-2">
                {activity.title}
              </h1>
              <p className="text-sm lg:text-lg text-white lg:w-2/3">
                {activity.description}
              </p>
            </div>
          </div>
        ))}
      </header> */}
    </>
  );
};

export default Header;
