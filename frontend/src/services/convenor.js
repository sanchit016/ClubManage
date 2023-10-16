import axios from 'axios';

const baseUrl = 'http://localhost:8080/api/convenor'; // Replace with your actual API URL
const headers = {
    'Content-Type': 'application/json',
    // Add any other headers you need
    'Cookie': 'jwt=your_jwt_token_here'
};
// Function to create a new event
export async function createEvent(eventData) {
    try {
        const response = await axios.post(`${baseUrl}/create-event`, eventData, { headers });
        // Handle the response data as needed
        return response.data;
    } catch (error) {
        throw error; // Handle the error in your UI code
    }
}

// Add more functions related to convenors if needed

export default {
    createEvent,
    // Add more functions here if needed
};