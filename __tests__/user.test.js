const request = require("supertest");
const app = require("../server");

const bearerToken =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksInVzZXJuYW1lIjoiVGVzc2luZyIsImlhdCI6MTY0MjkyOTc5OSwiZXhwIjoxNjQzMTAyNTk5fQ.SwLcsceOf1C122hxmMC0FEIWonXHQFaZcff9fEl0UrU";

describe("User Route", () => {
  it("no user on requested id", async () => {
    const res = await request(app)
      .get("/user/1")
      .set("authorization", bearerToken);

    expect(res.statusCode).toEqual(404);
  });
  it("register user", async () => {
    const res = await request(app)
      .post("/user/register")
      .send({
        first_name: "Rave",
        last_name: "Arevalo",
        username: "Test",
        password: "Test",
      })
      .set("Accept", "application/json");

    expect(res.statusCode).toEqual(200);
  });
  it("register user bad request", async () => {
    const res = await request(app)
      .post("/user/register")
      .send({
        first_name: "Rave",
        last_name: "Arevalo",
      })
      .set("Accept", "application/json");

    expect(res.statusCode).toEqual(400);
  });
  it("user login", async () => {
    const res = await request(app)
      .post("/user/login")
      .send({
        username: "Test",
        password: "Test",
      })
      .set("Accept", "application/json");

    expect(res.statusCode).toEqual(200);
  });
  it("retrieve all users", async () => {
    const res = await request(app)
      .get("/user")
      .set("authorization", bearerToken);

    expect(res.statusCode).toEqual(200);
  });
  it("retrieve single user", async () => {
    const res = await request(app)
      .get("/user/1")
      .set("authorization", bearerToken);

    expect(res.statusCode).toEqual(200);
  });
  it("update password", async () => {
    const res = await request(app)
      .patch("/user/update-password")
      .send({
        username: "Test",
        old_password: "Test",
        new_password: "Test123",
      })
      .set("Accept", "application/json")
      .set("authorization", bearerToken);

    expect(res.statusCode).toEqual(200);
  });
  it("delete account", async () => {
    const res = await request(app)
      .delete("/user/1")
      .set("authorization", bearerToken);

    expect(res.statusCode).toEqual(200);
  });
});
