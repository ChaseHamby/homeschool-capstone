import firebase from 'firebase/app';
import 'firebase/auth';

const authenticate = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

const logoutUser = () => firebase.auth().signOut();

const getCurrentUid = () => firebase.auth().currentUser.uid;

const isAuthedUser = () => firebase.auth().currentUser;

export default {
  authenticate,
  logoutUser,
  getCurrentUid,
  isAuthedUser,
};
