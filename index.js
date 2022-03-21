function receivesAFunction (callback){
    callback();
}

function returnsANamedFunction(){
    return function scott() {
        console.log("function that logs")
    }
}

function returnsAnAnonymousFunction(){
    return function (){
        console.log("function that logs")
    }
}