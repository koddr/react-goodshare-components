<p align="center">
  <img width="100%" src="https://user-images.githubusercontent.com/11155743/42503084-66a22c8a-8440-11e8-9299-a7a859a301ee.png" alt="react-goodshare-components logo"/>
</p>

# react-goodshare-components [WIP]

![npm version](https://badge.fury.io/js/react-goodshare-components.svg) [![react js site](https://img.shields.io/badge/React-16.x_or_newer-blue.svg?style=flat)](https://reactjs.org) [![license](https://img.shields.io/badge/license-MIT-red.svg?style=flat)](https://github.com/koddr/react-goodshare-components/blob/master/LICENSE)

> React.js components for social share. A simple way to share a link on the pages of your website in the most popular (and not so) social networks. Powered by [goodshare.js](https://github.com/koddr/goodshare.js) project.

### Features

React-ready&trade; components, simple install, extensive documentation, developer support, **SEO friendly**, many options for customization of appearance, **clean code without scripts tracking user activity** on the page, **high speed**.

Beautiful button design **already included**. Just open documentation, copy-paste and save!

We're using [Flow](https://flow.org/en/): A **Static Type** Checker for JavaScript.

### Documentation

- [https://react-goodshare-components.netlify.com](https://react-goodshare-components.netlify.com)

### Requirements

- React >= 16.x
- React DOM >= 16.x

## Install

```bash
$ npm i --save react-goodshare-components
```

## Usage

Schema for name of React goodshare.js components:

- `<...>Button` — full styled component (include styles, share button and counter)
- `<...>ShareLink` — only share link (include share link without any styles)
- `<...>ShareCounter` — only share counter (include share counter without any styles)

Where `<...>` is the name of social network or messenger (first letter is capital, of course). For example, if you're want to render Facebook social network all-in-one button (with share link, counter and awesome styles):

```js
import { FacebookButton } from "react-goodshare-components";

<FacebookButton />;
```

<p align="center">
  <img width="100%" src="https://user-images.githubusercontent.com/11155743/42575478-4a853652-8529-11e8-8748-a72972d0417c.png" alt="react-goodshare-components facebook"/>
</p>

```js
import { FacebookButton } from "react-goodshare-components";

<FacebookButton buttonTheme="outlined" />
<FacebookButton buttonTheme="gradient" />
```

<p>
  <img width="100%" src="https://user-images.githubusercontent.com/11155743/42575425-1a80b40e-8529-11e8-979e-f75802e1bacb.png" alt="react-goodshare-components facebook"/>
</p>

### Author & maintainers

Development and maintenance engaged by [Vic Shóstak](https://github.com/koddr) (aka Koddr).
If you want to say «thank you» and/or ask me about `react-goodshare-components` — [create new issue](https://github.com/koddr/react-goodshare-components/issues/new).

---

> ### Your assistance will help make project even better!
>
> - [Donate with PayPal or Credit Card](https://www.paypal.me/koddr/9.99usd)
> - [Donate with Yandex.Money](https://money.yandex.ru/to/41001601525977/599)
>
> #### Thanks for supporting!

---

### License

[The MIT License (MIT)](https://github.com/koddr/react-goodshare-components/blob/master/LICENSE)
