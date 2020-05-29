export default function challengeAccepted(
    message: string = 'Yo Majdi ',
    key: string = 'Mhirba',
    isDecode: 0 | 1 = 0,
) {
    if (isDecode === 0) {
        const textToChars = (text: string) =>
            text.split('').map(c => c.charCodeAt(0));
        const byteHex = (n: any) => ('0' + Number(n).toString(16)).substr(-2);
        const applySaltToChar = (code: any) =>
            textToChars(key).reduce((prev: number, cur: number) => prev ^ cur, code);

        return message
            .split('')
            .map(textToChars)
            .map(applySaltToChar)
            .map(byteHex)
            .join('');
    } else {
        const textToChars = (text: string) =>
            text.split('').map(c => c.charCodeAt(0));
        const applySaltToChar = (code: any) =>
            textToChars(key).reduce((a, b) => a ^ b, code);
        return (message as any)
            .match(/.{1,2}/g)
            .map((hex: string) => parseInt(hex, 16))
            .map(applySaltToChar)
            .map((charCode: number) => String.fromCharCode(charCode))
            .join('');
    }
}
