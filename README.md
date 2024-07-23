## Project Overview

This project is a Next.js application that displays a gallery of books fetched from the Google Books API. It presents book information in an interactive and user-friendly interface, showcasing modern web development practices.

Here is a link to screenrecording of the project: https://www.awesomescreenshot.com/video/29821132?key=6d545ada904cb54bb77d9d9b2efe7f57

## Features

-   Responsive design for both desktop and mobile devices
-   Book listing with pagination
-   Clickable book titles and thumbnails leading to a detail page
-   Detailed book view displaying:
    -   Title
    -   Author(s)
    -   Publication date
    -   Thumbnail
-   Back button on detail page to return to the list view
-   Search functionality for books by title
-   Filtering of results by category (if applicable)
-   Comments form with basic data validation (front-end only)

## API

The application uses the Google Books API.
API Base URL: `https://www.googleapis.com/books/v1`

Key endpoints used:

-   Book search: `/volumes?q=search+terms`
-   Book details: `/volumes/{bookId}`

## Technical Stack

-   Built with [Next.js](https://nextjs.org/)
-   Styled using [Tailwind CSS](https://tailwindcss.com/)
-   [CVA (Class Variance Authority)](https://cva.style/docs) for creating a flexible button component
-   TypeScript for type safety

## Code Design and Reusability

-   Utilizes Next.js' built-in API routes for server-side operations
-   CVA for creating reusable and flexible UI components
-   [Any other patterns or practices you've used]

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
