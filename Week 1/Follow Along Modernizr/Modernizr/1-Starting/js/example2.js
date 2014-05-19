

//Load different Scripts based on Modernizr test
//Modernizr.load

Modernizr.load({
    test:Modernizr.inputtypes.date,
    yep:'js/success.js',
    nope:['js/fail.js', 'js'],
    complete: function(){
        //Will run after js file is loaded base on case above
        console.log('Test is complete');


    }
});