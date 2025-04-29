import Header from "@/components/reusable/Header";
import { FaLaptop } from "react-icons/fa";
import { FaTabletAlt } from "react-icons/fa";
import { MdSmartphone } from "react-icons/md";

export const sizeOptions = [
  {
    size: 'laptop',
    icon: <FaLaptop />
  },
  {
    size: 'tablet',
    icon: <FaTabletAlt />
  },
  {
    size: 'phone',
    icon: <MdSmartphone />
  },
]

export const components = [
  {
    name: 'Header',
    component: <Header />
  }
]