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

export default function addPurchasedItem(token, data) {

  return axiosInstance.post('/ws/purchased_item/create.php', data, {
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
