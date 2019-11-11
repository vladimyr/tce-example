# TCE Example

<p align="center">
  <a href="https://github.com/vladimyr/tce-example/raw/master/screenshot.png">
    <img src="./screenshot.png" width="480px">
  </a>
</p>

## Instructions

```sh
# inside project directory
pbcopy < tailor.patch
npm run build
npm run serve # serves content element bundle on `localhost:9090`
```

```sh
# switch to Tailor directory
pbpaste | git apply
```
