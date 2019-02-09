import axios from 'axios';
import apiKeys from '../apiKeys';

const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const getAllSelections = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/selections.json/`)
    .then((result) => {
      const selectionObject = result.data;
      const selectionArray = [];
      if (selectionObject != null) {
        Object.keys(selectionObject).forEach((selectionId) => {
          selectionObject[selectionId].id = selectionId;
          selectionArray.push(selectionObject[selectionId]);
        });
      }
      resolve(selectionArray);
    })
    .catch((error) => {
      reject(error);
    });
});
const deleteSelection = selectionId => axios.delete(`${firebaseUrl}/selections/${selectionId}.json`);

const postRequest = newSelection => axios.post(`${firebaseUrl}/selections.json`, newSelection);

const getSingleSelection = selectionId => axios.get(`${firebaseUrl}/selections/${selectionId}.json`);

export default {
  getAllSelections,
  deleteSelection,
  postRequest,
  getSingleSelection,
};
