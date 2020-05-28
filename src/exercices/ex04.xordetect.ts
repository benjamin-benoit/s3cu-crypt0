import * as fs from 'fs';
import singlebytexor from './ex03.singlebytexor';
import assert from 'assert';

export default function xordetect() {
    if (fs.existsSync('src/data/h014.txt')) {
        const file = fs.readFileSync('src/data/h014.txt', 'utf8').split('\n');
        let decrypted: any[] = [],
            result;

        file.forEach((string, index) => {
            result = singlebytexor(string);

            if (result) {
                result.string = string;
                result.line = index + 1;
                decrypted.push(result);
            }
        });

        result = decrypted.reduce((x, y) => (x.score > y.score ? x : y));

        return result;
    }
}
