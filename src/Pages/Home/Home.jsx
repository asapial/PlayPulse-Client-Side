import ShowEvent from "../../Components/Event/ShowEvent";
import Slider from "../../Components/Common/Slider";
import Testimonial from "../../Components/Event/Testimonial";
import PopularEvent from "../../Components/Event/PopularEvent";
import FeaturedEvent from "../../Components/Event/FeaturedEvent";
import StatisticsAndAchivements from "../../Components/Event/StatisticsAndAchivements";

const Home = () => {
  return (
    <div className="min-h-screen">
      <title>PlayPulse</title>
      <Slider></Slider>
      <div className="showEventContainer centerize custom-gradient">
        <ShowEvent></ShowEvent>
      </div>
      <div className="popularEventContainer centerize custom-gradient-alt">
        <PopularEvent></PopularEvent>
      </div>
      <div className="featuredEventContainer centerize custom-gradient">
        <FeaturedEvent />
      </div>
      <div className="testimonialContainer centerize bg-base-300">
        <Testimonial></Testimonial>
      </div>

      <div className="statisticsAndAchivmentsContianer centerize custom-gradient ">
        <StatisticsAndAchivements></StatisticsAndAchivements>
      </div>
    </div>
  );
};

export default Home;

