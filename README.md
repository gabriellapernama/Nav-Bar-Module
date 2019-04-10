# Abibas: An items page clone

> This module is the navigation bar microservice clone of an Adidas item product page website shown as of March 2019

## Demo

![](abibasReadMe.gif)

This demo shows the navigation bar microservice.

## Table of Contents

1. [Description](#desc)
2. [Tech Stack](#tech)
3. [Related Microservices](#micro)
4. [Dependencies](#depend)

<a name="tech"></a>
## Description

> The navigation bar module contains an expanding search bar, newsletter signup form, drop down tabs per category, and shipping/returns pop up disclosure. The search bar expands when clicked and retracts when clicked out. It also gives you suggestions according to what you type, as you type. The newsletter signup form will open when a user clicks on "Newsletter Sign Up", where a textbox is available to type in an email. Categories will expand to reveal even further product breakdown when a mouse is hovered, in which upon unhover, the categories section will close.

<a name="tech"></a>
## Tech Stack

> React | Express | MongoDB | Amazon EC2, S3 | Docker

<a name="micro"></a>
## Related Microservices

- https://github.com/team-barium/Reviews-Module
- https://github.com/team-barium/Suggestions-Module
- https://github.com/team-barium/product-details-module
- https://github.com/team-barium/Nav-Bar-Proxy

<a name="depend"></a>
### Dependencies and Requirements

From within the root directory:

Ensure that MongoDB server is running

```sh
npm install
npm run seed
npm run build
npm start
```
