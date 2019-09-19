const path = require('path');
const fs = require('fs');

class Base64 {

    constructor() { }

    /**
     * @param  {string} filename
    */
    async encode_base64(filename) {
        fs.readFile(path.join(__dirname, '/public/', filename), function(error, data) {
        if (error) {
            throw error;
        } else {
            let buf = Buffer.from(data);
            let base64 = buf.toString('base64');
            // console.log('Base64 ' + filename + ': ' + base64);
            return base64;
        }
        });
    }

    /**
     * @param  {string} base64str
     * @param  {string} filename
     */
    async decode_base64(base64str, filename) {
        let buf = Buffer.from(base64str, 'base64');
    
        fs.writeFile(path.join(__dirname, '/resource/images', filename), buf, function(error) {
        if (error) {
            throw error;
        } else {
            console.log('File created from base64 string!');
            return true;
        }
        });
    }

}

module.exports.Base64 = Base64;

