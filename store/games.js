import axios from 'axios';
import base64 from 'base-64';
import config from '../config';

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': 'Basic bWl0Y2hnMjM6WUtzaDNjdDZUWTdYZTJEbg==',
};

function getRecentPlatformsGames() {
  return axios.get(`${config.API_URL_RECENT}/games`, { headers })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
}

export { getRecentPlatformsGames };
