const del = async (url, callBack) => {
    try {
        const response = await fetch(url, {
            method: 'DELETE',
        });

        // Memeriksa apakah respons berhasil
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json();

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

module.exports = del;