/// <reference types="Cypress" />

describe("Home view", () => {
  it("successfully loads", () => {
    cy.visit("http://localhost:3000");
  });

  it("show first podcast item", () => {
    cy.get('[data-testid="podcast-item-0"]').should("be.visible");
  });

  it("Navigate to podcast selected", () => {
    cy.get('[data-testid="podcast-item-0"]').click();
  });
});
