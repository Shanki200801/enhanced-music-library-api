import request from "supertest";
import { app, sequelize } from "../index"; // Import both app and sequelize

describe("User API Tests", () => {
  beforeAll(async () => {
    await sequelize.authenticate();
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it("should return a welcome message", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.text).toBe("Music Library API is running!");
  });
});
