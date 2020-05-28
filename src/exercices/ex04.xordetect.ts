import * as fs from 'fs';
import singleByteTexOr from './ex03.singlebytexor';

export default function xOrDetect(path: string = 'src/data/h014.txt') {
    if (fs.existsSync(path)) {
        const file = fs.readFileSync(path, 'utf8').split('\n');
        let decrypted: any[] = [],
            result;

        file.forEach((string, index) => {
            result = singleByteTexOr(string);

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
