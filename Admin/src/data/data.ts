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

export const itemsData = [
  {
    id: 1,
    name: "productName",
    label: "Product Name",
    productName: "Product Name",
    holder: "Name",
    icon: addItemIcon,
  },
  {
    id: 2,
    name: "productDesc",
    label: "Product Description",
    productName: "Product Description",
    holder: "Description",
    icon: addItemIcon,
  },
  {
    id: 3,
    name: "price",
    label: "Price",
    productName: "Price",
    holder: "$0.00",
    icon: addItemIcon,
  },
  {
    id: 4,
    name: "quantity",
    label: "Quantity",
    productName: "Quantity",
    holder: "1",
    icon: addItemIcon,
  },
  {
    id: 5,
    name: "shippingInfo",
    label: "Shipping Information",
    productName: "Shipping Information",
    holder: "Info",
    icon: addItemIcon,
  },
  {
    id: 6,
    name: "size",
    label: "Size",
    productName: "size",
    holder: "Inch",
    icon: addItemIcon,
  },
  {
    id: 7,
    name: "available",
    label: "Available Colors",
    productName: "availableColor",
    holder: "Red",
    icon: addItemIcon,
  },
  {
    id: 8,
    name: "category",
    label: "Category",
    productName: "Category",
    holder: "",
    icon: addItemIcon,
  },
  {
    id: 9,
    name: "subCat",
    label: "Sub Category",
    productName: "Sub Category",
    holder: "",
    icon: addItemIcon,
  },
  // {
  //   id: 10,
  //   name: "image",
  //   label: "",
  //   productName: "Add image",
  //   holder: "",
  //   icon: addItemIcon,
  // },
];
