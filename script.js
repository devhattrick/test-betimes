// 1
const array1 = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i']
  ];

  array1.map((data, index) => {
    const joinedString = data.join('');
    console.log(`${index + 1} => ${joinedString}`);
  });
  // 2
  const array2 = ['a','b','c','d','e','f','g','h']; 

  const resultArray2 = array2.map((data, index)=>{
    return {key: index+1, value: data}
  })
  console.log(resultArray2)
