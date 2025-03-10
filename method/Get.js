const Get = async (url, callBack) => {
    try {
        const response = await fetch(url);

        // Memeriksa apakah respons berhasil
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (callBack) {
            callBack(data);
        }

        return data;
    } catch (error) {
        console.error('Error during GET request:', error);
        throw error;
    }
};

module.exports = Get;