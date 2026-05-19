# Hugo Theme - SK2 (Skeleton 2) [![Paypal donate](https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif)](https://www.paypal.com/donate/?business=HZF49NM9D35SJ&no_recurring=0&currency_code=CAD)

Demo/Tutorial Hugo theme. Fully functional with minimum css, no javascript, build on top of [hugo-theme-sk1](https://github.com/J-Siu/hugo-theme-sk1).

---

### Table Of Content

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
- [License](#license)
<!-- /TOC -->

### SK Themes

| Theme | GitHub                                              | Hugo                                      | Demo                            | Description                                                   |
| ----- | --------------------------------------------------- | ----------------------------------------- | ------------------------------- | ------------------------------------------------------------- |
| SK1   | [hugo-theme-sk1](//github.com/J-Siu/hugo-theme-sk1) | [SK1](//themes.gohugo.io/hugo-theme-sk1/) | [sk1.jsiu.dev](//sk1.jsiu.dev/) | Fully functional basic Hugo theme with no css, no javascript. |
| SK2   | [hugo-theme-sk2](//github.com/J-Siu/hugo-theme-sk2) | [SK2](//themes.gohugo.io/hugo-theme-sk2/) | [sk2.jsiu.dev](//sk2.jsiu.dev/) | Fully functional basic Hugo theme with minimum css.           |
| SK3   | [hugo-theme-sk3](//github.com/J-Siu/hugo-theme-sk3) | [SK3](//themes.gohugo.io/hugo-theme-sk3/) | [sk3.jsiu.dev](//sk3.jsiu.dev/) | Full feature Hugo theme with Google AdSense support.          |

### Demo

SK2 demo site: https://sk2.jsiu.dev/ with content from [hugoBasicExample](https://github.com/J-Siu/hugoBasicExample).

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

```sh
git clone https://github.com/J-Siu/hugo-theme-sk2 sk2
cd sk2

# Pull example site.
git submodule update --recursive --init

cd exampleSite
hugo server -D --bind :: \
--config config.toml,../config.demo.toml \
--disableFastRender \
--renderToMemory \
--theme sk2 \
--themesDir ../../
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

- [CHANGELOG.md](CHANGELOG.md)

### License

The MIT License (MIT)

Copyright (c) 2025 John Siu

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
