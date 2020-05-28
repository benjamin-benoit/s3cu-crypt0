import { cipher } from '../lib';

export default function reapeatXor(
    message: string = "Burning 'em, if you ain't quick and nimble I go crazy when I hear a cymbal",
    key = 'ICE',
) {
    return cipher(
        Buffer.from(message, 'ascii'),
        Buffer.from(key, 'ascii'),
    ).toString('hex');
}
