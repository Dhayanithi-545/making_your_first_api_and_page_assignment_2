// Import Express and initialize the app
const express = require('express');
const app = express();

// Define the status codes and their descriptions
const statusCodes = {
    200: 'OK: The request has succeeded. The meaning of this status depends on the HTTP method used.',
    201: 'Created: The request has been fulfilled and resulted in a new resource being created.',
    204: 'No Content: The server successfully processed the request but is not returning any content.',
    400: 'Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax).',
    401: 'Unauthorized: The request requires user authentication or the provided credentials are invalid.',
    403: 'Forbidden: The server understood the request but refuses to authorize it.',
    404: 'Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource.',
    405: 'Method Not Allowed: The method specified in the request is not allowed for the resource identified by the request URI.',
    429: 'Too Many Requests: The user has sent too many requests in a given amount of time ("rate limiting").',
    500: 'Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.',
    502: 'Bad Gateway: The server, while acting as a gateway or proxy, received an invalid response from the upstream server.',
    503: 'Service Unavailable: The server is currently unable to handle the request due to temporary overloading or maintenance.',
    504: 'Gateway Timeout: The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server.',
};

// Define the /status-info endpoint
app.get('/status-info', (req, res) => {
    const code = req.query.code; // Get the code from the query parameter
    const description = statusCodes[code]; // Look up the description

    if (description) {
        // If the code is valid, return the status and message
        res.json({
            status: code,
            message: description,
        });
    } else {
        // If the code is invalid, return an error
        res.status(400).json({
            error: 'Invalid status code. Please provide a valid HTTP status code.',
        });
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Status Code API is running on http://localhost:${PORT}`);
});
