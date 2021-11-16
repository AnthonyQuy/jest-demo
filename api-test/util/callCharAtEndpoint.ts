import chai from "chai";
import chaiHttp from "chai-http";


export async function callCharAtEndpoint(pos: number) {
    chai.use(chaiHttp);
    const agent = chai.request("http://localhost:3000");
    const req = agent.get("/charAt");
    req.query({ pos: pos });
    const res = await req.send();
    const char = res.text;
    return char;
}
