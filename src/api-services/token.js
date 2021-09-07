/**
 * @description Returns token for API connection
 *
 * @returns {String}
 */

import axios from 'axios';


export default function getToken() {

  const axiosInstance = axios.create({
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  });

  const user = { username: 'andresmarin@hotmail.com', password: '12345' };
   return axiosInstance.post("/ws/token/generate.php", user)
    .then((result) => {

      const data = JSON.parse( result.data.replace('PDO Object\n(\n)\n', ''))

      return data?.document?.access_token
    })
    .catch(error => {
      console.error("There was an error!", error);
      return error;
    });
}
