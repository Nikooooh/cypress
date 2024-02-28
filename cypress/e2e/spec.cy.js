/// <reference types="cypress"/>

describe("testes para CRUD de usuários", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it("Deve preencher o forms e adicionar o usuário", () => {
    cy.get('[type="text"]').type("Nicolas");
    cy.get('[type="email"]').type("nicolas@hotmail.com");
    cy.get('[type="tel"]').type(999999999);
    cy.get(".adicionar").click();
  });

  it("Deve Alterar dados de um usuário", () => {
    cy.get(":nth-child(5) > .sc-gueYoa > .edit", { timeout: 10000 }).click();
    cy.get('[type="text"]').clear();
    cy.get('[type="text"]').type("Nicolas T.");
    cy.get('[type="email"]').clear();
    cy.get('[type="email"]').type("nicolastttt@hotmail.com");
    cy.get('[type="tel"]').clear();
    cy.get('[type="tel"]').type(55555555);
    cy.get(".alterar").click();
  });

  it("Deve excluir um usuário", () => {
    cy.get(":nth-child(4) > .sc-gueYoa > .delete").click();
  });
});
