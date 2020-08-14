let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');

/**
 * Assertion style
 */
chai.should();
chai.use(chaiHttp);

describe('Books API', function() {
    describe('GET /book', function() {
        it('It should GET all the books', function(done) {
            chai.request(server)
                .get('/book')
                .end(function(error, response) {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('status');
                    response.body.should.have.property('data');
                    done();
                });
        });
    });
});
