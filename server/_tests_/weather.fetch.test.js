const axios = require("axios");

describe("GET /api/weather", () => {
  it("should fetch weather", async () => {
    const res = await axios.get("http://localhost:3001/api/weather", {
      params: { city: "Nida" },
    });
    expect(res.status).toBe(200);
    expect(res.data).toHaveProperty("temp");
  });

  it("should validate empty input", async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/weather");
    } catch (error) {
      expect(error.response.status).toBe(400);
    }
  });

  it("should validate symbol input", async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/weather", {
        params: { city: "^@^" },
      });
    } catch (error) {
      expect(error.response.status).toBe(500);
    }
  });
  it("should validate and clean symbols from valid city", async () => {
    const res = await axios.get("http://localhost:3001/api/weather", {
      params: { city: "Nida@#" },
    });
    expect(res.status).toBe(200);
    console.log(res.data);
    expect(res.data).toHaveProperty("temp");
  });
});
