// Import the required modules
const express = require('express')
const path = require('path')

// Initialize the Express app
const app = express()

// Define a port
const PORT = 80

// Serve static files (e.g., CSS, JS) from the 'public' directory
// eslint-disable-next-line no-undef
app.use(express.static(path.join(__dirname, 'public')))

// Define a route to serve the main HTML page
app.get('/', (req, res) => {
    let content = req.query.content || 'Hello World!'

    let contentHtml = generateHTML(content)
    res.send(contentHtml)
})

function generateHTML(content) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Hello World</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    margin-top: 20%;
                }
                h1 {
                    color: #4CAF50;
                }
            </style>
        </head>
        <body>
            <h1>${content}</h1>
        </body>
        </html>
    `
}

module.exports.generateHTML = generateHTML

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
