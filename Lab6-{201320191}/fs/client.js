var cr = require('./command.js');
const {createInterface} = require("readline");
const reader = createInterface({
    input : process.stdin,
    output: process.stdout
});
let input = [];
reader.on('line', function (line) {
    input = line.split(' ');
    if(input[0]=="ls") {
        if(input[1] !== undefined) {
            console.log("Too many arguments!");
        }
        else {
            cr.readdir();
        }
    }
    else if(input[0] == "cd"){
        if(input[2] !== undefined) {
            console.log("Too many arguments!");
        }
        else {
            cr.changedir(input[1])
        }
    }
    else if(input[0] == "read"){
        if(input[2] !== undefined) {
            console.log("Too many arguments!");
        }
        else {
            cr.read(input[1]);
        }

    }
    else if(input[0]=="write"){
        if(input[3] !== undefined) {
            console.log("Too many arguments!");
        }
        else {
            cr.write(input[1],input[2]);
        }

    }
    else if(input[0]=="delete"){
        if(input[2] !== undefined) {
            console.log("Too many arguments!");
        }
        else {
            cr.delete(input[1]);
        }
    }
    else if(input[0]=="mkdir"){
        if(input[2] !== undefined) {
            console.log("Too many arguments!");
        }
        else {
            cr.mkdir(input[1]);
        }
    }
    else if(input[0]=="rmdir"){
        if(input[2] !== undefined) {
            console.log("Too many arguments!");
        }
        else {
            cr.rmdir(input[1]);
        }
    }
    else{
        console.log("Unknown Command");
    }
});
