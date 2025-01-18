// index.js
const axios = require('axios');

// Inisialisasi baseUrl
const baseUrl = 'http://localhost:3000/api/questions'; // Ganti dengan URL API yang sesuai

// Fungsi GET
const Get = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error during GET request:', error);
        throw error;
    }
};

// Fungsi POST
const post = async (url, data) => {
    try {
        const response = await axios.post(url, data);
        return response.data;
    } catch (error) {
        console.error('Error during POST request:', error);
        throw error;
    }
};

// Fungsi PUT
const put = async (url, data) => {
    try {
        const response = await axios.put(url, data);
        return response.data;
    } catch (error) {
        console.error('Error during PUT request:', error);
        throw error;
    }
};

// Fungsi DELETE
const del = async (url) => {
    try {
        const response = await axios.delete(url);
        return response.data;
    } catch (error) {
        console.error('Error during DELETE request:', error);
        throw error;
    }
};

async function main() {
  const data = await Get(baseUrl)
  console.log(data)
}
main()