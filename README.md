# PlayStation Rental Management System

Fundamentals of Programming Final Exam  
T1[Class] Group 10 · Universitas Brawijaya

## Project Proposal

This project extends our midterm PlayStation rental calculator into a TypeScript console app (`src/index.ts`) for PlayStation rental staff. The app calculates rental costs based on the console type (PS3, PS4, or PS5), rental duration package (1, 2, or 4 hours), and customer membership status (applying a 10% discount for members when the total reaches at least Rp50,000). It also enables staff to record, view, update, delete, and search rental transactions during an operating session.

## Planned Features

- **Create** — Input customer and rental details, calculate the rental cost and member discount, and save the transaction with a unique ID.
- **Read** — Display all rental transactions or view the complete details of a single transaction by rental ID.
- **Update** — Modify an existing rental transaction by ID and automatically recalculate the total cost and discount when needed.
- **Delete** — Remove a rental transaction by ID after Y/N confirmation.
- **Search** — Find rental transactions by customer name (case-insensitive keyword) and filter by PlayStation type (PS3/PS4/PS5) or membership status.

## Progress 1

The goal of Progress 1 is to set up the public repository, document the project proposal and team responsibilities, and run a basic TypeScript program that prints `Hello console`.

## Team Members and Task Division

| Name | Student ID | GitHub | Progress 1 Task | Main Pull Request |
| --- | --- | --- | --- | --- |
| Alamsyah Wahyu Amanah | 263140701111008 | [@Al4msyah] (https://github.com/username1) | Create the public repository, configure `package.json`, `tsconfig.json`, and `.gitignore`, and add the initial `Hello console` program in `src/index.ts`. | [PR link] |
| Shefira Rahmayuni Khoirunnisa | 263140707111121 | [@username2](https://github.com/username2) | Write `README.md` (proposal, features, task division) and add the initial Project Report draft (Cover Page, 1.1, initial 1.2, and 3.2 plan) to the `docs/` folder. | [PR link] |

## How to Run

After the TypeScript setup is in place, open a terminal in the project folder and run:

```bash
npm install
npx ts-node src/index.ts
