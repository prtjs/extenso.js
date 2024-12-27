const split = (input: string): number[] => {
    return (input.match(/\d{1,3}(?=(\d{3})*$)/g) ?? []).map(Number)
}

export default split