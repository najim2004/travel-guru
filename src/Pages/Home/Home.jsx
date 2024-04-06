import Navbar from "../../Shared/Navbar/Navbar";
import bgImg from "../../assets/Rectangle 1.png";

const Home = () => {
  return (
    <div
      className="h-screen relative"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.70)]">

        <Navbar></Navbar>
        <h3>this is home</h3>

      </div>
    </div>
  );
};

export default Home;
