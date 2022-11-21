import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://worldcup-fifa22.azuremicroservices.io/';
const COUNTRY_FLAG_API_URL = 'https://countryflagsapi.com/png/'

class MatchService {

  getAllMatches() {
    return axios.get(API_URL + 'match', { headers: authHeader() });
  }

  getAllCurrentMatches() {
    return axios.get(API_URL + 'match/current', { headers: authHeader() });
  }

  getFlagImgByCountryName(countryName){
    return axios.get(COUNTRY_FLAG_API_URL + countryName);
  }
}

export default new MatchService();
