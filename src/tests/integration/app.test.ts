import app from '../../app';
import request from 'supertest';

describe("GET / - a simple api endpoint", () => {
    it("should return 200 OK", () => {
        return request(app)
        .get("/")
        .expect(200);
    });
});
