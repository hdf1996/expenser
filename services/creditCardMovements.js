import queryString from 'query-string'
const API_URL = 'https://bill-keeper.herokuapp.com/api/v1'

const index = ({
  page
}) => fetch(`${API_URL}/credit_card_movements?${queryString.stringify({page})}`).then(res => res.json())

export {
  index
};
