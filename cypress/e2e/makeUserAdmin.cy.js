describe("makeUserAdmin", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("makeUserAdmin", () => {
    cy.get("input[type=email]").type("Bonjour@gail.com");
    cy.get("input[type=password]").type("1234");
    cy.get("button[type=submit]").click();
    cy.contains("tr", "Dedric").as("targetRow");
    cy.get("@targetRow").find("#admin").click();
  });
});
