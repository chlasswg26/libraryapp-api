<p align="center">
  <img alt="Library App API" src="https://github.com/chlasswg26/mwlibrary/blob/master/src/images/bookshelf.png" width="300">
</p>
<p align="center">
  REST API for the most wanted library apps (Backend).<br/>
</p>


[![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://github.com/chlasswg26/)


![GitHub](https://img.shields.io/github/license/chlasswg26/libraryapp-api?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/chlasswg26/libraryapp-api?style=for-the-badge)
![GitHub followers](https://img.shields.io/github/followers/chlasswg26?style=for-the-badge)

[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/chlasswg26/libraryapp-api/)

---

## Features

- CRUD Data
- Upload image
- JWT Authorization
- Authentication
- CORS
- Database use for MySQL
- Nodemailer (smtp)
- JSON Response
- and many more

Currently supported ExpressJS: `>=4.17.1`

### Dependencies

List of dependencies using this project.

| Name | Repository |
| ------ | ------ |
| Express JS | [expressjs/express](https://github.com/expressjs/express) |
| JSON WEB TOKEN | [auth0/node-jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) |
| Nodemailer | [nodemailer/nodemailer](https://github.com/nodemailer/nodemailer) |
| Redis | [NodeRedis/node-redis](https://github.com/NodeRedis/node-redis) |
| Multer | [expressjs/multer](https://github.com/expressjs/multer) |

## Requirements

* [`yarn`](https://yarnpkg.com/getting-started/install) or [`npm`](https://www.npmjs.com/)

## Optional setup

Open `.ENV` and replace with your config
```shell
SITE_NAME=MWLibrary

HOST=0.0.0.0
PORT=8000

SECRET_KEY=
REFRESH_SECRET_KEY=
TOKEN_LIFE=4h
REFRESH_TOKEN_LIFE=1d

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_DATABASE=db_libraryapi

SERVICE_MAILER=
SERVICE_EMAIL=
SERVICE_EMAIL_PASSWORD=
```

## Usage for development

1. Open your terminal or command prompt
2. Type `git clone https://github.com/chlasswg26/libraryapp-api.git`
3. Open the folder and type `yarn install or npm install` for install dependencies
6. Type `yarn start` or `npm start` for run this app.
7. Well done..

## Postman collection

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/d13765413e87454f9f1e)


### Related Projects
This project is related to several platforms

* Frontend [https://github.com/chlasswg26/mwlibrary](https://github.com/chlasswg26/mwlibrary)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

You will also see any lint errors in the console.

### `yarn test`

Middleware testing (experimental)
