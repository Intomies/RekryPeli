//SETUPPI SIVULLE
var i = 1, c, ctx, tyhjaKuva,  images = ["art/dwarf128.png", "art/orkki128.png", "art/mustekala128.png", "art/human128.png"], imgObj;
function setup() {
    c = document.getElementById("peliCanvas");
    ctx = c.getContext("2d");
    var background = new Image();
    background.src = "art/pelicanv_tausta.png";
    background.onload =
        function() {
        ctx.drawImage(background, 0, 0);
        
            imgObj = new Image();
            imgObj.src = images[images.length - 1];
            imgObj.onload = function() {
            ctx.drawImage(imgObj, 200, 150);
            }
        }
}

// TYYPIN VAIHTO

    

    function changeObject() {
        c = document.getElementById("peliCanvas");
        ctx = c.getContext("2d");
        
    //clear canvas
        ctx.clearRect(0, 0, c.width, c.height);
 
    //ladataan tausta aina uudestaan    
        
    var background = new Image();
    background.src = "art/pelicanv_tausta.png";
    background.onload = function() {
        ctx.drawImage(background, 0, 0);
    }
        
    //vaihdetaan kuvia images-arraysta
        //var imgPath = images[i];
        //imgObj = new Image();
        imgObj.src = images[i];
        imgObj.onload = function() {
            ctx.drawImage(imgObj, 200, 150);
            console.log(i);
            
        }
        
        
        
        if(i < images.length -1) {
            i++;
        } else {
            i = 0;
        }
    }

 