// break: break the loop
// continue: skip this interation and continue with next iteration

console.log('********** break **********');

// print 1 to 5 but break if there exist 3
for (let i= 1; i<5; i++){
    console.log(i);
    if(i>=3){
        break
    }
    
}

/*
output:
1
2
3
*/

console.log('********** continue **********');

// print 1 to 5 but continue if there exist 3
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
      continue;
    }
    console.log(i);
  }