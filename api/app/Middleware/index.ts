import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import jwt_decode from "jwt-decode";

export default class Auth {
  public async handle(
    { request, response }: HttpContextContract,
    next: () => Promise<void>
  ) {
    const auth = request.headers().authorization;
    const route = request.url();
    if (route === "/swagger" || route === "/docs") return await next();
    if (!auth) {
      response.unauthorized({ error: "You need Authorization" });
      return;
    }

    const decoded: { keyPhrase: string } = jwt_decode(auth);

    if (decoded?.keyPhrase !== process.env.PHRASE_KEY) {
      response.unauthorized({ error: "Token is wrong" });
      return;
    }

    await next();
  }
}
