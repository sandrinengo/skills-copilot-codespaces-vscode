// Create web server
// Create a route to handle the comments page
// Create a route to handle the post request
// Create a route to handle the get request
// Create a route to handle the delete request
// Create a route to handle the put request
// Create a route to handle the patch request

import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
  res.send('This is a GET request');
});

app.post('/comments', (req, res) => {
  res.send('This is a POST request');
});

app.delete('/comments', (req, res) => {
  res.send('This is a DELETE request');
});

app.put('/comments', (req, res) => {
  res.send('This is a PUT request');
});

app.patch('/comments', (req, res) => {
  res.send('This is a PATCH request');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});