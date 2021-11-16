import chai from "chai";
import chaiHttp from "chai-http";

chai.use(chaiHttp);

const agent = chai.request("http://localhost:3000");

test("test / endpoint", async () => {
  const req = agent.get("/");
  const res = await req.send();

  expect(res.status).toBe(200);
  expect(res.type).toBe("text/html");
  expect(res.text).toBe("Hello Contour");
});
