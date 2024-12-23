const pluralize = (text: string, count: number) => {
    if (count === 1) {
        return text
    }
    return `${text}s`
}

export default pluralize