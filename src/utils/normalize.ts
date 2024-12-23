const normalize = (input: string | number | bigint) => {
    if (typeof input === 'bigint') {
        input = input.toString()
    }
    if (typeof input !== 'string' && typeof input !== 'number') {
        throw new TypeError('Must be a string, number or bigint')
    }
    return input
        .toString()
        .trim()
        .replace(/\s/g, '')
}

export default normalize