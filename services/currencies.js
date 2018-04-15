import queryString from 'query-string'
const API_URL = 'https://bill-keeper.herokuapp.com/api/v1'

const formFor = (fields) => {
  const formData = new FormData();
  Object.keys(fields).forEach(key => {
    formData.append(key, fields[key]);
  })
};

const conversions = ({
  to
}) => fetch(`${API_URL}/currencies/conversions?${queryString.stringify({to})}`).then(res => res.json())

export {
  conversions
};
