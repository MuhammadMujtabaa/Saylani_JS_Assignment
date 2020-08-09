var mnt = 0;
var sc = 0;
var ms = 0;

var mint = document.getElementById('mint');
var seco = document.getElementById('seco'); 
var milli = document.getElementById('milli');

var interval ;

var  btnstart = document.getElementById('start');
var  btnstop = document.getElementById('stop');
var  btnreset =document.getElementById('reset');



interval =  setInterval(()=>{
    
},10);

    var timer = ()=>{
        ms ++;
        milli.innerHTML = ms;

    if(ms >= 100){
        sc++;
        
            seco.innerHTML =  sc  ;
        
        
        ms = 0;
        if(sc >= 60){
            mnt++ ; 
            mint.innerHTML = mnt ;
            sc = 0; 
        }
    }
}
    

var start  =  ()=>{
    interval =  setInterval(timer,10);
    btnstart.style.display = "none";
    btnstop.style.display = "inline-block";
   
}

var stop = () =>{
     clearInterval(interval);
    
    btnstart.style.display = "inline-block";
    btnstop.style.display = "none";
}

var rest = ()=>{
    mint .innerHTML = '00';
    seco . innerHTML = '00';
    milli .innerHTML = '00';
    stop();
}


