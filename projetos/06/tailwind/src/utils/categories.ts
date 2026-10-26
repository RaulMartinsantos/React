import { Utensils, Pin, BriefcaseBusiness, Car, House } from "lucide-react";

const CATEGORIES = {
  food: {
    name: "Alimentação",
    icon: Utensils,
  },
  other: {
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
