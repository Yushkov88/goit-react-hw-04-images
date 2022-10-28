import PropTypes from 'prop-types';
import axios from 'axios';

export default function fetchImagesWithQuery(searchQuery, page) {
  const response = axios.get(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=29755984-d1bcd819685560c7147c3f937&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response;
}

fetchImagesWithQuery.PropTypes = {
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
