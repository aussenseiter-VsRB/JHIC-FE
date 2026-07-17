
# Coding Standards

These are the rules we follow when writing code for this project. They are broken into four layers, each handling a different part of how to the build software.

---

## Writing Functions & Endpoints

**This is about how you write a single piece of code.**

**Rule: Make it reliable, safe, and consistent.**

- **Don't repeat yourself (DRY).** If you write the same logic in more than one place, pull it into a single function. That way, if the logic changes, you only update it once.
- **Check input right away (Fail Fast).** The moment a request comes in, validate the data. If something is missing or wrong, reject it immediately instead of letting bad data travel through the system and cause confusing errors later.
- **Give every request a unique ID (Idempotency).** If a user retries the same action (like double-clicking "Pay"), the system should recognize it as the same request and not process it twice. This prevents duplicate transactions.

---

## How Files & Components Work Together

**This is about how your code is organized and how different parts communicate.**

**Rule: Keep parts separate. No file should know too much about the internals of another.**

- **Split your app into clear layers (SoC / SRP).** Each file or module should have one job. For example: routes handle incoming requests, services contain business logic, and models handle data. Don't mix them together.
- **Code to interfaces, not implementations (DIP / OCP / LSP).** High-level logic should depend on abstract contracts, not on specific code. This makes it easy to swap out or extend parts of the system without breaking everything.
- **Only talk to your direct neighbors (Law of Demeter).** A function should only interact with the objects it receives directly. Avoid chains like `user.orders.items[0].price` scattered across your codebase. If you need deep data, pass it down properly.

---

## What We Build (and What We Don't)

**This is about deciding what code to write in the first place.**

**Rule: Don't build things you don't need, and don't overcomplicate simple things.**

- **Solve today's problem, not a hypothetical future one (YAGNI).** Don't add features or abstractions based on guesses about what the business might want later. Build what is needed now.
- **Keep it as simple as possible (KISS).** If a straightforward approach works and is safe, use it. Don't reach for complex patterns just because they exist.

---

## Deployment & Operations

**This is about how the app behaves when it's running on a server.**

**Rule: Keep the app stateless and easy to deploy.**

- **Treat the app as a disposable machine (12-Factor App).** The app should not store any data locally between requests. All settings should come from environment variables. This makes it easy to restart, scale, or replace instances without losing anything.

---

## When a task is done

review the code and ask yourself these three questions:

1. **Is it simple and necessary right now?** (KISS, YAGNI, Convention)
2. **Is it isolated and predictable?** (SoC, SOLID, LoD, DRY)
3. **Is it safe to run and deploy?** (Fail Fast, Idempotency, 12-Factor)
