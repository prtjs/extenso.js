const toPortugal = (text: string): string => {
    text = text
        .replace(/\bquatorze\b/g, 'catorze')
        .replace(/\bdezesseis\b/g, 'dezasseis')
        .replace(/\bdezessete\b/g, 'dezassete')
        .replace(/\bdezenove\b/g, 'dezanove')

    return text
}

export default toPortugal