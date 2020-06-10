//Rota é o caminho(url)
//Recurso é a entidade que queremos acessar

//GET: Buscar uma ou mais informações do back-end
//POST: Criar uma nova informação no back-end
//PUT: Atualizar uma informação existente no back-end
//DELETE: Remover uma informação do back-end

//Request Param: Parâmetros que vem na própria rota que identifica um recurso
//Query Param: Parâmetros que gvem na própria rota geralmente opcionais para filtros, paginação e coisas não muito relevantes
//Request Body: Parâmetros para criação/atualização de informações

//SELECT * FROM users WHERE name = 'Diego' (SQL)
//knex('users').where('name','Diego').select('*') (Knex.js)

/*const users = [
    'Diego',
    'Cleiton',
    'Robson',
    'Daniel'
];*/

import express from 'express';
import routes from './routes';
import path from 'path';
import cors from 'cors';
import { errors } from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

//Unsplash -> repositório de imagens gratuitas

app.listen(3333);

/*app.get('/users',(request,response) => {
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    return response.json(filteredUsers);
});

app.get('/users/:id', (request,response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
});

app.post('/users', (request,response) => {
    const data = request.body;
    
    console.log(data);
    
    //const user = {
    //    name: 'Iranildo',
    //    email: 'iranildobatalha@gmail.com'
    //};
    const user = {
        name: data.name,
        email: data.email
    };
    return response.json(user);
});*/