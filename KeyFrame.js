const extractKeyframes = require('extract-keyframes');

class KeyFrame {

    constructor(){
        this.keyFrames = [];
    }

    /**
     * @param  {string} videoFile
    */
    async extractKeyframes(videoFile){
        return new Promise((resolve, reject)=>{
            let self = this;

            extractKeyframes(videoFile)
                .then(extractionProcess => {
            
                    // Event fired when extraction process has begun.
                    extractionProcess.on('start', function(){
                        // debug('Started');
                        console.log("Started");
                    }, false);
            
                    // Event fired when a keyframe is extracted
                    extractionProcess.on('keyframe', function(data){
                        // debug('KEYFRAME:', data);
                        self.keyFrames.push(data);
                        
                    });
            
                    // Event fired when all keyframes have been extracted from the video
                    extractionProcess.on('finish', function(data){
                        // debug('Finish:', data);
                        console.log('Finish:', data);
                        resolve(self.keyFrames);
                        // console.log(tmp);
                    });
                })
                .catch(err => {
                    // debug('Error extracting keyframes:', err);
                    reject(err);
                })
            ;
        })
    }
    

}

module.exports.KeyFrame = KeyFrame;