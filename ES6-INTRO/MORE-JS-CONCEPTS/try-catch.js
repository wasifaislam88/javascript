
function checkAge(){
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error');
    // console.log(11111)

    try{
  // console.log(bBaria)
  const age = parseInt(ageText);
  if(isNaN(age)){

    // console.log('age not found',age,ageText)
    throw "please enter a number";
  }

  else if(age < 18){
    throw "bacha kaccha not allowed";
  }

  else if(age > 30){
    throw "bura manus aikhane aisen na"
  }
  errorTag.innerHTML = '';
    }
    

    catch(err){
        console.log('ERROR:',err)
        // errorTag.innerHTML = 'something wrong'
        errorTag.innerHTML = 'ERROR:' + err;
    }

    finally{
        console.log('All done inside try catch')
    }
    console.log(1111);
}