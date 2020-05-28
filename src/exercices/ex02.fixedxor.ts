export default function fixedxor(
    str: string = '1c0111001f010100061a024b53535009181c',
    str2 = '686974207468652062756c6c277320657965',
) {
    let result = '';
    if (str.length === str2.length) {
        for (let index = 0; index < str.length; index++) {
            const temp = (
                parseInt(str.charAt(index), 16) ^
                parseInt(str2.charAt(index), 16)
            ).toString(16);
            result += temp;
        }
    } else {
        result = 'Error 🥶 arguments length not same ';
    }
    return result;
}
