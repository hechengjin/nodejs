///////////////async写法///////////////////////


async function func1_as(para){
    console.log("1 function para:" + para);
    console.log("1 function finish");
    return ("p2");

}

async function func2_as(para){
    console.log("2 function para:" + para);
    console.log("2 function finish");
    return ("p3")
}


function test_AS() {
    func1_as("p1").then((value)=>{
        func2_as(value).then((para)=>{
        console.log(para)
    });
    }, (error)=>{
        console.log("fail : " + error);
    })
}

test_AS();


///////////////Promise写法///////////////////////
function func1_pm(para){
    console.log("1 function para:" + para);
    return new Promise(function(resolve, reject){
        if(true){
            console.log("1 function finish");
            // callback("p2");
            resolve("p2");
        } else {
            console.log("1 function error");
            reject("1 function fail!");
        }
    });
}

function func2_pm(para){
    console.log("2 function para:" + para);
    return new Promise(function(resolve, reject){
        if(true){
            console.log("2 function finish");
            // callback("p2");
            resolve("p3");
        } else {
            console.log("2 function error");
            reject("2 function fail!");
        }
    });
}

function test_PM() {
    func1_pm("p1").then((value)=>{
        func2_pm(value).then((para)=>{
               console.log(para)
            });
    }, (error)=>{
        console.log("fail : " + error);
    })
}

//test_PM();
///////////////回调函数写法///////////////////
function func1_cb(para, callback) {
    console.log("1 function para:" + para);
    setTimeout(function() {
        console.log("1 function finish");
        callback("p2")
    }, 1000);
}

function func2_cb(para, callback) {
    console.log("2 function para:" + para);
    setTimeout(function() {
        console.log("2 function finish");
        callback("p3")
    }, 1000);
}

function test_CB() {
    func1_cb("p1",function (para){
        func2_cb(para, function(para){
            console.log(para);
            console.log("testCallback finish!");
        })
    });
}

//test_CB();