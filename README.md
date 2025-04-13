Clock App

**Warning:** This project has been abandoned in favor of the [Clock Edge App](https://github.com/Screenly/Playground/tree/master/edge-apps/clock).

This is a fork of the Screenly Clock App [Screenly Clock App](https://github.com/Screenly/clock-app).

You can view the live demo at [clock.aks.one](https://clock.aks.one). The clock should automatically detect your local time zone and display the correct time.

## Requirements

Install [Wrangler](https://developers.cloudflare.com/workers/wrangler/)

```bash
$ npm install -g wrangler
```

Login to Cloudflare

```bash
$ wrangler login
```

Run the project in dev mode

```bash
$ wrangler dev
```

Publish worker

```bash
$ wrangler publish --env [environment name]
```
