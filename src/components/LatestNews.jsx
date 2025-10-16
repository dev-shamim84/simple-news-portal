import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 py-2 mt-4">
      <p className="text-base-100 px-3 py-2 bg-secondary">Latest</p>
      <Marquee className="flex gap-5" pauseOnHover={true} speed={50}>
        <p className="font-bold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
          consectetur incidunt hic quae. Commodi sequi modi assumenda vero !
        </p>
        <p className="font-bold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
          consectetur incidunt hic quae. Commodi sequi modi assumenda vero !
        </p>
        <p className="font-bold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
          consectetur incidunt hic quae. Commodi sequi modi assumenda vero !
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
