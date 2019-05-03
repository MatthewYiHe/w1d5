var numbers = [];


module.exports = {
  store : function(number){
 //   console.log(numbers);
    numbers.push(number);
 //   console.log(numbers);
   },
  print : function(){
    let copy = numbers.map(a => a);
    console.log("sorted",copy.sort((a,b) => a - b ));
    console.log("original",numbers);
  }
};