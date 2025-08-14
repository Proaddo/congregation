import Topnav from "../components/Topnav";
// import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Topnav />
      <main className="flex-grow p-4">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
