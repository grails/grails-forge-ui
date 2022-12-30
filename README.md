# Grails Application Forge UI

[![Build Status](https://github.com/grails/grails-forge-ui/workflows/Publish/badge.svg)](https://github.com/grails/grails-forge-ui/actions)

This project builds the [Grails Application Forge UI](https://start.grails.org).

## To build the site for CI run:

```bash
./gradlew build --console=plain
```

## For local development mimicking production launch site:

- To bypass CORS restrictions, Launch the Local Version / Proxy Server

```
cd ./dev-proxy-server
npm run start
```

- Start the dev build of the site

```
cd ./app/launch/
npm run start:local
```

## Running a Grails Forge API locally to dev against

If you want to run against a version of the starter api (Micronaut Starter Api)[https://github.com/grails/grails-forge]

Outside of this project pull down that repo

```bash
git clone git@github.com:grails/grails-forge.git
cd grails-forge
export CORS_ALLOWED_ORIGIN=http://localhost:3000
./gradlew grails-forge-web-netty:run
```

Then start up a version server to provide that instance

```
cd ./dev-proxy-server
npm run start:starter
```

## Updating The Version feed

You can find the version feed file at [./app/launch/public/grails-version-feed.json](./app/launch/public/grails-version-feed.json). It must be in valid JSON format, so beware of these gotyas!

**Keys must be quoted**

- GOOD

  ```
  {
      "key": "RELEASE",
      "baseUrl": "https://start.grails.org",
      "order": 0
  }
  ```

- BAD

  ```
  {
      key: "RELEASE",
      baseUrl: "https://start.grails.org",
      order: 0
  }
  ```

**No trailing comma**

- GOOD

  ```
  {
      "key": "RELEASE",
      ...
  },
  {
      "key": "NEXT",
      ...
  }
  ```

- BAD

  ```
  {
      "key": "RELEASE",
      ...
  },
  {
      "key": "NEXT",
      ...
  },
  ```
