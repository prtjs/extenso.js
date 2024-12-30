const female = (text: string): string => {
    return text
        .replace(/\bum\b/g, 'uma')
        .replace(/\bduas\b/g, 'duas')
}

export default female