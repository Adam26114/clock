let hr = document.getElementById("hr");
let mn = document.getElementById("mn");
let sc = document.getElementById("sc");





// console.log(hh,mm,ss);

// setInterval(handrotate,1000);

function handrotate() {

    let now = new Date();

    // let hh = now.getHours() * 30;
    // let mm = now.getMinutes() * 6;
    // let ss = now.getSeconds() * 6;
    
    // hr.style.transform =  `rotateZ(${hh+(mm/12)}deg)`;
    // mn.style.transform =  `rotateZ(${mm}deg)`;
    // sc.style.transform =  `rotateZ(${ss}deg)`;

    let hh = now.getHours() * 3600;
    let mm = now.getMinutes() * 60;
    let ss = now.getSeconds() * 1;
    let ml = now.getSeconds() / 1000 ;
 
    var gettime = hh + mm + ss + ml; 

    var hours = gettime / 60 / 12 * 6;
    var minutes = gettime / 60 * 6;
    var seconds = gettime * 6;

    hr.style.transform =  `rotate(${hours}deg)`;
    mn.style.transform =  `rotate(${minutes}deg)`;
    sc.style.transform =  `rotate(${seconds}deg)`;


    // digital clock 
    let hhh = document.getElementById("hour");
    let mmm = document.getElementById("minute");
    let sss = document.getElementById("second");
    let ampm = document.getElementById("ampm");

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    let pm = h >= 12 ? "PM" : "AM";

    h = (h > 12) ? h - 12 : h ;
    h = (h < 10) ? "0" + h : h ;
    
    m = (m < 10) ? "0" + m : m ; 
    s = (s < 10) ? "0" + s : s ;

    hhh.textContent = h;
    mmm.textContent = m;
    sss.textContent = s;

    ampm.textContent = pm;
}

handrotate();
setInterval(handrotate);

