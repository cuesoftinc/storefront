import React from "react";
import { Metadata } from "next/types";
import CreateCategory from "@/components/createCategory/createCategoryrafce";

export const metadata: Metadata = {
  title: "Add New Items",
};

const NewCategory = () => {
  return <CreateCategory />;
};

export default NewCategory;
