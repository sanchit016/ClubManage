import axios from 'axios';

const baseUrl = 'http://localhost:8080/api/convenor'; 
const headers = {
    'Content-Type': 'application/json',
    'Cookie': 'jwt=your_jwt_token_here'
};
export async function createEvent(eventData) {
    try {
        const response = await axios.post(`${baseUrl}/create-event`, eventData, { headers });
        return response.data;
    } catch (error) {
        throw error; 
    }
}

export async function getDocumentListForEvent(eventId) {
    try {
        const response = await axios.get(`${baseUrl}/get-docs/${eventId}`);
        return response.data;
    } catch (error) {
        throw error; 
    }
}

export default {
    createEvent,
    getDocumentListForEvent
};