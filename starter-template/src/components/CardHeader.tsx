import StarIcon from "@/assets/icons/star.svg"; // Ensure SVG import works
import { twMerge } from "tailwind-merge";

export const CardHeader = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={twMerge("flex flex-col p-2 md:py-8 md:px-10 lg:py-1 lg:px-0", className || "")}>
      <div className="inline-flex items-center gap-2">
        <StarIcon className="w-9 h-9 lg:text-justify text-emerald-300" />
        <h3 className="font-serif text-3xl lg:text-pretty lg:text-justify">{title}</h3>
      </div>
      <p className="text-sm lg:text-base lg:px-10 max-w-lg text-white/60 mt-2">{description}</p>
    </div>
  );
};
