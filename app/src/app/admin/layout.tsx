import React from "react";
import SharedAdminSideBar from "@/components/admin/sharedAdminLayout/sharedAdmin";
import styles from "./admin.module.css";
import Logo from "@/components/general/logo/logo";
import InputBox from "@/components/general/input/input";
import AdminHeader from "@/components/admin/adminHeader/adminHeader";

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
