import queryString from 'query-string';
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
const { API_URL } = publicRuntimeConfig;


const formFor = (fields) => {
  const formData = new FormData();
  Object.keys(fields).forEach(key => {
    formData.append(key, fields[key]);
  })
};

const create = ({
  reason,
  value,
  value_currency,
}) => fetch(
  `${API_URL}/api/v2/recurrent_payments`,
  {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      recurrent_payment: {
        reason,
        value_currency,
        value_cents: value * 100,
      }
    })
  }
).then(res => {
  if (res.status === 201) return Promise.resolve({});
  return res.json();
})


const index = ({
  page
}) => fetch(`${API_URL}/api/v2/recurrent_payments?${queryString.stringify({page})}`).then(res => res.json())

export {
  create,
  index
};
