import axios from 'axios';

const key = '19970182-43374a871d90ac8a22fd423a0';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export default function getPictures({ pageNumber, query }) {
  return axios
    .get(
      `?q=${query}&page=${pageNumber}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(resp => resp.data);
}
