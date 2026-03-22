# brdgm.me – Board Game Solo Apps

Landing page for [brdgm.me](https://brdgm.me), listing web applications for playing board game solo modes.

The game list is maintained in [games-index.json](games-index.json).

## Local Development

Because the page loads `games-index.json` via `fetch`, it must be served over HTTP (not opened as a `file://` URL directly in the browser).

Run a local HTTP server with:

```bash
npx serve .
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.
