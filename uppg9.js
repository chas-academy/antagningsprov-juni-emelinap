

function uppg9 (){
   function sort(arr) {
    arr.forEach(num => {
      let label = '';

      if (num % 2 === 0) {
        label = 'jämnt';
      } else {
        label = 'udda';
      }

      console.log(num, label); 
    });
  }

  sort([1, 2, 3, 4, 5]);
}

module.exports = { uppg9 };