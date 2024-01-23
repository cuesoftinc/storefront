import axios from "axios";

export async function addItem<T>(addProduct: T) {
  const token = localStorage.getItem("authToken");

  if (!token) {
    return { error: "Unauthorized" };
  }

  try {
    const apiResponse = await axios.post(
      "http://localhost:5005/api/admin/create",
      addProduct,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log(apiResponse);

    return {
      status: apiResponse.status,
      data: apiResponse.data,
    };
  } catch (error: any) {
    console.error("Error:", error);

    if (error.response) {
      return {
        status: error.response.status,
        data: error.response.data,
      };
    } else if (error.request) {
      return {
        status: 500,
        data: { error: "No response received" },
      };
    } else {
      return {
        status: 500,
        data: { error: "Error setting up the request" },
      };
    }
  }
}
