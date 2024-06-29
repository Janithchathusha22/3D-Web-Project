"use client";
import React from "react";


import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";

export function TracingBeamDemo() {
    return (
        <TracingBeam className="px-6">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                {dummyContent.map((item, index) => (
                    <div key={`content-${index}`} className="mb-10 border-b-[1px]">
                        <h2 className="bg-black text-white rounded-full text-sm w-fit px-6 py-2 mb-4 border-[1px]">
                            {item.badge}
                        </h2>

                        <p className={twMerge("text-xl mb-4 helloText")}>
                            {item.title}
                        </p>

                        <div className="text-sm  prose prose-sm dark:prose-invert flex flex-col items-center justify-center">
                            {item?.image && (
                                <img
                                    src={item.image}
                                    alt="blog thumbnail"
                                    height="150"
                                    width="150"
                                    className="rounded-lg mb-10 object-cover"
                                />
                            )}
                            
                        </div>
                    </div>
                ))}
            </div>
        </TracingBeam>
    );
}

const dummyContent = [
    {
        title: "Deep Understand about Business & Objectives",
        description: (
            <>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at semper mi. Sed eget enim vehicula, imperdiet enim at, porttitor ex. Proin suscipit vel nunc a varius. Aenean lectus magna, molestie nec tristique at, pretium vel dui. Etiam tristique, justo ut lobortis dapibus, elit purus molestie enim, id varius nibh nunc non nibh. Aliquam est ipsum, feugiat eu nulla nec, hendrerit ullamcorper mi. Fusce placerat finibus diam quis finibus. Suspendisse potenti. Cras at molestie odio, sit amet congue purus. Integer eget suscipit arcu. Etiam a diam id libero finibus tristique. Nullam odio ante, condimentum quis urna nec, posuere aliquam lectus.
                </p>

            </>
        ),
        badge: "Step 01",
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/business-goal-3597248-3010228.png?f=webp",
    },
    {
        title: "Conduct industry Research",
        description: (
            <>

                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at semper mi. Sed eget enim vehicula, imperdiet enim at, porttitor ex. Proin suscipit vel nunc a varius. Aenean lectus magna, molestie nec tristique at, pretium vel dui. Etiam tristique, justo ut lobortis dapibus, elit purus molestie enim, id varius nibh nunc non nibh. Aliquam est ipsum, feugiat eu nulla nec, hendrerit ullamcorper mi. Fusce placerat finibus diam quis finibus. Suspendisse potenti. Cras at molestie odio, sit amet congue purus. Integer eget suscipit arcu. Etiam a diam id libero finibus tristique. Nullam odio ante, condimentum quis urna nec, posuere aliquam lectus.
                </p>
            </>
        ),
        badge: "Step 02",
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/market-research-5841171-4884462.png",
    },
    {
        title: "Understanding the Customer Personas",
        description: (
            <>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at semper mi. Sed eget enim vehicula, imperdiet enim at, porttitor ex. Proin suscipit vel nunc a varius. Aenean lectus magna, molestie nec tristique at, pretium vel dui. Etiam tristique, justo ut lobortis dapibus, elit purus molestie enim, id varius nibh nunc non nibh. Aliquam est ipsum, feugiat eu nulla nec, hendrerit ullamcorper mi. Fusce placerat finibus diam quis finibus. Suspendisse potenti. Cras at molestie odio, sit amet congue purus. Integer eget suscipit arcu. Etiam a diam id libero finibus tristique. Nullam odio ante, condimentum quis urna nec, posuere aliquam lectus.
                </p>
            </>
        ),
        badge: "Step 03",
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/nft-owner-5112603-4269014.png?f=webp",
    },
    {
        title: "Journey Mapping with Emotional Touchpoints",
        description: (
            <>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at semper mi. Sed eget enim vehicula, imperdiet enim at, porttitor ex. Proin suscipit vel nunc a varius. Aenean lectus magna, molestie nec tristique at, pretium vel dui. Etiam tristique, justo ut lobortis dapibus, elit purus molestie enim, id varius nibh nunc non nibh. Aliquam est ipsum, feugiat eu nulla nec, hendrerit ullamcorper mi. Fusce placerat finibus diam quis finibus. Suspendisse potenti. Cras at molestie odio, sit amet congue purus. Integer eget suscipit arcu. Etiam a diam id libero finibus tristique. Nullam odio ante, condimentum quis urna nec, posuere aliquam lectus.
                </p>
            </>
        ),
        badge: "Step 04",
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/location-map-6332199-5210289.png?f=webp",
    },
    {
        title: "Planning Digital & Communication Strategy",
        description: (
            <>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at semper mi. Sed eget enim vehicula, imperdiet enim at, porttitor ex. Proin suscipit vel nunc a varius. Aenean lectus magna, molestie nec tristique at, pretium vel dui. Etiam tristique, justo ut lobortis dapibus, elit purus molestie enim, id varius nibh nunc non nibh. Aliquam est ipsum, feugiat eu nulla nec, hendrerit ullamcorper mi. Fusce placerat finibus diam quis finibus. Suspendisse potenti. Cras at molestie odio, sit amet congue purus. Integer eget suscipit arcu. Etiam a diam id libero finibus tristique. Nullam odio ante, condimentum quis urna nec, posuere aliquam lectus.
                </p>
            </>
        ),
        badge: "Step 05",
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/planning-6248692-5115849.png",
    },
    {
        title: "Multi-Channel Usage",
        description: (
            <>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at semper mi. Sed eget enim vehicula, imperdiet enim at, porttitor ex. Proin suscipit vel nunc a varius. Aenean lectus magna, molestie nec tristique at, pretium vel dui. Etiam tristique, justo ut lobortis dapibus, elit purus molestie enim, id varius nibh nunc non nibh. Aliquam est ipsum, feugiat eu nulla nec, hendrerit ullamcorper mi. Fusce placerat finibus diam quis finibus. Suspendisse potenti. Cras at molestie odio, sit amet congue purus. Integer eget suscipit arcu. Etiam a diam id libero finibus tristique. Nullam odio ante, condimentum quis urna nec, posuere aliquam lectus.
                </p>
            </>
        ),
        badge: "Step 06",
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/ai-image-generator-10607923-8579575.png?f=webp",
    },
    {
        title: "Setting KPIs & Execution",
        description: (
            <>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at semper mi. Sed eget enim vehicula, imperdiet enim at, porttitor ex. Proin suscipit vel nunc a varius. Aenean lectus magna, molestie nec tristique at, pretium vel dui. Etiam tristique, justo ut lobortis dapibus, elit purus molestie enim, id varius nibh nunc non nibh. Aliquam est ipsum, feugiat eu nulla nec, hendrerit ullamcorper mi. Fusce placerat finibus diam quis finibus. Suspendisse potenti. Cras at molestie odio, sit amet congue purus. Integer eget suscipit arcu. Etiam a diam id libero finibus tristique. Nullam odio ante, condimentum quis urna nec, posuere aliquam lectus.
                </p>
            </>
        ),
        badge: "Step 07",
        image:
            "https://cdn3d.iconscout.com/3d/premium/thumb/focus-on-tasks-6797457-5588753.png?f=webp",
    },
];
