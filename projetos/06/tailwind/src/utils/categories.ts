import {
  Utensils,
  Pin,
  BriefcaseBusiness,
  Car,
  House,
  type LucideIcon,
} from "lucide-react";

const CATEGORIES: Record<
  CategoriesAPIEnum,
  {
    name: string;
    icon: LucideIcon;
  }
> = {
  food: {
    name: "Alimentação",
    icon: Utensils,
  },
  others: {
    name: "Outros",
    icon: Pin,
  },
  service: {
    name: "Serviços",
    icon: BriefcaseBusiness,
  },
  transport: {
    name: "Transporte",
    icon: Car,
  },
  accommodation: {
    name: "Acomodação",
    icon: House,
  },
};

export const CATEGORIES_KEYS = Object.keys(CATEGORIES) as Array<
  keyof typeof CATEGORIES
>;

export default CATEGORIES;
