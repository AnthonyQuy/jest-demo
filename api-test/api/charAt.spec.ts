import chai from "chai";
import chaiHttp from "chai-http";
import getCharAt from "../util/getCharAt";

chai.use(chaiHttp);

const agent = chai.request("http://localhost:3000");

test("test /charAt endpoint", async () => {
  for (var i = 0; i < 10; i++) {
    const req = agent.get("/charAt");
    req.query({ pos: i });
    let res = await req.send();
    expect(res.text).toBe(getCharAt(i));
  }
});

