const axios = require('axios');
const readline = require('readline');


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
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function main() {

  // Minta method
  const method = await askQuestion("Method [GET/POST/PUT/DEL]: ");
  // Minta url
  const url = await askQuestion("URL:  ");
    
    if (method === "GET") {
      const data = await Get(URL)
    } else if (method === "POST") {
      const data = await post(URL)
    } else if (method === "PUT") {
      const data = await put(URL)
    } else if (method === "DEL") {
      const data = await del(URL)
    }
  console.log(data)
    rl.close();
}
main()