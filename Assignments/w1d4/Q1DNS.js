"use strict";

let dns=require('dns');

dns.resolve4("msd.miu.edu", function(err, address){
    if(err){
        console.log("Error message")
    }
    else{
        console.log("The IP Address is: ", address);
    }
})