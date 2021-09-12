/**
 * @description Returns token for API connection
 *
 * @returns {String}
 */

import axios from 'axios';


export default function fetchPurchased(token, pageno, pagesize) {
  const axiosInstance = axios.create({
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  });

  return axiosInstance.get(`/ws/purchased/read.php?pageno=${pageno}&pagesize=${pagesize}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
    .then((res) => {
      const data = JSON.parse(res.data.replace('PDO Object\n(\n)\nPDO Object\n(\n)\n', ''))
      return data.document
    })
    .catch((error) => {
      console.error(error)
    })
}
