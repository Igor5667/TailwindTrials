import { FaTwitter } from "react-icons/fa";

interface TwitterProps {
  className?: string;
}

function Twitter({ className }: TwitterProps) {
  return (
    <div className={`twitter-page  ${className}`}>
      <div className="mt-auto flex flex-col justify-center items-center gap-6">
        <FaTwitter size={100} />
        <i className="text-lg">Always in our minds</i>
      </div>
      <i className="text-sm mt-auto mb-3 md:mb-0 text-center p-4">
        This page is for learn extending colors in Tailwind CSS using Twitter
        blue color #1DA1F2 and discovered @apply in css file
      </i>
    </div>
  );
}

export default Twitter;
