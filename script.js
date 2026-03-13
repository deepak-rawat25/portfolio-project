// typing animation

const text=["Web Developer","JavaScript Learner",]

let i=0
let j=0
let current=""
let letter=""

function type(){

if(i<text.length){

if(j<=text[i].length){

letter=text[i].slice(0,j++)
document.querySelector(".typing").textContent=letter

}

else{

j=0
i++

}

}

setTimeout(type,120)

}

type()


particlesJS("particles-js",{

particles:{

number:{
value:60,
density:{
enable:true,
value_area:900
}
},

color:{
value:"#38bdf8"
},

shape:{
type:"circle"
},

opacity:{
value:0.4,
random:true
},

size:{
value:4,
random:true
},

line_linked:{
enable:true,
distance:170,
color:"#38bdf8",
opacity:0.25,
width:1
},

move:{
enable:true,
speed:1.5,
direction:"none",
random:false,
straight:false,
out_mode:"out",
bounce:false
}

},

interactivity:{

detect_on:"canvas",

events:{

onhover:{
enable:true,
mode:"grab"
},

onclick:{
enable:true,
mode:"push"
},

resize:true

},

modes:{

grab:{
distance:180,
line_linked:{
opacity:0.6
}
},

push:{
particles_nb:3
}

}

},

retina_detect:true

})