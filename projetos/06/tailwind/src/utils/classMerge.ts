import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

function classMerge(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default classMerge;
