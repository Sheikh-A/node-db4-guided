const server = require('./server.js');

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});


/*
knex migrate:make create-tables

select * from zoos as z
join zoo_animals as za
on z.id = za.zoo_id
join animals as a 
on a.id = za.animal_id

*/