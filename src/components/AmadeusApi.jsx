import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AmadeusTokenComponent = () => {
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);

  // Fetch token from your backend API
  useEffect(() => {
    const getAmadeusToken = async () => {
      try {
        const response = await axios.post('http://localhost:5000/api/amadeus/token');
        setToken(response.data.access_token);
      } catch (error) {
        setError('Error fetching token');
        console.error('Error:', error);
      }
    };

    getAmadeusToken();
  }, []);

  return (
    <div>
      <h1>Amadeus API Token</h1>
      {error && <p>{error}</p>}
      {token ? (
        <div>
          <p>Token: {token}</p>
        </div>
      ) : (
        <p>Loading token...</p>
      )}
    </div>
  );
};

export default AmadeusTokenComponent;
