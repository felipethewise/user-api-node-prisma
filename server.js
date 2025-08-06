import express from 'express'
import { PrismaClient } from '../generated/prisma/index.js'


const prisma = new PrismaClient()
const users = []

const app = express();
app.use(express.json());

app.post('/usuarios', async (req, res) => {

    await prisma.user.create({
        data:{
            name: req.body.name,
            age: req.body.age,
            email: req.body.email,
        }
    })
    
    res.status(201).json(req.body)

})

app.get('/usuarios', async (req, res) => {
    
    const users = await prisma.user.findMany()

    res.status(200).json(users)
})

app.listen(3000)

/*
    criar uma API de usuários
    - criar um usuário
    - listar usuários
    - atualizar/editar um usuário
    - deletar um usuário
    */

/* felipetrndd15 
    Felipe246. */

