# extract-video-keyframe
Extracts the keyframes in videos for processing/storage elsewhere.

The `resource/sample` folder contains sample video *sample.mp4*  for keyframe extraction.

<img width="838" alt="스크린샷 2019-09-19 오후 5 59 27" src="https://user-images.githubusercontent.com/26805817/65231881-2d247d00-db0b-11e9-9150-cdb694d241f8.png">

<img width="1296" alt="스크린샷 2019-09-19 오후 7 57 56" src="https://user-images.githubusercontent.com/26805817/65238539-d5d8d980-db17-11e9-8d0e-9e87b807ddc1.png">

___

If you want real image data without header, try following:

<img width="498" alt="스크린샷 2019-09-19 오후 8 02 45" src="https://user-images.githubusercontent.com/26805817/65238998-edfd2880-db18-11e9-9cfb-132f85c7ebc3.png">

```
        /*
            Extract compressed image data
            Start of sacn (SOS) ~~~ End of image (EOI)
                 FF DA          ~~~        FF D9
        */
       let MARKER_START = "255218"; // SOS Header FF DA
       let MARKER_END = "255217"; // EOI Header FF D9

       let frameBuffer = JSON.stringify(keyframes[0].image);
       frameBuffer = frameBuffer.replace(/[^0-9]/g,"");

       var start = frameBuffer.indexOf(MARKER_START);
       console.log(start)
       var end = frameBuffer.indexOf(MARKER_END);
       console.log(end)

       compressed_image_data = frameBuffer.substring(start + 6, end);
       fs.writeFileSync("target.txt", '\ufeff' + frameBuffer.substring(start + 6, end), {encoding: 'utf8'});
```
You can get the image data in *target.txt* file

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
To install the software, you need to doownload the following:
1. Install [Node.js](https://nodejs.org/en/) on your computer.
2. Clone or download the repository to your local computer.
3. Open the terminal and install the packages: `npm install`.
4. Initialize node.js project where files are located.
```
npm init
```

### Installing

This project has the following dependencies:
```
  "dependencies": {
    "extract-keyframes": "^1.2.1"
  }
```

You can install and save dependencies:
```
npm install extract-video-keyframe --save
```


## Running the application
Run your application node app.js.
```
node index.js
```
 - The frames are extracted to the `/resource/images` folder.
 
 ```
{
    keyframeTimeOffset : <NUMBER>,
    image : <BUFFER>
}
```

```
Started
Finish: { totalFrames: 8 }
[ { keyframeTimeoffset: 0,
    image:
     <Buffer ff d8 ff e0 00 10 4a 46 49 46 00 01 02 00 00 01 00 01 00 00 ff fe 00 10 4c 61 76 63 35 38 2e 35 34 2e 31 30 30 00 ff db 00 43 00 08 04 04 04 04 04 05 ... > },
  { keyframeTimeoffset: 10.416667,
    image:
     <Buffer ff d8 ff e0 00 10 4a 46 49 46 00 01 02 00 00 01 00 01 00 00 ff fe 00 10 4c 61 76 63 35 38 2e 35 34 2e 31 30 30 00 ff db 00 43 00 08 04 04 04 04 04 05 ... > },
  { keyframeTimeoffset: 16,
    image:
     <Buffer ff d8 ff e0 00 10 4a 46 49 46 00 01 02 00 00 01 00 01 00 00 ff fe 00 10 4c 61 76 63 35 38 2e 35 34 2e 31 30 30 00 ff db 00 43 00 08 04 04 04 04 04 05 ... > },
  { keyframeTimeoffset: 26.416667,
    image:
     <Buffer ff d8 ff e0 00 10 4a 46 49 46 00 01 02 00 00 01 00 01 00 00 ff fe 00 10 4c 61 76 63 35 38 2e 35 34 2e 31 30 30 00 ff db 00 43 00 08 04 04 04 04 04 05 ... > },
  { keyframeTimeoffset: 32,
    image:
     <Buffer ff d8 ff e0 00 10 4a 46 49 46 00 01 02 00 00 01 00 01 00 00 ff fe 00 10 4c 61 76 63 35 38 2e 35 34 2e 31 30 30 00 ff db 00 43 00 08 04 04 04 04 04 05 ... > },
  { keyframeTimeoffset: 42.416667,
    image:
     <Buffer ff d8 ff e0 00 10 4a 46 49 46 00 01 02 00 00 01 00 01 00 00 ff fe 00 10 4c 61 76 63 35 38 2e 35 34 2e 31 30 30 00 ff db 00 43 00 08 04 04 04 04 04 05 ... > },
  { keyframeTimeoffset: 48,
    image:
     <Buffer ff d8 ff e0 00 10 4a 46 49 46 00 01 02 00 00 01 00 01 00 00 ff fe 00 10 4c 61 76 63 35 38 2e 35 34 2e 31 30 30 00 ff db 00 43 00 08 04 04 04 04 04 05 ... > },
  { keyframeTimeoffset: 58.416667,
    image:
     <Buffer ff d8 ff e0 00 10 4a 46 49 46 00 01 02 00 00 01 00 01 00 00 ff fe 00 10 4c 61 76 63 35 38 2e 35 34 2e 31 30 30 00 ff db 00 43 00 08 04 04 04 04 04 05 ... > } ]
```


## Built With

* [Node.js](https://nodejs.org/en/) - The JavaScript runtime used
* [extract-keyframes](https://www.npmjs.com/package/extract-keyframes) - Used to extract keyframes in video




## Authors

* **Mingu Kang** - [Github](https://github.com/minqukanq)
