//function without i/p and o/p.

function add()
{
    let a = 10;
    let b = 20;
    console.log (a+b);
}

add()



//function with no parameters but return type.


function add()
{
    let a = 10;
    let b = 20;
    return (a+b);
}

console.log((add())); //


//function With parameters and no return type.
function add(a,b)
{
    console.log(a+b);
}

add(10,20);


//Note: when u call the function and gving the value is called as arguments but when u declared the function and giving the value is called as parameters.

//function with parameters and return type

function add(a,b)
{
    return (a+b);
}

let res = add(10,20);
console.log(res);