# API

All responses are returned as JSON over HTTP.

## Root Endpoint

The root endpoint for the API is [http://favicongrabber.com/api](http://favicongrabber.com/api?pretty=true)

## Grab

```
GET /api/grab/:domain
```

For instance, to grab favicons of GitHub's index page open [http://favicongrabber.com/api/grab/github.com](http://favicongrabber.com/api/grab/github.com?pretty=true) in your browser:

```json
{
  "domain": "github.com",
  "icons": [
    {
      "src": "https://assets-cdn.github.com/favicon.ico",
      "type": "image/x-icon"
    },
    {
      "src": "https://assets-cdn.github.com/pinned-octocat.svg"
    },
    {
      "src": "https://github.com/fluidicon.png"
    }
  ]
}
```

## Optional Parameters

JSON in a pretty way:

```
GET /api?pretty=true
```

## Errors

Error messages have the following format:

```json
{
  "error": "Unresolved domain \"example.test\""
}
```
