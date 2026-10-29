# Swag Labs Login Test Plan

## Application Overview

Validate Swag Labs login behavior for the documented standard_user account and the locked_out_user account. The first should authenticate and show the inventory; the second should remain unauthenticated and show the correct locked-out error.

## Test Scenarios

### 1. Login Authentication

**Seed:** `tests/seed.spec.ts`

#### 1.1. Login succeeds with standard_user

**File:** `tests/swag-labs-login.spec.ts`

**Steps:**
  1. Start from a fresh browser state and navigate to https://www.saucedemo.com/.
    - expect: The Swag Labs login page is displayed with username and password fields and a Login button.
  2. Enter standard_user as the username and secret_sauce as the password.
    - expect: Both credential fields accept the entered values.
  3. Select Login.
    - expect: The browser navigates to https://www.saucedemo.com/inventory.html.
    - expect: The page displays the Products heading and the product inventory, including Sauce Labs Backpack.
    - expect: No login error is displayed.

#### 1.2. Login is rejected with locked_out_user

**File:** `tests/swag-labs-login.spec.ts`

**Steps:**
  1. Start from a fresh browser state and navigate to https://www.saucedemo.com/.
    - expect: The Swag Labs login page is displayed with username and password fields and a Login button.
  2. Enter locked_out_user as the username and secret_sauce as the password.
    - expect: Both credential fields accept the entered values.
  3. Select Login.
    - expect: Authentication is denied and the browser remains on https://www.saucedemo.com/.
    - expect: The login page displays the exact error: “Epic sadface: Sorry, this user has been locked out.”
    - expect: The inventory page is not displayed.
