const API_URL = 'https://bill-keeper.herokuapp.com/api/v1'

const formFor = (fields) => {
  const formData = new FormData();
  Object.keys(fields).forEach(key => {
    formData.append(key, fields[key]);
  })
};

const create = ({
  reason,
  amount_cents,
  amount_currency,
  origin,
  done_at
}) => fetch(
  `${API_URL}/movements`,
  {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      movement: {
        reason,
        amount_cents,
        amount_currency,
        origin,
        done_at
      }
    })
  }
).then(res => {
  if (res.status === 201) return Promise.resolve({});
  return res.json();
})

export {
  create
};
