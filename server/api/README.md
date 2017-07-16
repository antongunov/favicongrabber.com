# Service API reference

## Overview

All responses are returned as JSON over HTTP.

## Root endpoint

The root endpoint for the API is [http://favicongrabber.com/api](http://favicongrabber.com/api?pretty=true).

## Grab favicons

```http
GET /api/grab/:domain
```

For instance, to grab favicons from GitHub's index page open [/api/grab/github.com](http://favicongrabber.com/api/grab/github.com?pretty=true) in your browser:

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

## Optional parameters

JSON in a pretty way:

```http
GET /api?pretty=true
```

## Error handling

Error messages have the following format:

```json
{
  "error": "Unresolved domain \"example.test\""
}
```
