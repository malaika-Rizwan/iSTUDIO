# iSTUDIO API

Pages Router API for the iSTUDIO site. Content lives in `data/pages.js`. There is no database.

Run `npm install`, then `npm run dev`. Routes are served at `http://localhost:3000`.

## Endpoints

### GET /api/pages

Returns every page. Add `?slug=` to return one page. An unknown slug returns 404. Any method other than GET returns 405.

Example request:

```
GET /api/pages
```

Example response `200`:

```json
{ "ok": true, "data": [{ "slug": "home", "title": "iSTUDIO", "heading": "We Make Your Home Better", "summary": "An award-winning interior design studio since 1990.", "sections": [], "updatedAt": "2026-10-09T00:00:00.000Z" }] }
```

Example request:

```
GET /api/pages?slug=contact
```

Example response `200`:

```json
{ "ok": true, "data": { "slug": "contact", "title": "Contact", "name": "Malaika Rizwan", "phone": "+92********", "email": "malaikarizwan121@gmail.com", "portfolio": "https://portfoilio-jet.vercel.app" } }
```

Example response `404`:

```json
{ "ok": false, "error": "Page not found" }
```

### GET /api/pages/[slug]

Returns one page. A missing slug returns 404. Any method other than GET returns 405.

Example request:

```
GET /api/pages/about
```

Example response `200`:

```json
{ "ok": true, "data": { "slug": "about", "title": "About", "heading": "History of Our Creation", "summary": "The story of iSTUDIO, its designers, and why clients choose the studio.", "sections": [], "updatedAt": "2026-10-09T00:00:00.000Z" } }
```

Example response `404`:

```json
{ "ok": false, "error": "Page not found" }
```

### POST /api/contact

Accepts JSON `{ "name", "email", "subject", "message" }`. All four fields are required, and `email` must contain `@`. Success returns 201. Bad input returns 400. Any method other than POST returns 405.

Example request:

```
POST /api/contact
Content-Type: application/json

{ "name": "Malaika Rizwan", "email": "malaikarizwan121@gmail.com", "subject": "Project", "message": "Hello" }
```

Example response `201`:

```json
{ "ok": true, "message": "Message received" }
```

Example response `400`:

```json
{ "ok": false, "error": "email is required" }
```

Example response `405`:

```json
{ "ok": false, "error": "Method not allowed" }
```
