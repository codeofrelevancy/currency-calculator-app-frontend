# Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Installation

[Install Tailwind CSS with Next.js](https://tailwindcss.com/docs/guides/nextjs)

## Automatic Installation

To automatically create a new Next.js project using the app directory:

```bash
npx create-next-app@latest --experimental-app
```

`create-next-app` now ships with TypeScript by default.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Technologies

Frontend: [Next.js](https://nextjs.org)
Backend: [Node.js](https://nodejs.org)
Database: [Firebase](https://firebase.google.com)
API: [APILayer](https://apilayer.com/marketplace/exchangerates_data-api)

Frontend deployment: [Vercel](https://vercel.com)
Backend deployment: [Render](https://render.com)

Note: Backend code is available in /backend directory under this repository.

## How does this application work?

This application is a currency conversion tool that allows users to quickly and easily convert between different currencies. The backend server is responsible for fetching the conversion rates from an external API and storing them in a Firebase database. The rates are updated six times a day, ensuring that users have access to the most accurate and up-to-date information.

On the frontend, the user interface displays a list of currencies and allows the user to select the currencies they wish to convert. When the page loads, the frontend fetches the latest conversion rates directly from the Firebase database. The user can then enter the amount they wish to convert, and the frontend will calculate the result using the fetched conversion rates.

In addition to fetching and displaying the latest conversion rates, the frontend of the application also includes a feature that displays the timestamp of the last update in relative time. This allows users to quickly see how recently the rates were updated and ensure that they are working with the most current information.

To make it even easier for users to see at a glance whether the conversion rates are up-to-date, the application uses a green or red indicator to show whether the rates have been updated within the past 24 hours. If the rates have been updated within the past day, the indicator will be green, indicating that the rates are current. If the rates have not been updated within the past 24 hours, the indicator will be red, signaling to the user that the rates may be out of date.

This feature helps ensure that users always have access to the most accurate and current conversion rates, making the application a reliable and trustworthy tool for all of their currency conversion needs.

This application is designed to be simple and easy to use, with a clean and intuitive interface that makes it easy for users to convert currencies on the go. With its reliable backend server and up-to-date conversion rates, users can trust that they are getting accurate and current information every time they use the tool.

## Headline

```markdown
Currency Calculator
```

## Footer section

```markdown
Code of Relevancy presents a user-friendly conversion calculator for both personal and business transactions, streamlining your conversion needs in one easy-to-use tool.
```

```markdown
https://www.youtube.com/@codeofrelevancy
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
