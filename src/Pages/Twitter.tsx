import { FaTwitter } from "react-icons/fa";

function Twitter() {
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col gap-4 text-twitter-blue">
      <FaTwitter size={60} />
      <i>Always in our minds</i>
    </div>
  );
}

export default Twitter;
