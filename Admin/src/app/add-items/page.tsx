import React from "react";
import AddItems from "@/components/addNewItems/addItemsrafce";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Add New Items",
};

const NewItems = () => {
  return <AddItems />;
};

export default NewItems;
