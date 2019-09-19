const KeyFrame = require("./KeyFrame.js");
const Base64 = require('./Base64.js');
const path = require('path');
const fs = require('fs');

const Keyframe = new KeyFrame.KeyFrame();
const base64 = new Base64.Base64();

async function test() {
    try {

        // 1. Load data.
        let FILE_NAME = 'sample1.mp4';
        let FILE_PATH = path.join(__dirname, './resource/sample', FILE_NAME);

        // 2. Extract Key-frames.
        //    Do not gaurantee frame order.
        let keyframes = await Keyframe.extractKeyframes(FILE_PATH);

        // 3. Order Key-frames by keyframeTimeoffset.
        keyframes.sort((a, b) => a.keyframeTimeoffset - b.keyframeTimeoffset);
        console.log(keyframes);
        
        // 4. Make image file by Key-frame.
        keyframes.forEach(async function (e) {

            await base64.decode_base64(e.image, e.keyframeTimeoffset + '.jpg');
        });

        // 5. If you want real image data without header, try following:
        /*
            Extract compressed image data
            Start of sacn (SOS) ~~~ End of image (EOI)
                FF DA           ~~           FF D9
        */
    //    let MARKER_START = "255218"; // SOS Header FF DA
    //    let MARKER_END = "255217"; // EOI Header FF D9

    //    let frameBuffer = JSON.stringify(keyframes[0].image);
    //    frameBuffer = frameBuffer.replace(/[^0-9]/g,"");

    //    var start = frameBuffer.indexOf(MARKER_START);
    //    console.log(start)
    //    var end = frameBuffer.indexOf(MARKER_END);
    //    console.log(end)

    //    compressed_image_data = frameBuffer.substring(start + 6, end);
    //    fs.writeFileSync("target.txt", '\ufeff' + frameBuffer.substring(start + 6, end), {encoding: 'utf8'});

    } catch (error) {
        console.log(error)
    }

}

test();