const request = require("supertest");
const app = require("../server");

const bearerToken =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksInVzZXJuYW1lIjoiVGVzc2luZyIsImlhdCI6MTY0MjkyOTc5OSwiZXhwIjoxNjQzMTAyNTk5fQ.SwLcsceOf1C122hxmMC0FEIWonXHQFaZcff9fEl0UrU";

describe("Student Route", () => {
  it("student does not exist", async () => {
    const res = await request(app)
      .get("/student/1")
      .set("authorization", bearerToken);

    expect(res.statusCode).toEqual(404);
  });
  it("insert new student", async () => {
    const res = await request(app)
      .post("/student")
      .send({
        first_name: "Sean",
        last_name: "Cadubla",
        email: "test@kingsland.io",
        course: "Software Engineering",
      })
      .set("Accept", "application/json")
      .set("authorization", bearerToken);

    expect(res.statusCode).toEqual(200);
  });
  it("retrieve single student", async () => {
    const res = await request(app)
      .get("/student/1")
      .set("authorization", bearerToken);

    expect(res.statusCode).toEqual(200);
  });
  it("retrieve all students", async () => {
    const res = await request(app)
      .get("/student")
      .set("authorization", bearerToken);

    expect(res.statusCode).toEqual(200);
  });
  it("insert student bad request", async () => {
    const res = await request(app)
      .post("/student")
      .send({
        email: "test@kingsland.io",
        course: "Software Engineering",
      })
      .set("Accept", "application/json")
      .set("authorization", bearerToken);

    expect(res.statusCode).toEqual(400);
  });
  it("modify a student", async () => {
    const res = await request(app)
      .patch("/student/1")
      .send({
        first_name: "Pia",
        last_name: "Bonilla",
        email: "test@kingsland.io",
        course: "Project Management",
      })
      .set("Accept", "application/json")
      .set("authorization", bearerToken);

    expect(res.statusCode).toEqual(200);
  });
  it("delete a student", async () => {
    const res = await request(app)
      .delete("/student/1")
      .set("authorization", bearerToken);

    expect(res.statusCode).toEqual(200);
  });
});
