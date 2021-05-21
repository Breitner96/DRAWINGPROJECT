$(document).ready(function()
 {

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    var bt=document.getElementById("enviar");

    var choose=document.getElementsByName('tecla')[0];

    var colors=document.getElementsByName('colorsecundario')[0];

    var borrar=document.getElementById("borrar");
    
    choose.addEventListener('change',elegir);
    
    colors.addEventListener('change',mostrar);

    borrar.addEventListener('click',borrador);

    var sele='';
    var pixel=10;

    var drawenable=false;
    var drawenable1=false;

    var position1=canvas.width/2;
    var position2=canvas.height/2;
    var position3=0;
    var position4=0;

    let i =0;

    function elegir(){

        sele=this.value;
        // mostrar();
        dibujar(sele);


    }

    function mostrar(){

        // console.log(sele)
        console.log(this.value);

        moveline(position1,position2.position3,position3,position4,this.value);

    }

    function borrador(){
    i++;

    if(i==1){

        console.log("dando click en borrador")
        borrar.style.backgroundColor='#D4EFDF';


        document.addEventListener('mouseup',testmouse1);

        canvas.addEventListener('mousedown',testmouse1);

        canvas.addEventListener('mousemove',borrardibujo);

        
    
    }

    else if(i>1){
        borrar.style.backgroundColor='#E5E8E8';
        i=0;

        document.removeEventListener('mouseup',testmouse1);

        canvas.removeEventListener('mousedown',testmouse1);
        canvas.removeEventListener('mousemove',borrardibujo);
    

    }

    


    }


function dibujar(sele){

    if(sele=='Alzada'){

        
        

        document.addEventListener('mouseup',testmouse);

        canvas.addEventListener('mousedown',testmouse);
        canvas.addEventListener('mousemove',dibujarmouse);
    

        console.log("ingreso a alzado");
        
        bt.addEventListener("click",borrarenvento);

    }

    else if (sele=='Teclado'){

        console.log('ingreso a teclado')

        // console.log('removiendo listener');

        window.addEventListener("keydown",teclado);



        bt.addEventListener("click",borrarenvento);
    
    }
    
    


}


function testmouse(evento){

    if(evento.type=="mousedown"){

        drawenable=true;
    }

    else if(evento.type=="mouseup"){

        drawenable=false;
    }

}

function testmouse1(evento){

    if(evento.type=="mousedown"){

        drawenable1=true;
    }

    else if(evento.type=="mouseup"){

        drawenable1=false;
    }

}


function borrardibujo(evento){

    if(drawenable1){

        ctx.clearRect(evento.offsetX -0.1, evento.offsetY -0.1, evento.offsetX +0.1, evento.offsetY +0.1);

    }

}

function dibujarmouse(evento){

    if(drawenable){

        moveline(evento.offsetX -1 , evento.offsetY -1,evento.offsetX +1,evento.offsetY +1);
        console.log(evento.offsetX-1);

    }

}


function teclado(event){

    console.log(event.code);


    if (event.code=="ArrowUp"){

        console.log('arriba');

        position3=position1;
        position4=position2-pixel;

        moveline(position1,position2,position3,position4);

        position1=position3;
        position2=position4;


    }

    else if (event.code=="ArrowLeft"){

        console.log('izquierda');

        position3=position1-pixel;
        position4=position2;

        moveline(position1,position2,position3,position4);

        position1=position3;
        position2=position4;
        
    }

    else if (event.code=="ArrowRight"){

        console.log('derecha');

        position3=position1+pixel;
        position4=position2;

        moveline(position1,position2,position3,position4);

        position1=position3;
        position2=position4;
        
    }

    else if (event.code=="ArrowDown"){

        console.log('abajo');

        position3=position1;
        position4=position2+pixel;

        moveline(position1,position2,position3,position4);

        position1=position3;
        position2=position4;

    }

    if(position1>=canvas.width){

        position1=canvas.width;
    }


    else if(position1<=0){

        position1=0;
    }

    if(position2>=canvas.width){

        position2=canvas.width;
    }


    else if(position2<=0){

        position2=0;
    }


    if(position3>=canvas.width){

        position3=canvas.width;
    }


    else if(position3<=0){

        position3=0;
    }

    if(position4>=canvas.width){

        position4=canvas.width;
    }


    else if(position4<=0){

        position4=0;
    }


    console.log(position1);
    console.log(position2);
    console.log(position3);
    console.log(position4);


}

function borrarenvento(){




    console.log("evento boton")
    document.removeEventListener('mouseup',testmouse);

    canvas.removeEventListener('mousedown',testmouse);
    canvas.removeEventListener('mousemove',dibujarmouse);

    window.removeEventListener("keydown",teclado);

    bt.removeEventListener("click",borrarenvento);

}


function moveline(position1,position2,position3,position4,colors){


    ctx.beginPath();
    ctx.moveTo(position1, position2);
    ctx.lineTo(position3, position4);
    ctx.strokeStyle=colors;
    ctx.lineWidth=5;
    ctx.stroke();
    ctx.closePath();

}

    

 });





