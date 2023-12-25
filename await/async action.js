function promiseTimeout(ms){
    return new Promise((resolve,reject)=> {
        setTimeout(resolve,ms);
    });
}

async function logRunningOperation() {
    //logic 
    return 42;
}

async function run () {
    console.log("Start!!");
    await promiseTimeout(2000);
    //waitand see
    const response =  longRunningOperation();
    console.log(response);

    console.log("Stop!!")
}

run();