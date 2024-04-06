import Navbar from "../../Shared/Navbar/Navbar";
import bgImg from "../../assets/Rectangle 1.png";

const Booking = () => {
  return (
    <div
      className="h-screen relative"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.70)]">
        <Navbar></Navbar>
        <div className="max-w-[1160px] flex flex-col h-[calc(100vh-107.5px)] justify-center mx-auto">
            <h3 className="text-white text-[97px] ">Cox's bazar</h3>
            <p className="text-white leading-6 max-w-[505px]">Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
        </div>
      </div>
    </div>
  );
};

export default Booking;
