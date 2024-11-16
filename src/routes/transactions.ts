import { FastifyInstance } from "fastify";
import knex from "knex";

export async function transactionsRoutes(app: FastifyInstance) {
    app.get('/hello', async () => {
        // const transaction = await knex('transactions').insert({
        //     id: crypto.randomUUID(),
        //     title: 'Transacao de teste',
        //     amount: 1000,
        // }).returning('*');
    
        const transaction = await knex('transactions').select('*');
    
        return transaction;
    })
};

