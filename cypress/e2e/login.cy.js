describe("Login Page Test Case", () => {
  it("Visit Login Page", () => {
    cy.visit("https://poc.fitacademy.id/login");
    cy.title().should("eq", "Login - FitAcademy");
    cy.contains("Masuk ke Akun");
  });

  it("Contains Email and Password Input, Lupa password and Login Masuk", () => {
    // check email
    // cy.visit("https://poc.fitacademy.id/login");
    const email = cy.get("input[name='email']");
    email.should("be.visible"); // email harus terlihat
    email.should("have.attr", "type", "email text"); // email memiliki atribut type=email
    email.should("have.attr", "placeholder", " ");

    // check password
    const password = cy.get("input[name='password']");
    password.should("be.visible");
    password.should("have.attr", "type", "password");
    password.should("have.attr", "placeholder", " ");

    // check lupa password
    const lupaPassword = cy.get("span");
    lupaPassword.should("be.visible");
    lupaPassword.should("have.css", "color", "rgb(235, 138, 58)");

    // check button
    const button = cy.get("button");
    button.should("be.visible");
    button.should("have.css", "background-color", "rgb(33, 57, 107)");
    button.should("have.css", "color", "rgb(255, 255, 255)");
  });

  it("Menampilkan Sudah Punya Akun", () => {
    cy.contains("Sudah punya akun?");
  });

  it("Do login with null value", () => {
    // cy.visit("https://poc.fitacademy.id/login");
    const button = cy.get("button");
    button.click();
    cy.on("window:alert", (text) => {
      expect(text).to.equal("login failed"); // alert memiliki text login failed
    });
  });

  it("Do login with wrong values", () => {
    // cy.visit("https://poc.fitacademy.id/login");
    const email = cy.get("input[name='email']");
    email.type("wrong@react.test");

    const password = cy.get("input[name='password']");
    password.type("password");

    const button = cy.get("button");
    button.click();

    cy.on("window:alert", (text) => {
      expect(text).to.contains("Email atau password salah!"); // alert memiliki text login failed
    });
  });

  it("Klik Lupa Password", () => {
    // cy.visit("https://poc.fitacademy.id/login");
    const lupa = cy.get("span");
    lupa.click();
    cy.on("window:alert", (text) => {
      expect(text).to.equal("Lupa Password"); // alert memiliki text login failed
    });
  });

  it("Close Alert Lupa Password", () => {
    const button = cy.get("button[type='button']");
    button.click();
  });

  it("Do login with correct values", () => {
    // cy.visit("https://poc.fitacademy.id/login");
    const email = cy.get("input[name='email']").clear();
    email.type("gilaj87537@wisnick.com");

    const password = cy.get("input[name='password']");
    password.type("Test123!@#");

    const button = cy.get("button[type='submit']");
    button.click();

    // cy.on("window:alert", (text) => {
    //   expect(text).to.contains("welcome"); // alert memiliki text login failed
    // });

    cy.url().should("eq", "https://poc.fitacademy.id/dashboard");
  });
});
