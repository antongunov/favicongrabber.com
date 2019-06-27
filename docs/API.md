# Service API reference

## Overview

[Favicon Grabber](https://favicongrabber.com/) API is simple and has the one endpoint. The API does not require authentication but has the following restrictions: 100 requests per minute from one IP address and each API request should specify a valid `User-Agent` header.

The root endpoint for the API is [https://favicongrabber.com/api](https://favicongrabber.com/api?pretty=true) and all responses are returned as JSON(P) over HTTP.

The API supports requests and responses using [Cross-Origin Resource Sharing](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) so you can send [XHR](https://en.wikipedia.org/wiki/XMLHttpRequest) requests from browsers using a client-side web application served from any domain.

## Grab favicons

In order to grab favicons for a website send a `GET` request to the API endpoint `/api/grab/:domain`, where `:domain` is a required parameter that should be equal to the valid [domain name syntax](https://en.wikipedia.org/wiki/Domain_Name_System#Domain_name_syntax). 

For instance, to grab favicons from [github.com](https://github.com/) domain open [https://favicongrabber.com/api/grab/github.com](https://favicongrabber.com/api/grab/github.com?pretty=true) in your favorite browser and you must see next JSON response:

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

Property `domain` contains the value of `:domain` parameter. The property `icons` contains an array of `icon` objects and may be empty. Any `icon` object can have three properties, the values of which are strings.

Description properties of `icon` object:

* property `src` contains an absolute URL for a favicon image and is required and unique;
* property `type` equals an [MIME-type](https://en.wikipedia.org/wiki/Media_type)'s favicon image;
* property `sizes` contains size's favicon image and in a simple case has the following format: `HEIGHTxWIDTH` in pixels (for a full description, see [HTML5 Links](https://www.w3.org/TR/2011/WD-html5-20110113/links.html#attr-link-sizes)). 

## Optional parameters

There are two optional parameters for the API:

* `pretty=true` for formatting JSON response;
* `callback=done` for [JSONP](https://en.wikipedia.org/wiki/JSONP) response, where `done` is a variant of the name of the JSONP function.

## Error handling

The API uses HTTP response codes to indicate API errors. All error messages have the following format:

```json
{
  "error": "Unresolved domain name."
}
```

## Ecosystem

Available third party modules (using [favicongrabber](favicongrabber.com) APIs)

-   [favicongrab](https://github.com/anubhavsrivastava/favicongrab) - A module for fetching Favicon of any web site.
-   [favicon-downloader](https://github.com/anubhavsrivastava/favicon-downloader) - A module for downloading Favicon of any web site.
-   [favicon-downloader-cli](https://github.com/anubhavsrivastava/favicon-downloader-cli) - CLI for favicon-downloader module
