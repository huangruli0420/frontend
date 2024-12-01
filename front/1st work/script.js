const headerText = document.querySelector(".headerText")
const headerButtons = document.querySelectorAll("input[name=headerText]")
const mainArea = document.querySelector(".mainArea");
const mainContent = document.querySelectorAll(".mainContent")
const checkbox = document.querySelector("#checkbox")

//header換頁
headerText.addEventListener("change",
    function(event){
        if(event.target.matches("input[type='radio']")){
            for(let i=0; i<headerButtons.length; i++){
                if(headerButtons[i].checked){
                    mainContent[i].style.right = "0";
                    checkbox.checked = false; //RWD
                }
                else{
                    mainContent[i].style.right = "100%";
                }
            }
        }
    }
);

const charaIconList = document.querySelector(".charaIconList")
const shiroko = document.querySelector("#shiroko")
const hifumi = document.querySelector("#hifumi")
const hina = document.querySelector("#hina")
const aris = document.querySelector("#aris")
const yukari = document.querySelector("#yukari")

//chara換頁
charaIconList.addEventListener("click",
    function(event){
        console.log(event.target.id);
        switch(event.target.id){
            case "shirokoIcon":
                shiroko.classList.add("charaShow");
                hina.classList.remove("charaShow");
                hifumi.classList.remove("charaShow");
                aris.classList.remove("charaShow");
                yukari.classList.remove("charaShow");
                break;
            case "hinaIcon":
                hina.classList.add("charaShow");
                shiroko.classList.remove("charaShow");
                hifumi.classList.remove("charaShow");
                aris.classList.remove("charaShow");
                yukari.classList.remove("charaShow");
                break;
            case "hifumiIcon":
                hifumi.classList.add("charaShow");
                shiroko.classList.remove("charaShow");
                hina.classList.remove("charaShow");
                aris.classList.remove("charaShow");
                yukari.classList.remove("charaShow");
                break;
            case "arisIcon":
                aris.classList.add("charaShow");
                shiroko.classList.remove("charaShow");
                hina.classList.remove("charaShow");
                hifumi.classList.remove("charaShow");
                yukari.classList.remove("charaShow");
                break;
            case "yukariIcon":
                yukari.classList.add("charaShow");
                shiroko.classList.remove("charaShow");
                hina.classList.remove("charaShow");
                hifumi.classList.remove("charaShow");
                aris.classList.remove("charaShow");
                break;
        }
    }
)

//pixel轉為dvh
function pxToDvh(pixelElement){
    return (pixelElement / window.innerHeight) * 100;
}

const storyChild = document.querySelectorAll(".storyChild")
// const vol1Height = storyChild[0].getBoundingClientRect();
var vol2Height = pxToDvh(storyChild[1].getBoundingClientRect().top);
var vol3Height = pxToDvh(storyChild[2].getBoundingClientRect().top);
var vol4Height = pxToDvh(storyChild[3].getBoundingClientRect().top);
var volfHeight = pxToDvh(storyChild[4].getBoundingClientRect().top);
var vol5Height = pxToDvh(storyChild[5].getBoundingClientRect().top);

//STORY摺疊效果
mainContent[2].addEventListener("wheel",
    function(event){

        vol2Height = pxToDvh(storyChild[1].getBoundingClientRect().top);
        vol3Height = pxToDvh(storyChild[2].getBoundingClientRect().top);
        vol4Height = pxToDvh(storyChild[3].getBoundingClientRect().top);
        volfHeight = pxToDvh(storyChild[4].getBoundingClientRect().top);
        vol5Height = pxToDvh(storyChild[5].getBoundingClientRect().top);

        //vol2摺疊且滾輪向下
        if(vol2Height > 50 && event.deltaY > 0){
            storyChild[1].style.top = "30px";
            storyChild[2].style.top = "calc(100% - 30px)";
            // setTimeout(function(){//延遲獲取位置資訊
            //     vol2Height = pxToDvh(storyChild[1].getBoundingClientRect().top);
            //     vol3Height = pxToDvh(storyChild[2].getBoundingClientRect().top);
            // }, 500);
        }

        //vol2展開且vol3摺疊
        else if(vol2Height < 50 && vol3Height > 50){
            //滾輪向上
            if(event.deltaY < 0){
                storyChild[1].style.top = "calc(100% - 30px)";
                storyChild[2].style.top = "100%";
                // setTimeout(function(){
                //     vol2Height = pxToDvh(storyChild[1].getBoundingClientRect().top);
                //     vol3Height = pxToDvh(storyChild[2].getBoundingClientRect().top);
                // }, 500);
            }
            //滾輪向下
            else if(event.deltaY > 0){
                storyChild[2].style.top = "60px";
                storyChild[3].style.top = "calc(100% - 30px)";
                // setTimeout(function(){
                //     vol3Height = pxToDvh(storyChild[2].getBoundingClientRect().top);
                //     vol4Height = pxToDvh(storyChild[3].getBoundingClientRect().top);
                // }, 500);
            }
        }

        //vol3展開且vol4摺疊
        else if(vol3Height < 50 && vol4Height > 50){
            //滾輪向上
            if(event.deltaY < 0){
                storyChild[2].style.top = "calc(100% - 30px)";
                storyChild[3].style.top = "100%";
                // setTimeout(function(){
                //     vol3Height = pxToDvh(storyChild[2].getBoundingClientRect().top);
                //     vol4Height = pxToDvh(storyChild[3].getBoundingClientRect().top);
                // }, 500);
            }
            //滾輪向下
            else if(event.deltaY > 0){
                storyChild[3].style.top = "90px";
                storyChild[4].style.top = "calc(100% - 30px)";
                // setTimeout(function(){
                //     vol4Height = pxToDvh(storyChild[3].getBoundingClientRect().top);
                //     volfHeight = pxToDvh(storyChild[4].getBoundingClientRect().top);
                // }, 500);
            }
        }

        //vol4展開且volf摺疊
        else if(vol4Height < 50 && volfHeight > 50){
            //滾輪向上
            if(event.deltaY < 0){
                storyChild[3].style.top = "calc(100% - 30px)";
                storyChild[4].style.top = "100%";
                // setTimeout(function(){
                //     vol4Height = pxToDvh(storyChild[3].getBoundingClientRect().top);
                //     volfHeight = pxToDvh(storyChild[4].getBoundingClientRect().top);
                // }, 500);
            }
            //滾輪向下
            else if(event.deltaY > 0){
                storyChild[4].style.top = "120px";
                storyChild[5].style.top = "calc(100% - 30px)";
                // setTimeout(function(){
                //     volfHeight = pxToDvh(storyChild[4].getBoundingClientRect().top);
                //     vol5Height = pxToDvh(storyChild[5].getBoundingClientRect().top);
                // }, 500);
            }
        }

        //volf展開且vol5摺疊
        else if(volfHeight < 50 && vol5Height > 50){
            //滾輪向上
            if(event.deltaY < 0){
                storyChild[4].style.top = "calc(100% - 30px)";
                storyChild[5].style.top = "100%";
                // setTimeout(function(){
                //     volfHeight = pxToDvh(storyChild[4].getBoundingClientRect().top);
                //     vol5Height = pxToDvh(storyChild[5].getBoundingClientRect().top);
                // }, 500);
            }
            //滾輪向下
            else if(event.deltaY > 0){
                storyChild[5].style.top = "150px";
                // setTimeout(function(){
                //     vol5Height = pxToDvh(storyChild[5].getBoundingClientRect().top);
                // }, 500);
            }
        }
        //vol5展開且滾輪向上
        else if(vol5Height < 50 && event.deltaY < 0){
            storyChild[5].style.top = "calc(100% - 30px)";
            // setTimeout(function(){
            //     vol5Height = pxToDvh(storyChild[5].getBoundingClientRect().top);
            // }, 500);
        }
        // console.log(event.deltaY);
        console.log(storyChild[1].style.top);
    }
);

const playButton = document.querySelectorAll(".fa-play")
const player = document.querySelector(".player")
const ConMod = document.querySelector("#ConMod")
const Nic = document.querySelector("#Nic")
const DIS = document.querySelector("#DIS")
const TOMO = document.querySelector("#TOMO")
const Usagi = document.querySelector("#Usagi")
const OpeDOTA = document.querySelector("#OpeDOTA")
const Poly = document.querySelector("#Poly")
const Terror = document.querySelector("#Terror")
const mainMUSIC = document.querySelector(".mainMUSIC")

//音樂播放器
playButton.forEach(button => {
    button.addEventListener("click",
        function(event){
            
            //Constant Moderato播放中
            if(ConMod.classList.contains("musicShow")){
                if(event.target.id == "musicRight"){
                    player.innerHTML = '<iframe width="840" height="472.5" src="https://www.youtube.com/embed/dBS2ogwjzvA?si=YB2bcsn94BZjQ7HO&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    ConMod.classList.remove("musicShow")
                    ConMod.classList.add("leftSide")
                    Nic.classList.remove("rightSide")
                    Nic.classList.add("musicShow")
                    DIS.classList.add("rightSide");
                    playButton[0].classList.remove("buttonUnshown");
                    mainMUSIC.style.backgroundImage = "url(../nicbg.png)"
                    return;
                }
            }

            //Nichirin播放中
            if(Nic.classList.contains("musicShow")){
                switch(event.target.id){

                    //前一首 Constant Moderato
                    case "musicLeft":
                        player.innerHTML = '<iframe width="840" height="472.5" src="https://www.youtube.com/embed/0KFPtliRn_4?si=DWdyBvQJiaohnAIR&autoplay=1&loop=1&playlist=0KFPtliRn_4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen autoplay="true"></iframe>'
                        Nic.classList.remove("musicShow");
                        Nic.classList.add("rightSide");
                        ConMod.classList.remove("leftSide");
                        ConMod.classList.add("musicShow");
                        DIS.classList.remove("rightSide");
                        playButton[0].classList.add("buttonUnshown");
                        mainMUSIC.style.backgroundImage = "url(../musicbg.png)"
                        return;

                    //下一首 DIVE INTO SUMMER
                    case "musicRight":
                        player.innerHTML = '<iframe width="840" height="472.5" src="https://www.youtube.com/embed/GGhDikco0EA?si=ZmTjkZdhJ89TnIid&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                        Nic.classList.remove("musicShow");
                        Nic.classList.add("leftSide");
                        DIS.classList.remove("rightSide");
                        DIS.classList.add("musicShow");
                        ConMod.classList.remove("leftSide");
                        TOMO.classList.add("rightSide");
                        mainMUSIC.style.backgroundImage = "url(../disbg.png)"
                        return;
                }
            }

            //DIVE INTO SUMMER播放中
            if(DIS.classList.contains("musicShow")){
                switch(event.target.id){

                    //前一首 Nichirin
                    case "musicLeft":
                        player.innerHTML = '<iframe width="840" height="472.5" src="https://www.youtube.com/embed/dBS2ogwjzvA?si=KRqd439H_n5-JA6n&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                        DIS.classList.remove("musicShow");
                        DIS.classList.add("rightSide");
                        Nic.classList.remove("leftSide");
                        Nic.classList.add("musicShow");
                        TOMO.classList.remove("rightSide");
                        ConMod.classList.add("leftSide");
                        mainMUSIC.style.backgroundImage = "url(../nicbg.png)"
                        return;

                    //下一首 TOMODACHI SUMMER
                    case "musicRight":
                        player.innerHTML = '<iframe width="840" height="472.5" src="https://www.youtube.com/embed/Qxt04drZZpk?si=uk0nBCqp8MACaBfu&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                        DIS.classList.remove("musicShow");
                        DIS.classList.add("leftSide");
                        TOMO.classList.remove("rightSide");
                        TOMO.classList.add("musicShow");
                        Nic.classList.remove("leftSide");
                        Usagi.classList.add("rightSide");
                        mainMUSIC.style.backgroundImage = "url(../seabg.png)"
                        return;
                }
            }

            //TOMODACHI SUMMER播放中
            if(TOMO.classList.contains("musicShow")){
                switch(event.target.id){

                    //前一首 DIVE INTO SUMMER
                    case "musicLeft":
                        player.innerHTML = '<iframe width="840" height="472.5" src="https://www.youtube.com/embed/GGhDikco0EA?si=ZmTjkZdhJ89TnIid&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                        TOMO.classList.remove("musicShow");
                        TOMO.classList.add("rightSide");
                        DIS.classList.remove("leftSide");
                        DIS.classList.add("musicShow");
                        Usagi.classList.remove("rightSide");
                        Nic.classList.add("leftSide");
                        mainMUSIC.style.backgroundImage = "url(../disbg.png)"
                        return;

                    //下一首 Usagi Flap
                    case "musicRight":
                        player.innerHTML = '<iframe width="840" height="472.5" src="https://www.youtube.com/embed/wFvj8P3c9T0?si=V4G0oJIqFtm8Hacm&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                        TOMO.classList.remove("musicShow");
                        TOMO.classList.add("leftSide");
                        Usagi.classList.remove("rightSide");
                        Usagi.classList.add("musicShow");
                        DIS.classList.remove("leftSide");
                        OpeDOTA.classList.add("rightSide");
                        mainMUSIC.style.backgroundImage = "url(../usagibg.png)"
                        return;
                }
            }

            //Usagi Flap播放中
            if(Usagi.classList.contains("musicShow")){
                switch(event.target.id){

                    //前一首 TOMODACHI SUMMER
                    case "musicLeft":
                        player.innerHTML = '<iframe width="840" height="472.5" src="https://www.youtube.com/embed/Qxt04drZZpk?si=uk0nBCqp8MACaBfu&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                        Usagi.classList.remove("musicShow");
                        Usagi.classList.add("rightSide");
                        TOMO.classList.remove("leftSide");
                        TOMO.classList.add("musicShow");
                        OpeDOTA.classList.remove("rightSide");
                        DIS.classList.add("leftSide");
                        mainMUSIC.style.backgroundImage = "url(../seabg.png)"
                        return;

                    //下一首 Operation☆DOTABATA
                    case "musicRight":
                        player.innerHTML = '<iframe width="840" height="472.5" src="https://www.youtube.com/embed/MEqwd8dRvb8?si=5irfVJnEQVEsG6RQ&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                        Usagi.classList.remove("musicShow");
                        Usagi.classList.add("leftSide");
                        OpeDOTA.classList.remove("rightSide");
                        OpeDOTA.classList.add("musicShow");
                        TOMO.classList.remove("leftSide");
                        Poly.classList.add("rightSide");
                        mainMUSIC.style.backgroundImage = "url(../dotabg.png)"
                        return;
                }
            }

            //Operation☆DOTABATA播放中
            if(OpeDOTA.classList.contains("musicShow")){
                switch(event.target.id){

                    //前一首 Usagi Flap
                    case "musicLeft":
                        player.innerHTML = '<iframe width="840" height="472.5" src="https://www.youtube.com/embed/wFvj8P3c9T0?si=V4G0oJIqFtm8Hacm&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                        OpeDOTA.classList.remove("musicShow");
                        OpeDOTA.classList.add("rightSide");
                        Usagi.classList.remove("leftSide");
                        Usagi.classList.add("musicShow");
                        Poly.classList.remove("rightSide");
                        TOMO.classList.add("leftSide");
                        mainMUSIC.style.backgroundImage = "url(../usagibg.png)"
                        return;

                    //下一首 Polyphonic
                    case "musicRight":
                        player.innerHTML = '<iframe width="840" height="472.5" src="https://www.youtube.com/embed/sQlon_tnUSw?si=xLxdGVaAviKttYJL&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                        OpeDOTA.classList.remove("musicShow");
                        OpeDOTA.classList.add("leftSide");
                        Poly.classList.remove("rightSide");
                        Poly.classList.add("musicShow");
                        Usagi.classList.remove("leftSide");
                        Terror.classList.add("rightSide");
                        mainMUSIC.style.backgroundImage = "url(../finalbg.png)"
                        return;
                }
            }

            //Polyphonic播放中
            if(Poly.classList.contains("musicShow")){
                switch(event.target.id){

                    //前一首 Operation☆DOTABATA
                    case "musicLeft":
                        player.innerHTML = '<iframe width="840" height="472.5" src="https://www.youtube.com/embed/MEqwd8dRvb8?si=5irfVJnEQVEsG6RQ&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                        Poly.classList.remove("musicShow");
                        Poly.classList.add("rightSide");
                        OpeDOTA.classList.remove("leftSide");
                        OpeDOTA.classList.add("musicShow");
                        Terror.classList.remove("rightSide");
                        Usagi.classList.add("leftSide");
                        mainMUSIC.style.backgroundImage = "url(../dotabg.png)"
                        return;

                    //下一首 Step of Terror
                    case "musicRight":
                        player.innerHTML = '<iframe width="840" height="472.5" src="https://www.youtube.com/embed/cctXOi88bY4?si=Ufq3QVbtDz4Xp-2-&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                        Poly.classList.remove("musicShow");
                        Poly.classList.add("leftSide");
                        Terror.classList.remove("rightSide");
                        Terror.classList.add("musicShow");
                        OpeDOTA.classList.remove("leftSide");
                        playButton[1].classList.add("buttonUnshown");
                        mainMUSIC.style.backgroundImage = "url(../finalbg.png)"
                        return;
                }
            }

            //Step of Terror播放中
            if(Terror.classList.contains("musicShow")){
                if(event.target.id == "musicLeft"){
                    player.innerHTML = '<iframe width="840" height="472.5" src="https://www.youtube.com/embed/sQlon_tnUSw?si=xLxdGVaAviKttYJL&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    Terror.classList.remove("musicShow")
                    Terror.classList.add("rightSide")
                    Poly.classList.remove("leftSide")
                    Poly.classList.add("musicShow")
                    OpeDOTA.classList.add("leftSide");
                    playButton[1].classList.remove("buttonUnshown");
                    mainMUSIC.style.backgroundImage = "url(../finalbg.png)"
                    return;
                }
            }
        }
    )
})