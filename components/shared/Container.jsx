import { cn } from "@/lib/utils";

export const Container = ({ className, children }) => {
  return <div className={cn("max-w-6xl mx-auto", className)}>{children}</div>;
};
