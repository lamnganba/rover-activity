canvas= document.getElementById('mycanvas');
ctx = canvas.getContext ("2d");
nasa_mars_images_array = ["nasa_image_1.jpg","nasa_image_2.jpeg","nasa_image_3.jpg",]

random_number = math.floor(math.random() * 4);
console.log(random.number);
rover_widh = 100;
rover_height = 90;

background_image = nasa_mars_image_array[random.number];
console.log("background_image=" +mbackground_image);
rover_image ="rover.png";

rover_x = 10;
rover_y = 10;

function add() {
    background_imgtag = new Image(); //defining a new variable with a new image
    background_imgtag.onload = uploadbackground; // setting a function ,onloading this variable 
    background_imgtag.src= rover_image; //load image

rover_imgtag = new Image();// defining a variable with a new image
rover_imgtag.onload = uploader;// setting a function,onloading this variable
rover_imgtag.src = rover_image;// load image

}

function upload background () {
    ctx.drawimage(background_imgtag,0,0,canvas.Width, canvas.height);
}

function upload rover() {
    ctx.drawimage(rover_imgtag, rover_X, rover_y , rover_width,rover_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    key pressed=e.keycode;
    console.log(keypressed);
    if(keypressed=='38')
    {
        up();
        console.log("up");
    }
    if(keypressed=='40');
    {
        down();
        console.log('down');
    }
    if (keypressed=='37');
    {
        Left();
        console.log('left');
    }
    if (keypressed=='39');
    {
        right();
        console.log('right');
    }
}
function up()
{ 
    if (rover_y >=0)
    {
        rover_y = rover_y -10;
        console.log("when up arrow is pressed, x ="+ rover_x+"|y="+rover_y );
        upload background();
        uploadrover();

    }
}
function down ()
{ 
    if (rover_y <=500)
    {
        rover_y = rover_y +10;
        console.log("when down arrow is pressed, x ="+ rover_x+"|y="+rover_y );
        upload background();
        uploadrover();

    }
}
function left ()
{ 
    if (rover_x >=0)
    {
        rover_x = rover_x -10;
        console.log("when left arrow is pressed, x ="+ rover_x+"|y="+rover_y );
        upload background();
        uploadrover();  
    
    }
}
function right ()
{ 
    if (rover_x <=700)
    {
        rover_x = rover_x +10;
        console.log("when right arrow is pressed, x ="+ rover_x+"|y="+rover_y );
        upload background();
        uploadrover();     