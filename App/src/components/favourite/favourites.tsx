import React from 'react'
import Favouritecard from './favouritecard'
import styles from './favourit.module.css'
import { OverlayProps } from '@/types'
import { FaTimes } from "react-icons/fa";


const Favourite: React.FC<OverlayProps> = ({onClose}) => {
  return (
    <div className={styles.favourite__container} onClick={onClose}>
       <div className={styles.modal}>
       <div
        style=
        {{
        width:"100%",
        display:"flex",
        gap:"64px",
        flexDirection:"column",
        justifyContent:"flex-start",
        height:"100%"
        }}>
       <div className={styles.favourite__header}>
            <h2>Favourite <span>3</span></h2>
            <button onClick={onClose}><FaTimes className={styles.btn} /></button>
        </div>
        <div>
            <Favouritecard />
        </div>
       </div>
       </div>
    </div>
  )
}

export default Favourite