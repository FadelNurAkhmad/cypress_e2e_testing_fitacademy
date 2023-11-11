describe("Regiter Page Test", () => {
  it("Visit Register Page", () => {
    cy.visit("https://poc.fitacademy.id/register");
    cy.title().should("eq", "Register - Fit Academy");
    cy.contains("Buat Akun Baru");
  });

  it("Contains Nama Lengkap, Email, Password, Confirm Password", () => {
    const nama = cy.get("input[name='name']");
    nama.should("be.visible");
    nama.should("have.attr", "type", "text");
    nama.should("have.attr", "required");
    // nama.should("have.attr", "placeholder", " ");

    const email = cy.get("input[name='email']");
    email.should("be.visible"); // email harus terlihat
    email.should("have.attr", "type", "email text"); // email memiliki atribut type=email
    email.should("have.attr", "placeholder", " ");

    // check password
    const password = cy.get("input[name='password']");
    password.should("be.visible");
    password.should("have.attr", "type", "password");
    password.should("have.attr", "placeholder", " ");

    // check confirm password
    const confirmPassword = cy.get("input[name='confirm_password']");
    confirmPassword.should("be.visible");
    confirmPassword.should("have.attr", "type", "password");
    confirmPassword.should("have.attr", "placeholder", " ");
  });
});
