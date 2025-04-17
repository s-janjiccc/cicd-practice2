const handler = require("./app");
const httpMocks = require("node-mocks-http");

test("responds with correct message", done => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse({
        eventEmitter: require("events").EventEmitter
    });

    res.on("end", () => {
        expect(res._getData()).toBe("Hello from DevOps practice!");
        done();
    })

    handler(req, res);
});