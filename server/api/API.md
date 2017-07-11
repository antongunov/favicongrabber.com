# API

All responses are returned as JSON over HTTP.

## Root Endpoint

The root endpoint for the API is http://favicongrabber.com/api/

## Grab

```
GET /api/grab/:domain
```

For instance, to grab favicons of GitHub's index page:

http://favicongrabber.com/api/grab/github.com

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

## Errors

Error messages have the following format:

```json
{
  "error": "Unresolved domain \"example.test\""
}
```
