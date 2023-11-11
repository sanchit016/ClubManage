import axios from 'axios';

const baseUrl = 'http://localhost:8080/api/student'; // Replace with your actual API URL
const headers = {
    'Content-Type': 'application/json',
    // Add any other headers you need
    'Cookie': 'jwt=your_jwt_token_here'
};
// Function to handle student login
export async function loginStudent(email, password) {
  try {
    const response = await axios.post(`${baseUrl}/login`, {
      email: email,
      password: password,
    });

    // You can add more handling here, e.g., store the token in local storage

    return response.data;
  } catch (error) {
    throw error; // You can handle this error in your UI code
  }
}

// Function to raise a club join request
export async function raiseClubJoinRequest(clubId, description, branch, year, contact, name) {
    try {
      const requestData = {
        clubId: clubId,
        description: description,
        branch: branch,
        year: year,
        contact: contact,
      };
      console.log(requestData)
      const response = await axios.post(`${baseUrl}/join-request`, requestData, {withCredentials: true});
      // Handle the response data as needed
  
      return response.data;
    } catch (error) {
      throw error; // Handle the error in your UI code
    }
  }

export async function getStudentJoinRequests() {
  try {
    const response = await axios.get(`${baseUrl}/view-join-requests`, { headers });
    console.log(response)

    return response.data;
  } catch (error) {
    throw error; // You can handle this error in your UI code
  }
}