import ShowEvent from "../../Components/Event/ShowEvent";
import Slider from "../../Components/Common/Slider";
import Testimonial from "../../Components/Event/Testimonial";
import PopularEvent from "../../Components/Event/PopularEvent";
import StatisticsAndAchivements from "../../Components/Event/StatisticsAndAchivements";

const Home = () => {
  return (
    <div className="min-h-screen">
      <title>PlayPulse | Home</title>
      <Slider></Slider>
      <div className="showEventContainer centerize bg-amber-200">
        <ShowEvent></ShowEvent>
      </div>
      <div className="popularEventContainer centerize bg-gradient-to-br from-slate-900 via-sky-900 to-black">
        <PopularEvent></PopularEvent>
      </div>
      <div className="testimonialContainer centerize bg-gradient-to-br from-sky-100 via-white to-sky-50">
        <Testimonial></Testimonial>
      </div>

      <div className="statisticsAndAchivmentsContianer centerize  bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <StatisticsAndAchivements></StatisticsAndAchivements>
      </div>
    </div>
  );
};

export default Home;
