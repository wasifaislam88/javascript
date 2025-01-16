
function a(){
    console.log('a')
    b();
    console.log('aa');
}

function b(){
    console.log('b')
    d();
    console.log('bb');
}
function d(){
    console.log('d');
    console.log('dd');
}


function x(){
    console.log('x');
    console.log('xx');
}


function y(){
    console.log('y');
    console.log('yy');
}


function z(){
    console.log('z');
    console.log('zz');
}

setTimeout(()=>{
    console.log('inside timeout')
},2000)


fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(respone => respone.json())
  .then(json => console.log(json))


a();
x();
// b();