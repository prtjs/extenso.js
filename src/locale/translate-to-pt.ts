const translateToPT = (text: string): string => {
    text = text
        .replace(/\bquatorze\b/g, 'catorze')
        .replace(/\bdezesseis\b/g, 'dezasseis')
        .replace(/\bdezessete\b/g, 'dezassete')
        .replace(/\bdezenove\b/g, 'dezanove')

    return text
        .replace(/[^m]ilh(ão|ões)/g, (suffix: string): string => {
            return suffix.replace(/h/g, 'i')
        })
}

export default translateToPT