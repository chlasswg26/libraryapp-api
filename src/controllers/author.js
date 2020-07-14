const authorModels = require('../models/author');
const helper = require('../helpers');

module.exports = {
    getAuthor: async function(request, response){
        try {
            const result = await authorModels.getAuthor();

            return helper.response(response, 200, result);
        } catch (error) {
            return helper.response(response, 500, { message: error });
        }
    },
    // getAuthorById: async function(request, response){
    //     try {
    //         const id = request.params.id;
    //         const result = await authorModels.getAuthorById(id);

    //         return helper.response(response, 200, result);
    //     } catch (error) {
    //         return helper.response(response, 500, { message: error });
    //     }
    // },
    postAuthor: async function(request, response){
        try {
            const setData = request.body;
            const result = await authorModels.postAuthor(setData);

            return helper.response(response, 200, result);
        } catch (error) {
            return helper.response(response, 500, { message: error });
        }
    },
    putAuthor: async function(request, response){
        try {
            const setData = request.body;
            const id = request.params.id;
            const result = await authorModels.putAuthor(setData, id);

            return helper.response(response, 200, result);
        } catch (error) {
            return helper.response(response, 500, { message: error });
        }
    },
    deleteAuthor: async function(request, response){
        try {
            const id = request.params.id;
            const result = await authorModels.deleteAuthor(id);

            return helper.response(response, 200, result);
        } catch (error) {
            return helper.response(response, 500, { message: error });
        }
    },
}
