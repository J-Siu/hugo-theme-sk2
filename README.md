## Hugo Theme - SK2 (Skeleton 2)

Fully functional basic Hugo theme with minimum css, build on top of [hugo-theme-sk1](https://github.com/J-Siu/hugo-theme-sk1).

### Demo

SK2 demo site: https://sk2.jsiu.dev/

Example site content from [hugoBasicExample](https://github.com/gohugoio/hugoBasicExample)

### Usage

- Clone

    In site directory:

    ```sh
    git clone https://github.com/J-Siu/hugo-theme-sk2 theme/sk2
    ```

- Submodule

    In site directory:

    ```sh
    git submodule add https://github.com/J-Siu/hugo-theme-sk2 theme/sk2
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

### Repository

- [hugo-theme-sk2](https://github.com/J-Siu/hugo-theme-sk2)

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