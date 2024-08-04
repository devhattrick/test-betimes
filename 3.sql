   SELECT 
     tb_title.title_name_th,
     tb_user.first_name,
     tb_user.last_name,
     tb_user.age,
     tb_user.email,
     tb_user.username,
     tb_programming_language.Programming_name_en
 FROM 
     tb_user
 JOIN 
     tb_title ON tb_user.titleid = tb_title.titleid
 JOIN 
     tb_programming_language ON tb_user.programmingid = tb_programming_language.id
WHERE 
    tb_user.age < 25;