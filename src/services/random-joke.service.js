import ApiRequest from '../config/axios.conf';

export default function getRandomJoke() {
  return ApiRequest.get('/jokes/random');
}
