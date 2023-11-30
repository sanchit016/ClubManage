import axios from 'axios';

const baseUrl = 'http://localhost:8080/api/user'; // Replace with your actual API URL


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
    const response = await axios.get(`${baseUrl}/get-club/${clubId}`);
    console.log(response)

    return response.data;
  } catch (error) {
    throw error; // You can handle this error in your UI code
  }
}

// Function to get a club by its ID
export async function getClubOfficials(clubId) {
  try {
    const response = await axios.get(`${baseUrl}/get-club-admins/${clubId}`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    throw error; // You can handle this error in your UI code
  }
}

// Function to get all events
export async function getAllEvents() {
  try {
    const response = await axios.get(`${baseUrl}/events`);

    return response.data;
  } catch (error) {
    throw error; // You can handle this error in your UI code
  }
}

export async function getAllEventsByClub(clubId) {
  
  try{
    const response = await axios.get(`${baseUrl}/get-events-club/${clubId}`);
    console.log(response)
    console.log(response)
    return response.data;
  } catch (error) {
    throw error; // You can handle this error in your UI code
  }
}

// Function to get an event by its ID
export async function getEventById(eventId) {
  try {
    const response = await axios.get(`${baseUrl}/get-events/${eventId}`);

    return response.data;
  } catch (error) {
    throw error; // You can handle this error in your UI code
  }
}

// Other user-related functions can be added here
