const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

test("test / endpoint", async () => {
  const agent = chai.request("http://localhost:3000");
  const req = agent.get("/");
  const res = await req.send();

  expect(res.status).toBe(200);
});
