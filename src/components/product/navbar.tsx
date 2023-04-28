import FocusIcon from "@/components/icons/focus";
import PaperIcon from "@/components/icons/paper";
import TubeIcon from "@/components/icons/tube";

export default function PosterNavBar() {
  return (
    <nav className="flex bg-black text-white min-w-[300px]">
      <div className="grid grid-cols-1  lg:grid-cols-3  w-full mx-[3%] mt-12 mb-16 justify-around">
        <div className="w-full border flex ">
          <div className="flex items-center mx-auto space-x-4  py-8">
            <PaperIcon />
            <span className="text-xl md:text-base">Enhanced Mate Paper</span>
          </div>
        </div>
        <div className="w-full border flex ">
          <div className="flex items-center mx-auto space-x-4  py-8  ">
            <TubeIcon />
            <span className="text-xl md:text-base">Sent Rolled In A Tube</span>
          </div>
        </div>
        <div className="w-full border  flex  ">
          <div className="flex  items-center mx-auto space-x-4  py-8">
            <FocusIcon />
            <span className="text-xl md:text-base">Ultra High Resolution</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
