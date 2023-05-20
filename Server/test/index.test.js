const server = require("../src/app");
const session = require("supertest");
const agent = session(server);

describe("Test de Rutas", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      const response = await agent.get("/rickandmorty/character/1");
      expect(response.status).toBe(200);
    });
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const response = await agent.get("/rickandmorty/character/1").expect(200);
      expect(response.body).toHaveProperty("id");
      expect(response.body).toHaveProperty("name");
      expect(response.body).toHaveProperty("species");
      expect(response.body).toHaveProperty("gender");
      expect(response.body).toHaveProperty("status");
      expect(response.body).toHaveProperty("origin");
      expect(response.body).toHaveProperty("image");
    });
    it("Si hay un error responde con status: 500", async () => {
      const response = await agent.get("/rickandmorty/character/0000");
      expect(response.status).toBe(500);
    });
  });
  describe("GET /rickandmorty/login", () => {
    it("Acceder a la app", async () => {
      const query =
        "/rickandmorty/login?email=fabian@mail.com&password=fabian123";
      await agent.get(query).expect({
        access: true,
      });
    });
    it("Error al acceder a la app", async () => {
      const query = "/rickandmorty/login?email=fab@mail.com&password=fabi12";
      await agent.get(query).expect({
        access: false,
      });
    });
  });

  describe("POST /rickandmorty/fav", () => {
    const character1 = { id: 1, name: "nombre A" };
    const character2 = { id: 2, name: "nombre B" };
    it("Devuelve un arreglo con la informcacion enviada", async () => {
      const response = (await agent.post("/rickandmorty/fav").send(character1))
        .body;
      expect(response).toContainEqual(character1);
    });
    it("Si vuelves a enviar un nuevo elemento por body, este debe ser devuelto en un arreglo", async () => {
      const response = (await agent.post("/rickandmorty/fav").send(character2))
        .body;
      expect(response).toContainEqual(character1);
      expect(response).toContainEqual(character2);
    });
  });

  describe("DELETE /rickandmorty/fav/:id", () => {
    const character1 = { id: 1, name: "nombre A" };
    const character2 = { id: 2, name: "nombre B" };
    it("Devuelve el arreglo sin modificar cuando se envia un personaje con id desconocido", async () => {
      const response = (await agent.delete("/rickandmorty/fav/123")).body;
      expect(response).toContainEqual(character1);
    });
    it("Cuando se envia un id valido, elimina el personaje correctamente", async () => {
      const response = (await agent.delete("/rickandmorty/fav/2")).body;
      expect(response).not.toContainEqual(character2);
    });
  });
});
