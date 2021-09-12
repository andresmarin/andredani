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

export default function updateItem(token, data) {
  return axiosInstance.post('/ws/item/updatequantity.php', data, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  .then((res) => {
    const data = JSON.parse(res.data.replace('PDO Object\n(\n)\nPDO Object\n(\n)\n', ''))
    return {status: data.status}
  })
  .catch((error) => {
    console.error(error)
  })
}
