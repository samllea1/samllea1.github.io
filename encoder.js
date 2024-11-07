/**
 *
 * @param {string} str
 * @returns {string}
 */
function encode(str) {
    const compressed = LZString.compress(str);
    return compressed;
}

/**
 *
 * @param {string} str
 * @returns {string}
 */
function decode(str) {
    const decompressed = LZString.decompress(str);
    return decompressed;
}
