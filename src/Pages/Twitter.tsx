import { FaTwitter } from "react-icons/fa";

interface TwitterProps {
  className?: string;
}

function Twitter({ className }: TwitterProps) {
  return (
    <div
      className={`h-screen w-full flex items-center justify-center flex-col  text-twitter-blue ${className}`}
    >
      <div className="mt-auto flex flex-col justify-center items-center gap-4">
        <FaTwitter size={60} />
        <i>Always in our minds</i>
      </div>
      <i className="text-xs mt-auto mb-2">
        This page is for learn extending colors in Tailwind CSS using Twitter
        blue color #1DA1F2
      </i>
    </div>
  );
}

export default Twitter;
