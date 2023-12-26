import Header from "./Header";
import Navbar from "./ui/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
        <Header />
      </header>
      <main>{children}</main>
      <footer>{/* footer */}</footer>
    </>
  );
};

export default Layout;
