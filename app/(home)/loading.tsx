import { PulseLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="min-h-[95vh] w-full flex items-center justify-center">
      <PulseLoader color="#9d1d2c" />
    </div>
  );
};

export default Loading;
