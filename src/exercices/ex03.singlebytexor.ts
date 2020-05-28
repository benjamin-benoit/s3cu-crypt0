import { calculateFrequency, cipher } from '../lib';

export default function singleByteTexOr(
    str: string = '1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736',
) {
    let plainText, tempBuffer;
    let results = [];

    for (let keyChar = 0, len = 256; keyChar < len; keyChar++) {
        tempBuffer = cipher(
            Buffer.from(str, 'hex'),
            Buffer.from(String.fromCharCode(keyChar)),
        );

        plainText = tempBuffer.toString();

        if (!/[^\x00-\x7E]/g.test(plainText))
            results.push({
                key: keyChar,
                msg: plainText,
                score: parseFloat(calculateFrequency(plainText).toFixed(6)),
            });
    }

    return results.reduce(
        (prev: any, cur) => (!(prev && prev.score > cur.score) ? cur : prev),
        0,
    );
}
