// import renderApi from '@api/render-api';
const express = require('express');
const renderApi = require('@api/render-api');

const app = express();
const port = 3000; // Define the port you want the server to listen on

// Define a GET endpoint
app.get('/', (req, res) => {

  renderApi.auth('rnd_EJcN9INZoep1UQ0xEBTIXYPE99fq ');
  renderApi.listServices({limit: '20'})
    .then(({ data }) => res.send(data))
    .catch(err =>{
       console.error(err)
       res.send(err)
    }  );
 
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});