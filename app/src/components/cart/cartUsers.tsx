"use client";

import { useEffect } from "react";
import { fetchData } from "@/api";
import { useCartContext } from "@/context";
import styles from "../../styles/cartStyles/cartUser.module.css";

const CartUsers = () => {
  const { cartState, setCartState } = useCartContext();

  const getUsers = async () => {
    try {
      const { data } = await fetchData();
      setCartState(data);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h2>Get Goods added to cart here</h2>
      {cartState && (
        <div className={styles.div}>
          {cartState.map((each) => {
            const { id, username } = each;
            return <p key={id}>{username}</p>;
          })}
        </div>
      )}
    </div>
  );
};

export default CartUsers;
