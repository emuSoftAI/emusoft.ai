import Navbar from "./ui/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>{/* footer */}</footer>
    </>
  );
};

export default Layout;
