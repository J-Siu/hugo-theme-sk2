## Hugo Theme - SK2 (Skeleton 2)

Fully functional basic Hugo theme with minimum css, build on top of [hugo-theme-sk1](https://github.com/J-Siu/hugo-theme-sk1).

---

<!-- TOC -->

- [SK Themes](#sk-themes)
- [Demo](#demo)
- [Usage](#usage)
- [Testing](#testing)
- [Features](#features)
- [Site Config](#site-config)
- [Default Favicon](#default-favicon)
- [Contributors](#contributors)
- [Change Log](#change-log)

<!-- /TOC -->

### SK Themes

Theme|GitHub|Hugo|Demo|Description
---|---|---|---|---
SK1|[hugo-theme-sk1](//github.com/J-Siu/hugo-theme-sk1)|[SK1](//themes.gohugo.io/hugo-theme-sk1/)|[sk1.jsiu.dev](//sk1.jsiu.dev/)|Fully functional basic Hugo theme with no css, no javascript.
SK2|[hugo-theme-sk2](//github.com/J-Siu/hugo-theme-sk2)|[SK2](//themes.gohugo.io/hugo-theme-sk2/)|[sk2.jsiu.dev](//sk2.jsiu.dev/)|Fully functional basic Hugo theme with minimum css.
SK3|[hugo-theme-sk3](//github.com/J-Siu/hugo-theme-sk3)|[SK3](//themes.gohugo.io/hugo-theme-sk3/)|[sk3.jsiu.dev](//sk3.jsiu.dev/)|Full feature Hugo theme with Google AdSense support.

### Demo

SK2 demo site: https://sk2.jsiu.dev/ with content from [hugoBasicExample](https://github.com/gohugoio/hugoBasicExample).

### Usage

- Clone

    In site directory:

    ```sh
    git clone https://github.com/J-Siu/hugo-theme-sk2 themes/sk2
    ```

- Submodule

    In site directory:

    ```sh
    git submodule add https://github.com/J-Siu/hugo-theme-sk2 themes/sk2
    ```

### Testing

In `exampleSite`:

```sh
git clone https://github.com/J-Siu/hugo-theme-sk2 sk2
cd sk2

# Pull example site.
git submodule update --recursive --init

cd exampleSite
hugo server -D --bind :: \
--disableFastRender \
--theme sk2 \
--themesDir ../../ \
--config config.toml,../config.demo.toml \
--verbose
```

### Features

- [x] Card list
- [x] Collapsible table of content
- [x] Copyright start year
- [x] Git modify date
- [x] Horizontal menu
- [x] Horizontal pagination
- [x] Minimum css
- [x] Sub-title
- [x] Summary

### Site Config

`config.demo.toml`

```toml
baseURL = "https://sk2.jsiu.dev"
theme   = "sk2"
title   = "SK2"

[Params]
mainSections = "post"
startdate = "2012-12-02"
subtitle = "A Hugo Theme"
summary = true
toc = true
```

### Default Favicon

SK themes come with default favicon.

Disable default favicon:

```sh
# At Hugo site root
touch static/favicon.ico
```

Override default favicon:

```sh
# At Hugo site root
cp <your favicon.ico> static/favicon.ico
```

### Contributors

- [John Sing Dao Siu](https://github.com/J-Siu)

### Change Log

- 1.0.0
  - Initial Commit
- 1.0.1
  - Add images
  - Demo config
  - Fix css
  - README.md update
  - Use site.Params.mainSections
- 1.0.2
  - Add default favicon.ico
  - Change toc start level to 1
  - Update README.md