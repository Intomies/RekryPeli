    //TYYPIN LIIKUTUS KAUPUNGISSA JA TRIGGERI SEURAAVAAN RUUTUUN


    var loop, square, rightKey = false,
        leftKey = false,
        upKey = false,
        downKey = false,
        background = new Image(),
        x = 100,
        y = 256;

    var square;

    function init() {
        if (i == 0) {
            
            i = 3;
            
        } else {
            
            
            i = i - 1;
        }
        
        
        c = document.getElementById('peliCanvas');
        ctx = c.getContext('2d');

        square = new component(32, 32, images[i], x, y, "image");

        draw();

        document.addEventListener('keydown', keyDown, false);
        document.addEventListener('keyup', keyUp, false);
        background.src = "art/city.png";
        background.onload = function () {
            ctx.drawImage(background, 0, 0);
        }


    }



    function component(width, height, color, x, y, type) {

        //console.log("asdsa");
        this.type = type;
        if (type == "image") {
            this.image = new Image();
            this.image.src = color;
        }
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;

        this.update = function () {
            //ctx = c.getContext("2d");

            if (type == "image") {

                ctx.drawImage(this.image,
                    this.x,
                    this.y,
                    this.width, this.height);
            } else {
                ctx.fillStyle = color;
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        }
    }

    function clearRect() {
        ctx.clearRect(square.x, square.y, square.w, square.h);
    }

    function drawSquare() {
        if (rightKey) square.x += 2;
        else if (leftKey) square.x -= 2;
        if (upKey) square.y -= 2;
        else if (downKey) square.y += 2;
        ctx.drawImage(background, 0, 0);

        square.update();


        if (square.x > 210 &&
            square.x < 280 &&
            square.y > 60 &&
            square.y < 140) {

            square.x = 245;
            square.y = 380;

            background.src = "art/tyopaikka.png";
            
        } else if (square.x > 230 &&
            square.x < 290 &&
            square.y > 400 &&
            square.y < 470) {

            square.x = 600;
            square.y = 600;
            i = i + 1;
            x = 230;
            y = 180;

            background.src = "art/stats5.png";
            setTimeout(moveToCity, 5000);
            setTimeout(showJobs, 7000);
        }


    }


    function keyDown(e) {
        if (e.keyCode == 39) rightKey = true;
        else if (e.keyCode == 37) leftKey = true;
        if (e.keyCode == 38) upKey = true;
        else if (e.keyCode == 40) downKey = true;
    }

    function keyUp(e) {
        if (e.keyCode == 39) rightKey = false;
        else if (e.keyCode == 37) leftKey = false;
        if (e.keyCode == 38) upKey = false;
        else if (e.keyCode == 40) downKey = false;
    }

    function draw() {
        clearRect();
        drawSquare();

        loop = requestAnimationFrame(draw);
    }

    var hidden = false;

    function hideButtons() {
        hidden = !hidden;
        if (hidden) {
            document.getElementById('vaihda').style.visibility = 'hidden';
            document.getElementById('jatka').style.visibility = 'hidden';
        } 
    }

    function moveToCity() {
        init();
        hideButtons();
    }

    function showJobs() {
            background.src = "art/avpaikat2.png";
        setTimeout(init, 5000);
        i=i+1;
            
            
    }