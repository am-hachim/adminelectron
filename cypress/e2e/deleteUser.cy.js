describe("deleteUser", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("deleteUser", () => {
    cy.get("input[type=email]").type("Bonjour@gail.com");
    cy.get("input[type=password]").type("1234");
    cy.get("button[type=submit]").click();
    cy.contains("tr", "weimann").as("targetRow");
    cy.get("@targetRow").find("#delete").click();
  });
});
