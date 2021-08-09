Make sure this is installed.

* docker
* docker-compose
* node js
* yarn
* php
* composer


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


## Build js

To build production
> yarn run prod

To build development
> yarn run dev