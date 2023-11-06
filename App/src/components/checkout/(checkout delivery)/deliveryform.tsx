"use client"

import React,{useState} from 'react'
import { FormData } from '@/types';
import Deliveryinformation from './deliveryinformation';
import styles from "./delivery.module.css"


  


export default function Deliveryform() {

    const [formData, setFormData] = useState<FormData>({
        // Initialize with default form data
        address: '',
        firstName:'',
        lastName:'',
        tell: "",
        email: '',
        zipCode: "",
        city:''
        // Add other fields as needed
      });
      const [formSubmitted, setFormSubmitted] = useState(false);
    
    
      const handleFormSubmit = (e : React.FormEvent) => {
        e.preventDefault();
        // Process the form data (e.g., send it to the server)
        // After successful submission, set formSubmitted to true
        setFormSubmitted(true);
      };
   
  return (
    <div>
        


        {!formSubmitted ? (
        <form onSubmit={handleFormSubmit} className={styles.deliveryinformation__container}>
            <h2>Delivery information</h2>

            <div className={styles.deliveryinformation__content}>
                <div>
                <small>First Name</small>
                <input
                 type="text" 
                 placeholder='Name' 
                 onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}

                 />
                </div>

                <div>
                <small>Last Name</small>
                <input
                 type="text" 
                 placeholder='Name' 
                 onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}

                 />
                </div>
            </div>

            <div>
                <small>Address</small>
                <input 
                type="text"
                placeholder='Address'
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
            </div>   

            <div className={styles.deliveryinformation__content}>
                    <div>
                    <small>City/Town</small>
                    <input 
                    type="text" 
                    placeholder='City' 
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}

                    />
                    </div>

                    <div>
                    <small>Zip Code</small>
                    <input
                     type="text" 
                     placeholder='Zip code'
                     onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}

                     />
                     
                    </div>
            </div>

            <div className={styles.deliveryinformation__content}>
                <div>
                <small>Mobile Number</small>
                <input
                 type="tell" 
                 placeholder='+233'
                 onChange={(e) => setFormData({ ...formData, tell: e.target.value })}

                 />
                </div>

                <div>
                <small>Email</small>
                <input 
                type="email" 
                placeholder='Email' 
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}

                />
                </div>
            </div>
            
          {/* Add more form fields as needed */}
          <button type="submit">Submit</button>
        </form>
      ) : (
        // <div>
          <Deliveryinformation formData = {formData}  setFormSubmitted = {setFormSubmitted} />
        
        // </div>
      )}
    </div>
  )
}
