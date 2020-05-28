import { cipher } from '../lib';

export default function reapeatXor(
    str: string = "Burning 'em, if you ain't quick and nimble I go crazy when I hear a cymbal",
    key = 'ICE',
) {
    return cipher(
        Buffer.from(str, 'ascii'),
        Buffer.from(key, 'ascii'),
    ).toString('hex');
}
