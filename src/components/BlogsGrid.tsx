import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

import hr from "../assets/studio.webp";
export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          url={item.url}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "The Untold Power of Your Value Proposition",
    description: "In the crowded marketplace of today, simply having a great product or service isn't enough. You need a clear and compelling message ...",
    header: <Skeleton />,
    className: "md:col-span-2",
    url: '/the-untold-power-of-your-value-proposition'
  },
  // {
  //   title: "The Digital Revolution",
  //   description: "Dive into the transformative power of technology.",
  //   header: <Skeleton />,
  //   className: "md:col-span-1",
  //   url: '/'
  // },
  {
    title: "Unveiling Your Brand's Soul",
    description: "In today's digital age, attention spans are shorter than ever.  When someone encounters your brand, ...",
    header: <Skeleton />,
    className: "md:col-span-1",
    url: '/unveiling-your-brand-s-soul'
  },
  // {
  //   title: "The Power of Communication",
  //   description:
  //     "Understand the impact of effective communication in our lives.",
  //   header: <Skeleton />,
  //   className: "md:col-span-2",
  //   url: '/'
  // },
  // {
  //   title: "The Dawn of Innovation",
  //   description: "Explore the birth of groundbreaking ideas and inventions.",
  //   header: <Skeleton />,
  //   className: "md:col-span-2",
  //   url: '/'
  // },
  // {
  //   title: "The Digital Revolution",
  //   description: "Dive into the transformative power of technology.",
  //   header: <Skeleton />,
  //   className: "md:col-span-1",
  //   url: '/'
  // },
  // {
  //   title: "The Art of Design",
  //   description: "Discover the beauty of thoughtful and functional design.",
  //   header: <Skeleton />,
  //   className: "md:col-span-1",
  //   url: '/'
  // },
  // {
  //   title: "The Power of Communication",
  //   description:
  //     "Understand the impact of effective communication in our lives.",
  //   header: <Skeleton />,
  //   className: "md:col-span-2",
  //   url: '/'
  // },
  // {
  //   title: "The Art of Design",
  //   description: "Discover the beauty of thoughtful and functional design.",
  //   header: <Skeleton />,
  //   className: "md:col-span-1",
  //   url: '/'
  // },
];
