//===============================
//break and continue in for loop
//=============================

//break

for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        break;
    }

    console.log(i);
}

//o/p- 1,2,3,4
// When i becomes 5:break; stops the entire loop.


// Continue

// continue skips the current iteration and moves to the next iteration.

for (let i = 1; i <= 5; i++) {


    if (i === 3) {
        continue;
    }


    console.log(i);
}

//o/p-1,2,4,5
//When i = 3, JavaScript skips: console.log(i);and goes to the next iteration


//break     → stop the entire loop
//continue  → skip only the current iteration


//--------------------------------------------------

for (let index = 1; index <= 10; index++) {
    if (index==5) {
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i is ${index}`);
    
}

//o/p =

// Value of i is 1
// Value of i is 2
// Value of i is 3
// Value of i is 4
// Detected 5


for (let index = 1; index <= 10; index++) {
    if (index==5) {
        console.log(`2nd Detected 5`);
        continue;
    }
    console.log(`2nd i is ${index}`);
    
}