import id from "/config.js";
var obniz = new Obniz(id);
let led;
obniz.onconnect = async function () {
    led = obniz.wired("LED", {anode:1, cathode:0})
    led.on();    
}

let app = new Vue({
    el:"#app",
    data:{
        message:"hello vue",
    },
    methods:{
        clicked:function(){
            console.log("clicked");
            led.off();
        }
    }
})