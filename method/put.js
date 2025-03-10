const put = async (url, data, callBack) => {
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
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
        console.error('Error during PUT request:', error);
        
        if (callBack) {
            callBack(error, null);
        }

        throw error;
    }
};

module.exports = put;