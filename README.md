## Introduction

This is a seed projekt built with laravel, react (with mix), react-bootstrap built with larvel modules.

The ide is to use this projekt as a first template of to faster be able to start new projekts.
This projetct may be expanded if its a very general functionality and that could be reused, else all more projket specifik belongs to its seeded projects.

If you want to add funktionality to this projekt do that throw PRs!

The project includes:

-   [Laravel 8](https://laravel.com/docs/8.x)
-   [Laravel Modules](https://nwidart.com/laravel-modules/v6/introduction)
-   [Laravel Sanctum](https://laravel.com/docs/8.x/sanctum)
-   [Laravel Fortify](https://laravel.com/docs/8.x/fortify)

*   [React](https://reactjs.org/)
*   [React Router](https://reactrouter.com/)
*   [React Bootstrap](https://react-bootstrap.github.io/)

## Instalation

Make sure this is installed.

-   docker
-   docker-compose
-   node js
-   yarn
-   php
-   composer

You may have to activeate iconv extionsion in php.init

/etc/php/php.init

```
extension=iconv
```

You can add sail as an alias (linux or mac)

```
alias sail='[ -f sail ] && bash sail || bash vendor/bin/sail'
```

on windows mabye to path?

## Start project

Install php dependencies

> composer install

Start dev backend

> ./vendor/bin/sail up

Install js dependencies

> yarn

Start dev frontend

> yarn run watch

You can run yarn in side of one module or inside of the projects root.
Just make sure to add dependenscs to both root and module..

## Build js

To build production

> yarn run prod

To build development

> yarn run dev

## Adding a module

This is just using an "modefied" version of [laravel modules](https://nwidart.com/laravel-modules/v6/introduction)

> sail php artisan module:make MODULE_NAME --[options]

options:

-   web - generates modules with a temp react app. Includes router and 2 pages.
-   api - generates an module with out any views or react.
-   plane - just dir structure of one module.

### web option

This includes some costume and modifyed stubs.

```
Modules/
  ├── Demo/
      ├── Resources/
          ├── assets/
              ├── js/
                ├── app/
                    ├── components/
                        ├── App.js
                        ├── AppRouter.js
                    ├── pages/
                        ├── Page1.js
                        ├── Page2.js
                    ├── index.js
                ├── app.js
                ├── bootstrap.js
              ├── sass/
                ├── app.scss
          ├── views/
      ├── Routes/
          ├── api.php
          ├── web.php
      ├── package.json
      ├── webpack.mix.js
```

You can also see this in the demo module in this projects Modules folder.