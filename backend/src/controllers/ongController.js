const crypto = require("crypto");
const connection = require('../database/connection');


module.exports = {

    async index(request, response) {

        const list = await connection('ongs').select('*');

        return response.json(list);

    },

    async create(request, response) {

        const { name, email, whatsapp, city, uf } = request.body;

        //generate the id randomly
        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })
    
        return response.json({ id });

    },

    async clear(request, response){
        
        await connection('ongs').delete();

        const list = await connection('ongs').select('*');
        
        return response.json(list);
    }

};