# Next.js User Dashboard Application

This project is a [Next.js](https://nextjs.org) application bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

The app features:

1. **Homepage** (also serves as the login page)
2. **Dashboard Page** (after login)
3. **User Details Page** (view detailed information about users)

## Features

- Basic authentication via username and password.
- A user dashboard with search and data display features.
- A detailed user information page to view individual user profiles.

## Prerequisites

To run this project, ensure the following prerequisites are met:

- **Node.js**: You need to have Node.js installed on your machine. [Download Node.js here](https://nodejs.org/).
- **PNPM**: The project uses PNPM as the package manager. Refer to [https://pnpm.io/installation](https://pnpm.io/installation) for installation guidelines.

After PNPM is installed, follow these steps:

1. **Install Dependencies**:
   Navigate to the project root and run the following command to install the necessary dependencies:

   \`\`\`bash
   pnpm install
   \`\`\`

2. **Environment Variables**:
   Configure your local environment variables by creating a `.env` file based on the provided `.env.example`. Set the following:
   - `USERNAME`: Your desired username for login.
   - `PASSWORD`: Your desired password for login.
   - `AUTH_SECRET_KEY`: A secret key for authentication, which can be generated using the following command:
     \`\`\`bash
     openssl rand -base64 32
     \`\`\`

## Pages Overview

### 1. Homepage (Login)

The homepage serves as the login page for users to access the dashboard. Authentication is based on the username and password set in the `.env` file.

### 2. Dashboard Page

After logging in, users are directed to the dashboard, which displays user data in a searchable table format. Users can:

- Search for specific entries in the user data.
- Navigate to individual user details.

### 3. User Details Page

Clicking on a user entry in the dashboard directs users to the **User Details Page**. This page displays detailed information about the selected user.

## Getting Started

To run the project locally:

1. **Start the Development Server**:
   Use the following command to start the development server:

   \`\`\`bash
   pnpm dev
   \`\`\`

2. **View in Browser**:
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.
