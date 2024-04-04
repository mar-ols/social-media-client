describe("login function", () => {
  it("visits page and successfully logs in with valid user credentials", () => {
    cy.visit("https://mar-ols.github.io/social-media-client/");
    cy.wait(1000);
    cy.get(
      "#registerForm > div.modal-footer > button.btn-outline-success",
    ).click();
    cy.get("#loginEmail").invoke("val", "thisisafakeuser@noroff.no");
    cy.get("#loginPassword").invoke("val", "securepassword");
    cy.wait(500);
    cy.get("#loginForm button").contains("Login").click();
    cy.wait(1000);
    cy.get("button.btn-outline-warning").contains("Logout").should("exist");
  });
});
