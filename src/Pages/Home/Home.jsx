import Navbar from "../../Shared/Navbar/Navbar";
import bgImg from "../../assets/Rectangle 1.png";

const Home = () => {
  return (
    <div
      className="h-screen bg-no-repeat bg-cover bg-bottom relative"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.70)]">

        <Navbar></Navbar>

      </div>
    </div>
  );
};

export default Home;
