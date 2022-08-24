import httpServer from '../../src/app';
import request from 'supertest';

describe("GET / - a simple api endpoint", () => {
    it("should return 200 OK", () => {
        return request(httpServer)
        .get("/")
        .expect(200);
    });
});
