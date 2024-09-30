This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

It contains the homepage and the user dashboard page with basic authentication.

## Prerequisites

First, install the necessary dependencies using NPM.
Refer to https://pnpm.io/installation for installation guidelines.

Then, enter the desired username and password in the local .env file (refer to .env.example for example)
along with secret key for auth.js (can be generated using 'openssl rand -base64 32' command).

## Getting Started

Run the development server using:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
