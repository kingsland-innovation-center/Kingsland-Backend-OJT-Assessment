const request = require("supertest");
const app = require("../server");

describe("check verified routes", () => {
  it("no token provided", async () => {
    const res = await request(app)
      .get("/student")
      .set("Accept", "application/json");

    expect(res.statusCode).toEqual(401);
  });

  it("invalid token", async () => {
    const res = await request(app)
      .get("/student")
      .set("Accept", "application/json")
      .set("authorization", "Bearer 1234");

    expect(res.statusCode).toEqual(403);
  });
});
