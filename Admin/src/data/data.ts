import {
  IoHomeOutline,
  IoBagOutline,
  IoAddCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { MdOutlineCategory, MdOutlineBorderColor } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";

export const adminSideBar = {
  top: [
    {
      id: 1,
      icon: IoHomeOutline,
      navItem: "Dashboard",
      path: "/",
    },
    {
      id: 2,
      icon: IoBagOutline,
      navItem: "Product",
      path: "/product",
    },
    {
      id: 3,
      icon: IoAddCircleOutline,
      navItem: "Add New Item",
      path: "/dashboard/add-items",
    },
    {
      id: 4,
      icon: MdOutlineCategory,
      navItem: "Create New Category",
      path: "/dashboard/create-category",
    },
    {
      id: 5,
      icon: MdOutlineBorderColor,
      navItem: "Orders",
      path: "/orders",
    },
  ],

  bottom: [
    {
      id: 1,
      icon: IoSettingsOutline,
      navItem: "Settings",
      path: "/settings",
    },
    {
      id: 2,
      icon: IoIosHelpCircleOutline,
      navItem: "Help and Support",
      path: "/help-and-support",
    },
  ],
};
