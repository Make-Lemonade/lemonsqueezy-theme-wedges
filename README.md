# Lemon Squeezy Theme

A "theme" in Lemon Squeezy is a group of files and assets that dictate the overall appearance of a store’s website. Themes allow store owners to control all aspects of the presentation of their website from global settings all the way down to the style and content of individual elements on the page.

A theme is used to define the style and content of each page of the website. Pages are generally constructed by selecting individual blocks of content known as "wedges".

This repo serves are a starter template and contains everything required for building a theme for Lemon Squeezy.

## Usage

Themes in Lemon Squeezy are built on top of the excellent [Gridsome](https://gridsome.org/) framework and, as such, the same workflow is used to build and develop themes. To get started, follow the steps below.

1. Copy the `.env.example` file to `.env` and fill in the details:

```
cp .env.example .env
```

2. Install the project dependencies:

```
yarn
// or
npm install
```

3. Run the project locally:

```
yarn develop
// or
npm run develop
```

4. Navigate to [http://localhost:8080/__wedges](http://localhost:8080/__wedges) to preview and develop your wedges.

## Wedges

A theme "wedge" can be thought of as a section of content on a page (e.g. a header, a hero section, a testimonial section, a pricing section, a product detail section, a product grid, etc). From a technical point of view, a wedge is represented by HTML and CSS in the form of a [Vue component](https://vuejs.org/) with the following characteristics:

* A wedge can have settings defined in the component props. These can be controlled by the end-user in the Lemon Squeezy editor.
* Wedges can query a GraphQL data layer using a <static-query> block. Queried data is made available to the component in a `$page` variable. This is powered by our API via our [Gridsome plugin](https://github.com/Make-Lemonade/gridsome-lemonsqueezy).
* There is no restriction on how to style wedges using CSS. However, [Tailwind CSS](https://tailwindcss.com/) is recommended.
* Wedges are not nestable.

Wedges are available in the `/wedges` directory.

## Elements

A wedge can contain any number of Elements. Elements are pieces of content within a wedge that can be edited by the end-user in the Lemon Squeezy editor (e.g. text, heading, button, media etc). We provide a pre-built selection of Elements that is included in each theme via the [@lemonsqueezy/theme-elements](https://github.com/Make-Lemonade/lemonsqueezy-theme-elements) package. However, developers are free to define create own elements if they wish.

## theme.json

Each theme requires a `theme.json` file. This is a JSON file that represents all of the information about a theme, including any meta information, global settings, wedges and elements. We provide a helpful command via our [@lemonsqueezy/theme-schema](https://github.com/Make-Lemonade/lemonsqueezy-theme-schema) package to generate the `theme.json` file for you based on the files within your theme so you don't have to do this manually.

```
ls-theme generate
```

This package also provides a `ls-theme validate` command to validate a `theme.json` file is valid.

## theme-config.json

A `theme-config.json` file is a representation of the saved state of a site in Lemon Squeezy, and defines which wedges appear on which pages, as well as their elements, settings and order. Normally, you won't use this when developing a theme. Instead you should use the `/__wedges` endpoint to develop and test your wedges.
