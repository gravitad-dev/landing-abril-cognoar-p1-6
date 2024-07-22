// >>>>   install npm i react-icons  <<<<
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const social = [
  {
    id: 0,
    url: "https://www.instagram.com/cognoar/",
    icon: <FaInstagram />,
  },
  {
    id: 1,
    url: "https://www.facebook.com/CognoAR",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.linkedin.com/company/102896407/admin/feed/posts/",
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    url: "https://x.com/CognoAr",
    icon: <FaXTwitter />,
  },
];

function SocialButtons() {
  return (
    <ul>
      <li className="flex gap-[6px]">
        {social.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            className="hover:bg-[#C030E3]  h-[28px] w-[28px] rounded-[4px] text-white text-[16px] flex justify-center items-center"
          >
            {item.icon}
          </a>
        ))}
      </li>
    </ul>
  );
}

export default SocialButtons;
