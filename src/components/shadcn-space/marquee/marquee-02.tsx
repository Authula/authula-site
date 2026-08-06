import Link from "next/link";

import { Marquee } from "../animations/marquee";

type MarqueeDataList = {
  name: string;
  image: string;
  url?: string;
};

export default function MarqueeShowcase() {
  const list: MarqueeDataList[] = [
    {
      image: "/images/projects/cliqrelay-logo.png",
      name: "CliqRelay",
      url: "https://cliqrelay.com",
    },
    {
      image: "/images/projects/cliqrelay-logo.png",
      name: "CliqRelay",
      url: "https://cliqrelay.com",
    },
  ];

  return (
    <>
      <Marquee className="[--duration:20s] p-0" pauseOnHover>
        {list.map((item, index) => (
          <div key={index}>
            <Link href={item.url ?? "#"} target={item.url ? "_blank" : "_self"}>
              <img
                src={item.image}
                alt={item.name}
                className="block w-36 h-8 mr-12 lg:mr-20"
              />
            </Link>
          </div>
        ))}
      </Marquee>
    </>
  );
}
