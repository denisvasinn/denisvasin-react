export default function (blockName) {
    return function (elementName = '', options = {}) {
        const optionalClasses = Object.keys(options).filter((key) => options[key]).join(' ');

        return elementName.length === 0 ?
            `${blockName} ${optionalClasses}` :
            `${blockName}__${elementName} ${optionalClasses}`;
    };
}