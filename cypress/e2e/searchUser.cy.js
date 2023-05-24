describe("searchUser", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("searchForUser", () => {
    cy.get("input[type=email]").type("Bonjour@gail.com");
    cy.get("input[type=password]").type("1234");
    cy.get("button[type=submit]").click();
    cy.get("input[type=text]").type("Bonjour@gail.com");
    cy.get("tr").eq(1).as("result");
    cy.get("@result").find("td").eq(1).should("contain", "Abbyjjhhg");
  });
});
