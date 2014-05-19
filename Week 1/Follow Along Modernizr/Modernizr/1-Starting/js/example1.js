Modernizr.load({
   test:Modernizr.canvas,
    yep: ["js/success.js", "js/DrawText.js"],
    nope: "includes/polyfiller.js",
    complete:function(){
        console.log("The Test is Complete.");
        if(!Modernizr.canvas){
            //If Canvas is not supported, run this code
            Modernizr.load("js/fail.js");
            Modernizr.load("js/DrawText.js");
        }
    }
});
