import swimmingImg from "../assets/swimming.png";
import classImg from "../assets/class.png";
import playImg from "../assets/playground.png";

const QZone = () => {
  return (
    <div className="mt-3 bg-base-200 p-3">
      <h2 className="font-bold mb-3">Q-Zone</h2>
      <div className="space-y-5">
        <img src={swimmingImg} alt="swimmingImg" />
        <img src={classImg} alt="classImg" />
        <img src={playImg} alt="classImg" />
      </div>
    </div>
  );
};

export default QZone;
