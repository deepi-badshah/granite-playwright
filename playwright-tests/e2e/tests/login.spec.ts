// import { test, expect } from "@playwright/test";
// import LoginPage from "../poms/login";

// test.describe("Login Page", () => {
//   test("should login with the correct credentials", async ({ page }) => {
//     await page.goto("http://localhost:3000");
//     await page.getByTestId("login-email-field").fill("oliver@example.com");
//     await page.getByTestId('login-password-field').fill("welcome");
//     await page.getByTestId('login-submit-button').click();
//     await expect(page.getByTestId("navbar-username-label")).toContainText("Oliver Smith");
//     await expect(page.getByTestId("navbar-logout-link")).toBeVisible();
//   });
// });


// test.describe("Login Page", () => {
//   test("should login with the correct credentails", async ({ page }) => {
//     const login = new LoginPage(page);
//     await page.goto("http://localhost:3000/");
//     await login.loginAndVerifyUser({ email: "oliver@example.com", password: "welcome", username: "Oliver Smith", });
//   });
// });


import { test } from "../fixtures";

test.describe("Login Page", () => {
  test("should login with correct credentials", async ({ page, loginPage, }) => {
    await page.goto("http://localhost:3000/");
    await loginPage.loginAndVerifyUser({
      email: "oliver@example.com",
      password: "welcome",
      username: "Oliver Smith",
    });
  });
});
