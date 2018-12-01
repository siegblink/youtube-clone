import axios from 'axios';

const KEY = 'AIzaSyA2yIXXJvG13GJ4oHv9ixJykS-6pMXHJbM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
