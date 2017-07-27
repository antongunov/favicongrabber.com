# Favicon Grabber

[Favicon Grabber](http://favicongrabber.com/) is an online service to grab favicons from any domain.

## API

Favicon Grabber API is simple and has the one endpoint. For instance, to grab favicons from [DigitalOcean](https://digitalocean.com/)'s index page open [http://favicongrabber.com/api/grab/digitalocean.com](http://favicongrabber.com/api/grab/digitalocean.com?pretty=true) in your favorite browser:

```json
{
  "domain": "digitalocean.com",
  "icons": [
    {
      "src": "https://www.digitalocean.com/favicon-97c70234.png"
    },
    {
      "src": "https://www.digitalocean.com/apple-touch-icon.png"
    },
    {
      "sizes": "512x512",
      "src": "http://assets.digitalocean.com/favicon.ico",
      "type": "image/png"
    },
    {
      "sizes": "180x180",
      "src": "https://www.digitalocean.com/apple-touch-icon.png",
      "type": "image/png"
    }
  ]
}
```

For the full description, please see [Service API reference](server/api/README.md).

## License
  
The code is available under the [MIT License](LICENSE).
