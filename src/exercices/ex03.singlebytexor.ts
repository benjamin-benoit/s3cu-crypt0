import { calculateFrequency, cipher } from '../lib';

export default function singleByteTexOr(
    str: string = '1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736',
) {
    let message, tempBuffer;
    let results = [];

    for (let key = 0, len = 256; key < len; key++) {
        tempBuffer = cipher(
            Buffer.from(str, 'hex'),
            Buffer.from(String.fromCharCode(key)),
        );

        message = tempBuffer.toString();

        if (!/[^\x00-\x7E]/g.test(message)) {
            results.push({
                key: key,
                msg: message,
                score: parseFloat(calculateFrequency(message).toFixed(6)),
            });
        }
    }

    return results.reduce(
        (prev: any, cur) => (!(prev && prev.score > cur.score) ? cur : prev),
        0,
    );
}
