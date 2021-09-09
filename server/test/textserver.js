const request = require("supertest");
const app = require("../src/index");

describe('GET /get_users',function(){
    it('obteniendo lista de usuarios',function(done){
        request(app)
            .get('/get_users')
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
              });            
    });
});


describe("POST /login", function()  {
    it("Usuario no encontrado, error no existe", (done) => {
      const userdata = {
        correo: "noexiste@gmail.com",
        contrasenia: "0",
      };

      request(app)
        .post("/login")
        .send(userdata)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(404)
        .expect('"usuario o contraseña incorrecta"') 
        .end((err) => {
          if (err) return done(err);
          done();
        });
    });

});
