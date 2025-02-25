import { test, expect, type Page } from "@playwright/test";

const UI_URL = "http://localhost:5173/";

test("should allow the user to sign in", async ({ page }) => {
  await page.goto(UI_URL);

  // get the sign in button
  await page.getByRole("link", { name: "Sign in" }).click();

  await expect(page.getByRole("heading", { name: "Sign in" })).toBeVisible();
  await page.locator("[name=email]").fill("example@123.com");
  await page.locator("[name=password]").fill("123456789");

  await page.getByRole("button", { name: "Sign in" }).click();
  await expect(page.getByTestId("Sign in Successfull")).toBeVisible();

  await expect(page.getByRole("link", { name: "My Bookings" })).toBeVisible();
  await expect(page.getByRole("link", { name: "My Hotels" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Sign out" })).toBeVisible();
});

test("should allow the user to register", async ({ page }) => {
  const testEmail = `test_register_${Math.floor(
    Math.random() * 1000
  )}@test.com`;

  await page.goto(UI_URL);

  await page.getByRole("link", { name: "Sign in" }).click();
  await page
    .getByRole("link", { name: "Click here to create an account" })
    .click();

  await expect(
    page.getByRole("heading", { name: "Create an account" })
  ).toBeVisible();

  await page.locator("[name=firstName]").fill("test_firstName");
  await page.locator("[name=lastName]").fill("test_lastName");
  await page.locator("[name=email]").fill(testEmail);
  await page.locator("[name=password]").fill("123456789");
  await page.locator("[name=confirmPassword]").fill("123456789");

  await page.getByRole("button", { name: "Create Account" }).click();
  await expect(page.getByTestId("Registration Successfull")).toBeVisible();

  await expect(page.getByRole("link", { name: "My Bookings" })).toBeVisible();
  await expect(page.getByRole("link", { name: "My Hotels" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Sign out" })).toBeVisible();
});
