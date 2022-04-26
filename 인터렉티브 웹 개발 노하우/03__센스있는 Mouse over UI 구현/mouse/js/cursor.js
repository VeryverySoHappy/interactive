let btn_yes;
let btn_no;
let cursorItem;
let circle;
let x=0, y = 0;
let mx=0, my = 0;

window.onload = function(){
    btn_yes = document.querySelector("#yes");
    btn_no = document.querySelector("#no");

    cursorItem = document.querySelector(".cursorItem");
    circle = cursorItem.querySelector(".circle");    

    //네 버튼 이벤트
    btn_yes.addEventListener("mouseover", function(e){
        circle.style.transform = "scale(.3)";
        // yes버튼 위에 마우스 올려놓으면 마우스 크기가 줄어듦
    })
    btn_yes.addEventListener("mouseout", function(e){
        circle.style.transform = "scale(1)";
        // yes버튼 위에서 마우스를 때면 마우스 크기가 돌아옴
    })

    //아니오 버튼 이벤트
    btn_no.addEventListener("mouseover", function(e){
        circle.style.transform = "scale(.3)";
    })
    btn_no.addEventListener("mouseout", function(e){
        circle.style.transform = "scale(1)";
    })

    window.addEventListener("mousemove", function(e){
        x = e.clientX;
        y = e.clientY;
        cursorItem.style.transform = "translate("+ x +"px, "+ y + "px )";
        // 마우스 값에 따라와
        // cursorItem은 따라만 다니는거
        // circle은 커졌다 작아졌다 하는거
    });
    
    loop();
    // 스윽- 오게하는거
}

function loop(){
    mx += (x - mx ) * .09;
    my += (y - my ) * .09; 
    // cursorItem.style.transform = "translate("+ mx +"px, "+ my + "px )";

    requestAnimationFrame(loop);
}