let container =document.getElementById("container");
let g =document.getElementById("g")
let d =document.getElementById("d");
let p=0;
let nbr= 5;
function afficherMasquer(){
    if(p ===-nbr+1)
        d.style.visibility="hidden";
    else
        d.style.visibility="visible";
    if(p===0)
        g.style.visibility="hidden";
    else
        g.style.visibility="visible";
}

document.body.onload =function (){


    d.onclick =function (){
        if (p>-nbr+1 )
            p--;
        container.style.transform="translate("+p*100+"vw)";
        container.style.transition ="all 0.5s ease"
        afficherMasquer()
    }

    g.onclick =function (){
        if (p<0 )
            p++;
        container.style.transform="translate("+p*100+"vw)";
        container.style.transition ="all 0.5s ease"
        afficherMasquer()
    }
}

// setInterval(Slider,100000)
// function Slider(){
//     if(p === -nbr+1)
//         p = 1
//     p--;
//     container.style.transform="translate("+p*100+"vw)";
//     container.style.transition ="all 0.5s ease"
//     console.log(p)
// }


