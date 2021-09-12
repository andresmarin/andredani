/**
 * @description Returns token for API connection
 *
 * @returns {String}
 */

import axios from 'axios';

const axiosInstance = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
});


export default function addPurchased(token, data) {
  console.log('data', data)

  return axiosInstance.post('/ws/purchased/create.php', data, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  .then((res) => {
    const data = JSON.parse(res.data.replace('PDO Object\n(\n)\nPDO Object\n(\n)\n', ''))
    return {status: data.status, pid: data.document}
  })
  .catch((error) => {
    console.error(error)
  })
}
