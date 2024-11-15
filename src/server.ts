import fastify from "fastify";
import { knex } from "./database";

const app = fastify();

app.get('/hello', async () => {
    // const transaction = await knex('transactions').insert({
    //     id: crypto.randomUUID(),
    //     title: 'Transacao de teste',
    //     amount: 1000,
    // }).returning('*');

    const transaction = await knex('transactions').select('*');

    return transaction;
})

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP server running');
});