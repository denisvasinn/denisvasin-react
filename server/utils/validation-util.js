const errors = [];

function check (obj = {}, key = '') {
    check.this = obj;
    check.key = key;

    return check;
}

check.isRequired = (errorMessage) => {
    if (!check.this[check.key]) {
        errors.push(errorMessage || `Отсутствует обязательное поле ${check.key}.`);
    }
    return check;
};

check.minLength = (length, errorMessage) => {
    if (!check.this[check.key] || check.this[check.key].length < length) {
        errors.push(errorMessage || `Поле ${check.key} короче ожидаемого.`);
    }
    return check;
};

check.pattern = (pattern, errorMessage) => {
    if (!check.this[check.key] || !pattern.test(check.this[check.key])) {
        errors.push(errorMessage || `Поле ${check.key} не совпадает с ожидаемым паттерном.`);
    }
    return check;
};

check.getErrors = () => errors;

module.exports = check;