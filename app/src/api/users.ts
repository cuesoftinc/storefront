import axios from "axios";

export const fetchSignUpUser = async (user: Object) => {
  try {
    console.log(user);
    const data = await axios.post(
      "http://localhost:5005/api/user/register",
      user
    );
    console.log(data);

    return data;
  } catch (error: any) {
    console.log(error);
  }
};
