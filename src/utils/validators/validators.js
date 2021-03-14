export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)

export const required = (value) => {
  return value ? undefined : 'Поле обязательно для заполнения!';
}

export const maxlenghtCreator = (maxValue) => {
  return (value) => value.length > maxValue ?`Превышено максимальное количество символов (${maxValue})` : undefined;
}
