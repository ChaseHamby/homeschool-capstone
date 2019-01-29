import axios from 'axios';
import apiKeys from '../apiKeys';

const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const getAllResources = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/resources.json/`)
    .then((result) => {
      const resourceObject = result.data;
      const resourceArray = [];
      if (resourceObject != null) {
        Object.keys(resourceObject).forEach((resourceId) => {
          resourceObject[resourceId].id = resourceId;
          resourceArray.push(resourceObject[resourceId]);
        });
      }
      resolve(resourceArray);
    })
    .catch((error) => {
      reject(error);
    });
});
const deleteResource = resourceId => axios.delete(`${firebaseUrl}/resources/${resourceId}.json`);

const postRequest = newResource => axios.post(`${firebaseUrl}/resources.json`, newResource);

const getSingleResource = resourceId => axios.get(`${firebaseUrl}/resources/${resourceId}.json`);

const updateResource = (resourceId, resource) => axios.put(`${firebaseUrl}/articles/${resourceId}.json`, resource);

export default {
  getAllResources,
  deleteResource,
  postRequest,
  getSingleResource,
  updateResource,
};
