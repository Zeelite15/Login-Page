var today = new Date();
var dd =  today.getDate();
var mm  = today.getMonth() + 1;
var yyyy = 2006;

if(dd < 10){
    dd = '0' + dd;
}

if(mm < 10){
    mm = '0' + mm;
}

today = yyyy + '-' + mm + '-' + dd;
document.getElementById("dob").setAttribute("max", today);
/*The maximum date format allows for the minimum user age to be
16. The yyyy variable should be updated every year as I don't know how 
to implement that feature yet*/

/*The below is an attempt to write code that compares password one and two
to see if they are the same thing and decide whether to carry on with the code ,
or stop the code*/ 
let con = document.getElementById("signup"); //The first display
let track = document.getElementById("track"); //The second display
let btn = document.getElementById("btn");//Next Button on the first display

btn.addEventListener("click", ()=>{
    let pass1 = document.getElementById("password").value;
    let pass2 = document.getElementById("password2").value;
    let empty = "";
    
    if(pass1 == empty || pass2 == empty){
        alert("Please Create a password!");
    }else if(pass1 !== pass2){
        alert("Passwords DO NOT match!")
    }else{
        track.classList.remove("track");
        track.classList.add("showTrack");
        con.classList.add("track");
    }
});

let welcomedev = document.getElementById("dev");//Button for "Development Team"
let welcomeadmin = document.getElementById("admin");//Button for the "Administrative Team"
let weldev = document.getElementById("fordev");//Display to welcome those who chose the developer track;
let weladmin = document.getElementById("foradmin");//Display to welcome those who chose the administrative track;

welcomedev.addEventListener('click', ()=>{
    track.classList.remove("showTrack");
    track.classList.add("track");
    weldev.classList.add("showTrack");
    weldev.classList.add("animation");
})

welcomeadmin.addEventListener('click', ()=>{
    track.classList.remove("showTrack");
    track.classList.add("track");
    weladmin.classList.add("showTrack");
    weladmin.classLisst.add("animation");
})
//Attempt to compare the two passwords was successful on the first try
