import foodSvg from "../assets/food.svg";
import othersSvg from "../assets/thumbtack.svg";
import serviceSvg from "../assets/thumbtack.svg";
import transportSvg from "../assets/transport.svg";
import accommodationSvg from "../assets/accommodation.svg";

const CATEGORIES = {
  food: {
    name: "Alimentação",
    icon: foodSvg,
  },
  other: {
    name: "Outros",
    icon: othersSvg,
  },
  service: {
    name: "Serviços",
    icon: serviceSvg,
  },
  transport: {
    name: "Transporte",
    icon: transportSvg,
  },
  accommodation: {
    name: "Acomodação",
    icon: accommodationSvg,
  },
};

export const CATEGORIES_KEYS = Object.keys(CATEGORIES) as Array<
  keyof typeof CATEGORIES
>;


export default CATEGORIES