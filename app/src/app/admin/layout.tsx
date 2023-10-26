import React from "react";
import SharedAdminSideBar from "@/components/admin/sharedAdminLayout/sharedAdmin";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <SharedAdminSideBar />
      {children}
    </main>
  );
};

export default AdminLayout;
