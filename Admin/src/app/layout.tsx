import React from "react";
import "../styles/globals.css";
import styles from "./admin.module.css";
import AdminHeader from "@/components/sharedLayouts/adminHeader/adminHeaderrafce";
import SharedAdminSideBar from "@/components/sharedLayouts/adminSidebar/adminSideBarrafce";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className={styles.admin__header}>
        <AdminHeader />
      </header>
      <main className={styles.admin__page}>
        <SharedAdminSideBar />
        <section className={styles.children__styles}>{children}</section>
      </main>
    </>
  );
};

export default AdminLayout;
