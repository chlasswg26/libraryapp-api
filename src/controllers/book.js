const bookModels = require('../models/book');
const helper = require('../helpers');

module.exports = {
    getBook: async function(request, response){
        try {
            const result = await bookModels.getBook();

            return helper.response(response, 200, result);
        } catch (error) {
            return helper.response(response, 500, { message: error });
        }
    },
    getBookById: async function(request, response){
        try {
            const id = request.params.id;
            const result = await bookModels.getBookById(id);

            return helper.response(response, 200, result);
        } catch (error) {
            return helper.response(response, 500, { message: error });
        }
    },
    getBookByUser: async function(request, response){
        try {
            const userId = request.params.userId;
            const result = await bookModels.getBookByUser(userId);

            return helper.response(response, 200, result);
        } catch (error) {
            return helper.response(response, 500, { message: error });
        }
    },
    getBookByFilter: async function(request, response){
        try {
            let filter = request.query;
            filter.page = parseInt(!filter.page ? 1 : filter.page);
            filter.limit = parseInt(!filter.limit ? 4 : filter.limit);
            filter.sort = !filter.sort ? 'DESC' : filter.sort;
            filter.by = !filter.by ? 'created' : filter.by;
            filter.start = parseInt((filter.page - 1) * filter.limit);
            filter.search = !filter.search ? '%%' : `%${filter.search}%`;
            const count = await bookModels.getCountBook(filter);
            const countData = count;
            const countPage = Math.ceil(parseInt(countData) / filter.limit);
            const currentPage = filter.page;
            const nextPage = ((currentPage + 1) - countPage) >= 1 ? null : currentPage + 1;
            const previousPage = (currentPage - 1) <= 0 ? null : currentPage - 1;
            const pagination = {
                limit: filter.limit,
                records: [{
                    data: countData,
                    page: countPage,
                }],
                pages: [{
                    current: currentPage,
                    next: nextPage,
                    previous: previousPage,
                }],
            };
            const result = await bookModels.getBookByFilter(filter);
            
            return helper.response(response, 200, result, [pagination]);
        } catch (error) {
            return helper.response(response, 500, { message: error });
        }
    },
    postBook: async function(request, response){
        try {
            const setData = request.body;
            const files = request.file;

            if (files) {
                setData.image = files.filename;
            }
            const result = await bookModels.postBook(setData);

            return helper.response(response, 200, result);
        } catch (error) {
            return helper.response(response, 500, { message: error });
        }
    },
    putBook: async function(request, response){
        try {
            const setData = request.body;
            const files = request.file;

            if (files) {
                setData.image = files.filename;
            }
            const id = request.params.id;
            const result = await bookModels.putBook(setData, id);

            return helper.response(response, 200, result);
        } catch (error) {
            return helper.response(response, 500, { message: error });
        }
    },
    deleteBook: async function(request, response){
        try {
            const id = request.params.id;
            const result = await bookModels.deleteBook(id);

            return helper.response(response, 200, result);
        } catch (error) {
            return helper.response(response, 500, { message: error });
        }
    },
}
