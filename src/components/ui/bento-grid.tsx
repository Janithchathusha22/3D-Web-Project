import { cn } from "@/lib/utils.ts";
import { Link } from "react-router-dom";


export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto ",
                className
            )}
            
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,

    url,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
   
    url?: React.ReactNode;
}) => {
    return (
        <Link
            className={cn(
                "cursor-pointer row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 border-black/[0.2] dark:bg-black dark:border-white/[0.2] bg-white border  justify-between flex flex-col space-y-4",
                className
            )}
         
            to={url}
        >
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200">
             
                <div className="text-base font-bold text-teal-400 mb-2 mt-2">
                    {title}
                </div>
                <div className="font-normal text-neutral-600 text-xs dark:text-neutral-300">
                    {description}
                </div>
            </div>
        </Link>
    );
};
