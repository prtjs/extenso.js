declare module 'extenso' {
  /**
   * Convert number to a extenze format
   * @param number the number to convert in extenze text
   * @param options setup writing configuration
   */
  export default function (
    number: string | number,
    options?: {
      mode?: 'number' | 'currency'
      locale?: 'pt' | 'br'
      negative?: 'formal' | 'informal'
      currency?: { type?: 'BRL' | 'EUR' | 'CVE' | 'MZN' | string }
      number?: {
        gender?: 'm' | 'f'
        decimal?: 'formal' | 'informal'
        decimalSeparator?: 'comma' | 'dot'
      }
    }
  ): string
}