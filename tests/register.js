module.exports = {
  "PASSO 1: Acessar a pagina de autenticação ": function (browser) {
    browser.url("http://localhost:8080").pause(10000).end();
  },
  "PASSO2: Tentar fazer cadastro": function (browser) {},
  "PASSO 3 : Verificar se autenticou após o cadastro": function (browser) {},
};
