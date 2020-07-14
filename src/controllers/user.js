const userModels = require('../models/user');
const helper = require('../helpers');

module.exports = {
    getUserById: async function(request, response){
        try {
            const id = request.params.id;
            const result = await userModels.getUserById(id);

            return helper.response(response, 200, result);
        } catch (error) {
            return helper.response(response, 500, { message: error });
        }
    },
    putUser: async function(request, response){
        try {
            const setData = request.body;
            const files = request.file;

            if (!files) {
                return helper.response(response, 500, { message: 'Image file cannot be empty' });
            } else {
                setData.image = files.filename;
                const id = request.params.id;
                const result = await userModels.putUser(setData, id);

                return helper.response(response, 200, result);
            }
        } catch (error) {
            return helper.response(response, 500, { message: error });
        }
    },
}
