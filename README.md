# Netflix with Next.js 14, Server Actions, React, Prisma, Tailwind, PostgreSQL

This is a repository Netflix Next.js 14, Server Actions, React, Prisma, Tailwind, PostgreSQL

Key Features:

- Auth
- Home
- Movies
- TV Shows
- Recently Added
- My List
- PostgreSQL
- Prisma ORM
- shadcnUI & TailwindCSS

### Prerequisites

**Node version 18.x.x**

### Cloning the repository

```shell
git clone https://github.com/lace04/Nextflix-nextjs14.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
DATABASE_URL=

NEXTAUTH_URL=
NEXTAUTH_SECRET=


# Github
GITHUB_ID=
GITHUB_SECRET=

# Google
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# Nodemailer
EMAIL_SERVER_USER=
EMAIL_SERVER_PASSWORD=
EMAIL_SERVER_HOST=
EMAIL_SERVER_PORT=
EMAIL_FROM=
```

### Setup Prisma

Add SQL Database

```shell
npx prisma generate
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |
