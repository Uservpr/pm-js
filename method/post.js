const post = async (url, dataOrCallback, callback) => {
    let data;

    if (typeof dataOrCallback === 'function') {
        callback = dataOrCallback;
        data = {};
    } else {
        data = dataOrCallback;
    }

    try {
        const response = await fetch(url, {
            method: 'POST',
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

        if (callback) {
            callback(responseData, response);
        }

        return responseData;
    } catch (error) {
        console.error('Error during POST request:', error);
        throw error;
    }
};

module.exports = post;