const split = (input: string): string[] => {
    return input.match(/\d{1,3}(?=(\d{3})*$)/g) ?? []
}

export default split