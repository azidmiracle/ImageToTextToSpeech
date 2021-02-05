
var element = document.getElementById('result');

document.getElementById('cameraID').addEventListener('click',()=>takephoto())

function takephoto(){
    navigator.camera.getPicture(onSuccess, onFail, { quality: 100, correctOrientation: true });

  }


document.getElementById('browseImg').addEventListener('click',()=>browsephoto())


function browsephoto(){
           
            var srcType = Camera.PictureSourceType.SAVEDPHOTOALBUM;
            var options = setOptions(srcType);

            navigator.camera.getPicture(onSuccess, onFail, options);

            function setOptions(srcType) {
    var options = {
        // Some common settings are 20, 50, and 100
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        // In this app, dynamically set the picture source, Camera or photo gallery
        sourceType: srcType,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        allowEdit: true,
        correctOrientation: true  //Corrects Android orientation quirks
    }
    return options;
}
       
}

function setOptions(srcType) {
      var options = {
          // Some common settings are 20, 50, and 100
          quality: 50,
          destinationType: Camera.DestinationType.FILE_URI,
          // In this app, dynamically set the picture source, Camera or photo gallery
          sourceType: srcType,
          encodingType: Camera.EncodingType.JPEG,
          mediaType: Camera.MediaType.PICTURE,
          allowEdit: true,
          correctOrientation: true  //Corrects Android orientation quirks
      }
      return options;
  }

function onSuccess(imageData) {
         
      textocr.recText(0, imageData, onSuccessOCR, onFailOCR); // removed returnType (here 3) from version 2.0.0
      // for sourceType Use 0,1,2,3 or 4
      // for returnType Use 0,1,2 or 3 // 3 returns duplicates[see table]

      function onSuccessOCR(recognizedText) {
            //var allBlocks=recognizedText.blocks.blocktext;

            var allBlocks=recognizedText.lines.linetext;
           
            //convert to new line
            var allLines="";
            allBlocks.forEach(element => {
              allLines=allLines + element + "\n"

            });                                         
            element.innerHTML=allLines;
      }
      function onFailOCR(message) {
            alert('Failed because: ' + message);
      }
}
function onFail(message) {
      alert('Failed because: ' + message);
}

var  isToggle=false

document.getElementById('toSpeech').addEventListener('click',(e)=>{

      const targetLi=event.target
      
      isToggle=!isToggle

      toggle(isToggle,targetLi)

      textToSpeech(isToggle)

      
})
  
function textToSpeech(isOn){
   
  document.addEventListener('deviceready', function () {
    // basic usage
    
    var toSpeak=element.textContent;

    if(isOn==false){

      toSpeak="";

    }

    TTS.speak(toSpeak, function () {
            //alert('success');
        }, function (reason) {
            alert(reason);
        });
    
}, false);
}
