import {
  addItemIcon,
  createNewIcon,
  dashboardIcon,
  helpIcon,
  productIcon,
  settingIcon,
} from "@/assets/iconsrafce";

export const adminSideBar = {
  top: [
    {
      id: 1,
      icon: dashboardIcon,
      navItem: "Dashboard",
      path: "/",
    },
    {
      id: 2,
      icon: productIcon,
      navItem: "Product",
      path: "/product",
    },
    {
      id: 3,
      icon: addItemIcon,
      navItem: "Add New Item",
      path: "/add-items",
    },
    {
      id: 4,
      icon: createNewIcon,
      navItem: "Create New Category",
      path: "/create-category",
    },
    {
      id: 5,
      icon: createNewIcon,
      navItem: "Orders",
      path: "/orders",
    },
  ],

  bottom: [
    {
      id: 1,
      icon: settingIcon,
      navItem: "Settings",
      path: "/settings",
    },
    {
      id: 2,
      icon: helpIcon,
      navItem: "Help and Support",
      path: "/help-and-support",
    },
  ],
};
