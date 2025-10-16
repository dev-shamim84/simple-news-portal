import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";

const FindUs = () => {
  return (
    <div className="my-4">
      <h2 className="font-bold mb-3">Find Us</h2>
      <div className="flex flex-col gap-3">
        <button className="bg-base-100 btn w-full justify-start text-accent">
          <FaFacebookF className="text-[#3B599C]" /> Facebook
        </button>
        <button className="bg-base-100 btn w-full justify-start text-accent">
          <TiSocialTwitter className="text-[#58A7DE]" /> Twitter
        </button>
        <button className="bg-base-100 btn w-full justify-start text-accent">
          <BsInstagram className="text-[#D82D7E]" /> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
