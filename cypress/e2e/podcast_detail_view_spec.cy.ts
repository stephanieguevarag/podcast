/// <reference types="Cypress" />
describe("Podcast detail view", () => {
  it("successfully loads", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-testid="podcast-item-0"]').should("be.visible").click();
    cy.get('[data-testid="podcast-detail"]').should("be.visible");
  });
  it("Show episode selected", () => {
    cy.get('[data-testid="episode-list"]').should("be.visible");
    cy.get('[data-testid="table-link-1"]').should("be.visible").click();
    cy.get('[data-testid="current-episode"]').should("be.visible");
  });
  it("Go back to episodes list", () => {
    cy.get('[data-testid="podcast-card"]').should("be.visible");
    cy.get('[data-testid="podcast-card"]').click();

    cy.get('[data-testid="episode-list"]').should("be.visible");
  });
});
