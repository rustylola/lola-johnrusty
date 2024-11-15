/*
Synchronous Programming: In synchronous programming, tasks are executed
one after the other in a sequential manner. Each task mush complete before
the next tsk can start. This blocking behavior can lead to ineficient use of 
resource
*/ 

console.log('first');
console.log('second');
console.log('third');

/*
Asynchronous javascript allows code to run concurrently, without blocking the
execution of other code. It's common used for tasks that take time, uch  smaking HTTP
requests or waiting for user input.
*/ 

// console.log('First');

// setTimeout(()=>{
//     console.log('second');
// }, 2000); // Delay of 2000 miliseconds (2 seconds);

// console.log('third');

// console.log('Start Boiling water');

// setTimeout(() => {
//     console.log('Add tea leaves');    
// }, 2000);

// console.log('Serve Tea');

/*
Callbacks are functions that are passed as arguments to other funtions and get executed at a
later time. They are commonly used in javascript for handling asynchronous operation.
*/ 

// const step1 = (callbacks) => {
//     setTimeout(()=>{
//         console.log('Step 1 Complete');
//         callbacks();    
//     }, 1000);
// }

// const step2 = (callbacks) => {
//     setTimeout(()=>{
//         console.log('Step 2 Complete');    
//         callbacks();
//     }, 2000);
// }

// const step3 = (callbacks) => {
//     setTimeout(()=>{
//         console.log('Step 3 Complete');
//         callbacks();    
//     }, 2000);
// }

// step1(() =>{
//     step2(() => {
//         step3(() =>{
//             console.log('All Step Complete');
//         })
//     });
// })

/*
Callback hell refers to the situation where multiple nested
callbacks make the code difficult to read and maintain. It often occurs when 
occurs when dealing with multiple asynchronous operations that depend on
each other
*/ 

/*
Addressing Callback hell using promises
Promises providean alternative approach to handle asynchronous operations.

*/ 

const step1 = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log('Step 1 Complete');
            resolve();
        }, 1000);
    });
}

const step2 = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log('Step 2 Complete');
            resolve();
        }, 1000);
    });
}

const step3 = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log('Step 3 Complete');
            resolve();
        }, 1000);
    });
}

// step1()
//     .then(step2)
//     .then(step3)
//     .then(()=>{
//         console.log('All Steps completed');
//     })
//     .catch(() =>{
//         console.log('An error occured: ', error);
//     });

const performSteps = async () =>{
    try{
        await step1();
        await step2();
        await step3();
    } catch (error){
        console.error("An error occured: ", error);
    }
}

