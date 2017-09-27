 // TODO

class Validation {
    constructor (req) {
        this.errors = [];
        this.data = req.method === 'GET' ? req.query : req.body;
        if (Object.keys(this.data).length === 0) {
            errors.push('Нечего валидировать');
        }
        Object.keys(this.data).map((field) => {
            const value = this.data[filed].trim();
            return this.replaceTag(value);
        })
    }

    replaceTag (value) {
        const tagsToReplace = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;'
        };
    
        return value.replace(/[&<>]/g, (tag) => tagsToReplace[tag] || tag);
    }

    // TODO
    // check (key) {
    //     this.isRequired = this.isRequired.bind(this, key);
    //     this.minLength = this.minLength.bind(this, key);
    //     this.pattern = this.pattern.bind(this, key);
    //     return this;
    // }

    isRequired (key, errorMessage) {
        if (!Boolean(this.data[key])) {
            this.errors.push(errorMessage || `Отсутствует обязательное поле ${key}.`);
        }
        return this;
    }

    minLength (key, length, errorMessage) {
        if (this.data[key].length < length) {
            this.errors.push(errorMessage || `Поле ${key} короче ожидаемого.`);
        }
        return this;
    }

    patern (key, pattern, errorMessage) {
        if (!Boolean(pattern.test(this.data[key]))) {
            this.errors.push(errorMessage || `Поле ${key} не совпадает с ожидаемым паттерном.`);
        }
        return this;
    }

    getResult (callback) {
        return callback(this.errors.length === 0 ? null : this.errors, data);
    }
}

module.exports = Validation;