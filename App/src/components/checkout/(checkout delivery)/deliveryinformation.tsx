"use client"
import React from 'react'
import { formdetails } from '@/types';
import {BiEdit,BiMapAlt} from "react-icons/bi"
import {HiOutlineMail} from "react-icons/hi"
import {BsTelephone} from "react-icons/bs"
import styles from "./delivery.module.css"

export default function Deliveryinformation(props: formdetails) {
    const { formData , setFormSubmitted} = props;
    const handleUpdateClick = () => {
        // Handle the "Update" button click, e.g., allow the user to edit the details
        setFormSubmitted(false);
      };
  return (
    <div
    style={{
      backgroundColor:"#EBF5FB",
      padding:"30px",
      borderRadius:"10px"
  }}
    >
          <div style={{
            display:"flex",
            justifyContent:"space-between",
            width:"100%",
            margin:"0 0 20px 0"
          }}>
          <h2>Delivery Information</h2>
          <button
          style={{
            color:'#2F8AC7',
            border:"none",
            backgroundColor:"transparent",
            fontSize:"15px",
            alignItems:"center",
            display:'flex',
            gap:'5px'
          }}
           onClick={handleUpdateClick}><BiEdit/>Edit</button>
          </div>


          <div className={styles.formData__data}>
            <p><strong>{`${formData.firstName} ${formData.lastName}`}</strong></p>
            <div style={{marginTop:"15px"}} className={styles.form__info}>
            <p><span><BiMapAlt/></span> {formData.address}</p>
            <p><span><BsTelephone/></span> {formData.tell}</p>
            <p><span><HiOutlineMail/></span> {formData.email}</p>
            </div>

          </div>
        </div>
  )
}
