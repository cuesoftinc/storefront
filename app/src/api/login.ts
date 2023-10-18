import axios from "axios";

export const fetchSigninUser = async (email:string,password:string,router:any ) => {
    console.log ('button')
  try {
    console.log(email,password);
    const response = await axios.post(
        "http://localhost:5005/api/user/login",
        {
          email,
          password,
        }
      );
     
    console.log(response);
    
    
   
    if (response.status === 200) {
localStorage.setItem('authToken', response.data.token);
  
console.log("hallo")

router.push('/');

      } else {
        alert('authentification failed')
      }
    }


   catch (error: any) {
    console.log(error);
  }
};
