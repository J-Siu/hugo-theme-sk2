## Hugo Theme - SK2 (Skeleton 2)

---

Fully functional basic Hugo theme build on top of [hugo-theme-sk1](https://github.com/J-Siu/hugo-theme-sk1).

### Demo

SK2 demo site: https://sk2.jsiu.dev/

Site content from [hugoBasicExample](https://github.com/gohugoio/hugoBasicExample)

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
--config config.toml,../config.sk2.toml \
--verbose
```

### Features

- Card list
- Collapsible table of content
- Copyright start year
- Git modify date
- Horizontal menu
- Horizontal pagination
- Minimum css
- Sub-title
- Summary

### Site Config

```toml
baseURL = "https://sk2.jsiu.dev"
title = ""
copyright = ""

enableGitInfo = false
relativeURLs = true
theme = "hugo-theme-sk2"

[Params]
maintype = ""
startdate = "2012-12-02"
subtitle = ""
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