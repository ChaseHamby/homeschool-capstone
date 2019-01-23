import axios from 'axios';
import apiKeys from '../apiKeys';

const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const getAllChildren = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/child.json`)
    .then((result) => {
      const childObject = result.data;
      const childArray = [];
      if (childObject != null) {
        Object.keys(childObject).forEach((childId) => {
          childObject[childId].id = childId;
          childArray.push(childObject[childId]);
        });
      }
      resolve(childArray);
    })
    .catch((error) => {
      reject(error);
    });
});
const deleteChild = childId => axios.delete(`${firebaseUrl}/child/${childId}.json`);

const postRequest = newChild => axios.post(`${firebaseUrl}/child.json`, newChild);

const getSingleChild = childId => axios.get(`${firebaseUrl}/child/${childId}.json`);

const updateChild = (childId, child) => axios.put(`${firebaseUrl}/child/${childId}.json`, child);

export default {
  getAllChildren,
  deleteChild,
  postRequest,
  getSingleChild,
  updateChild,
};
