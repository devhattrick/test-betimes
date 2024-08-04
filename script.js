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

// 3
//   SELECT 
//     tb_title.title_name_th,
//     tb_user.first_name,
//     tb_user.last_name,
//     tb_user.age,
//     tb_user.email,
//     tb_user.username,
//     tb_programming_language.Programming_name_en
// FROM 
//     tb_user
// JOIN 
//     tb_title ON tb_user.titleid = tb_title.titleid
// JOIN 
//     tb_programming_language ON tb_user.programmingid = tb_programming_language.id;

//4