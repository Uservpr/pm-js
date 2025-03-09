const axios = require('axios');
const readline = require('readline');

// Fungsi GET
const Get = async (url, callBack) => {
    try {
        const response = await axios.get(url);
        const data = response.data;

        if (callBack) {
            callBack(data);
        }

        return data;
    } catch (error) {
        console.error('Error during GET request:', error);
        throw error;
    }
};

// Fungsi POST
const post = async (url, dataOrCallback, callback) => {
    let data;

    if (typeof dataOrCallback === 'function') {
        callback = dataOrCallback;
        data = {};
    } else {
        data = dataOrCallback;
    }

    try {
        const response = await axios.post(url, data);
        const responseData = response.data;

        if (callback) {
            callback(responseData, response);
        }

        return responseData;
    } catch (error) {
        console.error('Error during POST request:', error);
        throw error;
    }
};

// Fungsi PUT
const put = async (url, data, callBack) => {
    try {
        const response = await axios.put(url, data);
        const responseData = response.data;

        if (callBack) {
            callBack(null, responseData);
        }

        return responseData;
    } catch (error) {
        console.error('Error during PUT request:', error);
        
        if (callBack) {
            callBack(error, null);
        }

        throw error;
    }
};

// Fungsi DELETE
const del = async (url, callBack) => {
    try {
        const response = await axios.delete(url);
        const responseData = response.data;

        if (callBack) {
            callBack(null, responseData);
        }

        return responseData;
    } catch (error) {
        console.error('Error during DELETE request:', error);
        
        if (callBack) {
            callBack(error, null);
        }

        throw error;
    }
};

// Fungsi utama
async function main() {
    try {
        const todos = await Get('https://jsonplaceholder.typicode.com/todos');
        console.log(todos);
    } catch (error) {
        console.error('Error in main function:', error);
    }
}

// Menjalankan fungsi utama
main();