import axios from 'axios';

const baseUrl = 'http://localhost:8080/api/user'; // Replace with your actual API URL
const headers = {
  'Content-Type': 'application/json',
  // Add any other headers you need
  'Cookie': 'jwt=your_jwt_token_here'
};

// Function to get all clubs
export async function getAllClubs() {
  try {
    const response = await axios.get(`${baseUrl}/get-clubs`);

    return response.data;
  } catch (error) {
    throw error; // You can handle this error in your UI code
  }
}

// Function to get a club by its ID
export async function getClubById(clubId) {
  try {
    const response = await axios.get(`${baseUrl}/clubs/${clubId}`, { headers });

    return response.data;
  } catch (error) {
    throw error; // You can handle this error in your UI code
  }
}

// Function to get all events
export async function getAllEvents() {
  try {
    const response = await axios.get(`${baseUrl}/events`, { headers });

    return response.data;
  } catch (error) {
    throw error; // You can handle this error in your UI code
  }
}

// Function to get an event by its ID
export async function getEventById(eventId) {
  try {
    const response = await axios.get(`${baseUrl}/events/${eventId}`, { headers });

    return response.data;
  } catch (error) {
    throw error; // You can handle this error in your UI code
  }
}

// Other user-related functions can be added here
