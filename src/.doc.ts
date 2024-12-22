let writer

switch (mode) {
case 'currency':
    writer = new CurrencyWriter(number, decimalSeparator)
    writer.setCode(code)
    break

case 'number':
    writer = new NumberWriter(number, decimalSeparator)
    writer.setGender(gender)
    writer.setDecimal(decimal)
    writer.setNegative(decimal)
    break
}

writer.setLocale(locale)
writer.setScale(scale)

writer.write()

//////////////////////////////////////////////////////////////////////

class Writer() {
    setDecimalSeparator() {}
    setLocale() {}
    setScale() {}
    write() {}
}

class CurrencyWriter extends Writer {
    setISOCode() {}
    write() {}
}

class NumberWriter extends Writer {
    setGender() {}
    setDecimal() {}
    setNegative() {}
    write() {}
}
