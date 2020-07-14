const historyModels = require('../models/history');
const helper = require('../helpers');

module.exports = {
    getHistory: async function(request, response){
        try {
            const result = await historyModels.getHistory();

            return helper.response(response, 200, result);
        } catch (error) {
            return helper.response(response, 500, { message: error });
        }
    },
    getHistoryByUserId: async function(request, response){
        try {
            const userId = request.params.userId;
            const result = await historyModels.getHistoryByUserId(userId);

            return helper.response(response, 200, result);
        } catch (error) {
            return helper.response(response, 500, { message: error });
        }
    },
    postHistory: async function(request, response){
        try {
            const setData = request.body;
            const result = await historyModels.postHistory(setData);

            return helper.response(response, 200, result);
        } catch (error) {
            return helper.response(response, 500, { message: error });
        }
    },
}
