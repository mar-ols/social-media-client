describe("failed login function", () => {
  it("visits page and fails logging in", () => {
    cy.visit("https://mar-ols.github.io/social-media-client/");
    cy.wait(1000);
    cy.get(
      "#registerForm > div.modal-footer > button.btn-outline-success",
    ).click();
    cy.get("#loginEmail").invoke("val", "thisemaildoesntwork@noroff.no");
    cy.get("#loginPassword").invoke("val", "wrongpassword");
    cy.get("#loginForm button").contains("Login").click();
    cy.on("window:alert", (alert) => {
      expect(alert).to.contains(
        "Either your username was not found or your password is incorrect",
      );
    });
  });
});
