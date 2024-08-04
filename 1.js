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