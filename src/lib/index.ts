export function cipher(message: Buffer, key: Buffer) {
    if (message && key) {
        if (key.length > message.length) {
            [message, key] = [key, message];
        }
        let result = Buffer.alloc(message.length);
        for (let i = 0, j = 0, len = message.length; i < len; i++, j++) {
            result[i] = message[i] ^ key[j % key.length];
        }
        return result;
    }
}

export function calculateFrequency(string: string) {
    const charFrequency: Record<string, number> = {
        e: 0.12702,
        t: 0.09056,
        a: 0.08167,
        o: 0.07507,
        i: 0.06966,
        n: 0.06749,
        s: 0.06327,
        h: 0.06094,
        r: 0.05987,
        d: 0.04253,
        l: 0.04025,
        c: 0.02782,
        u: 0.02758,
        m: 0.02406,
        w: 0.0236,
        f: 0.02228,
        g: 0.02015,
        y: 0.01974,
        p: 0.01929,
        b: 0.01492,
        v: 0.00978,
        k: 0.00772,
        j: 0.00153,
        x: 0.0015,
        q: 0.00095,
        z: 0.00074,
        ' ': 1,
    };

    return string
        .toLowerCase()
        .split('')
        .reduce((prev, cur) => prev + (charFrequency[cur] || 0), 0);
}
