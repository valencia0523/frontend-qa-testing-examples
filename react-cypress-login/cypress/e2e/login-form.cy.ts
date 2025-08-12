describe("LoginForm", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("shows error toast if name is empty", () => {
    cy.get("button[type=submit]").click();
    cy.contains("Please enter your name").should("be.visible");
  });

  it("shows success toast if name is entered", () => {
    cy.get("input[name=name]").type("Valencia");
    cy.get("button[type=submit]").click();
    cy.contains("Hello, Valencia!").should("be.visible");
  });
});
