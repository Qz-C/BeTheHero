const connection = require("../database/connection");

module.exports = {
    async create (request, response) {
        const { title, description, value } = request.body;


        //Here contains the authentication fields like login e etc.
        const ong_id = request.headers.authorization;
        
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });

        return response.json({ id });
    },

    async index(request, response) {

        //this will get a query param which come after a question mark
        const {page = 1} = request.query;

        const [count] = await connection ('incidents').count(); //return the number of elements

        
        const list = await connection('incidents')
            // it links data from two different table
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id' ) 
            .limit(5) // limit up to 5 elements by page
            .offset((page - 1) * 5) // increments index
            //in order to don't overwrite the incident's id with the ongs's id
            //we request all the elements from incidents table
            //and describes the ones requested from ong table, note that id is note requested from this table. 
            .select([
                'incidents.*',
                'ongs.name', 
                'ongs.email', 
                'ongs.whatsapp', 
                'ongs.city', 
                'ongs.uf'
            ]);

        //return the total of incidents on response's header 
        response.header('X-Total-Count', count['count(*)']);

        return response.json(list);
    }, 

    async delete(request, response) {
        //get the Route param id
        const { id } = request.params;
        //
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id) // search for an id equals the one on route param
            .select('ong_id') // select by the ong id
            .first(); // as it will not be any repeated element we get the first
        
        //Ensures that the logged in Ong will only delete their on incident
        if (incident.ong_id != ong_id){
            //401 http code indicates a non authorized operation 
            return response.status(401).json({ error : 'Operation not authorized' });
        }

        await connection('incidents').where('id', id).delete();

        //The 204 http code indicates an operation that was successful but don't return any content
        return response.status(204).send();
    }
}