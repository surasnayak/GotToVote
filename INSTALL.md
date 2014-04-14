## Installation Guide

### Server Requirements

GotToVote has a few system requirements:

- PHP >= 5.3.7
- MCrypt PHP Extension

As of PHP 5.5, some OS distributions may require you to manually install the PHP JSON extension. When using Ubuntu, this can be done via `apt-get install php5-json`.

### Install GotToVote

To run an instance of GotToVote you will need to install the essentials:
```
sudo apt-get install git curl php5-curl php5-mcrypt
sudo apt-get install nginx php5-fpm
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
```

Then you should clone an instance of GotToVote
```
git clone https://github.com/CodeForAfrica/GotToVote.git
```

In the cloned folder, install the required dependencies as such:
```
cd GotToVote
composer install
```

#### Serve GotToVote

Typically, you may use a web server such as Apache or Nginx to serve GotToVote. If you are on PHP 5.4+ and would like to use PHP's built-in development server, you may use the serve Artisan command:
```
php artisan serve
```

### Configuration

GotToVote needs almost no configuration out of the box. You are free to get started developing! However, you may wish to review the `app/config/app.php` file and its documentation. It contains several options such as `timezone` and `locale` that you may wish to change according to your application.

#### Permissions

GotToVote may require one set of permissions to be configured: folders within `app/storage` require write access by the web server.


### Development

For development, you will need a few more items.

First Node.js, that you should compile [from source](http://nodejs.org).

Then install the required dependencies:
```
npm install
bower install
```
