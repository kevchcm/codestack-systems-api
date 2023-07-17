## CODESTACK SYSTEMS API 

This is a simple application that connects to an API and fetch the necessary information

## Tech

- [Laravel](https://laravel.com/) - PHP Framework
- [AlpineJS](https://alpinejs.dev/) - Javascript framework
- [Tailwind](https://tailwindcss.com/) - CSS framework

## Install

Download the project

Copy .env.example file

```sh
cp .env.example .env
```

Add API URL variable in .env file

```sh
VITE_API_URL=https://apiurl/test
```

Install the dependencies and devDependencies and start the server.

```sh
npm install
npm run dev
```

The HTML is located under /resources/views

The JS for the API connection is located under /resources/js/app.ts
