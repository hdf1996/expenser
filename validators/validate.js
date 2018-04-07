export default (object, validators) => {
  let errors = [];
  Object.keys(validators).forEach(field => {
    validators[field].forEach(validator => {
      errors.push(...validator(object[field]))
    })
  })

  return errors;
}
