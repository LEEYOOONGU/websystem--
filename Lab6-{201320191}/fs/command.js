const path = require('path');
const fs = require('fs');
var process = require('process');

exports.readdir = function(){
    var directoryPath = path.join(__dirname);
    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        else {
            files.forEach(function (file) {
                console.log(file);
            });
        }
    });
};
exports.changedir = function(x){
    process.chdir(x,(err)=>{
        if(err){
            console.log('chdir: ' + err);
        }
        else {
            var directoryPath = path.join(__dirname);
            console.log(directoryPath);
        }
    });

};
exports.read = function(x){
    fs.readFile(x,{encoding:"utf-8",flag:"r"},(err,data)=>{
        if(err){console.log(err)}
        else {
            console.log(data)
        }

    })
};

exports.write = function(x,y){
    fs.writeFile(x,y, {encoding:"utf-8",flag:"r"},(err)=>{
        if(err){console.log(err)}
        else {
            console.log("write file Success")
        }
    })
};
exports.delete = function(x){
  fs.unlink(x,(err)=>{
      if(err){console.log(err)}
      else{
          console.log("unlink success!");
      }
  })

};
exports.mkdir = function(x){
    var curdir = process.cwd();
    curdir  = curdir+"\\"+x;
    fs.mkdir(curdir,(err)=>{
        if(err){
            console.error(err);
        }
        else{
            console.log("mkdir Success!");
        }
    })
};
exports.rmdir = function(x){
    var rmdir = process.cwd();
    rmdir  = rmdir+"\\"+x;
    fs.rmdir(rmdir,(err)=>{
        if(err){
            console.error(err);
        }
        else{
            console.log("rmdir Success!");
        }
    })
};


