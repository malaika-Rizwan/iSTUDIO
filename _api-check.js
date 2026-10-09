const assert = require("assert");
const listHandler = require("./pages/api/pages/index");
const slugHandler = require("./pages/api/pages/[slug]");
const contactHandler = require("./pages/api/contact");

function run(handler, req) {
  const res = {
    statusCode: 200,
    headers: {},
    body: null,
    setHeader(name, value) {
      this.headers[name] = value;
    },
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.body = payload;
      return this;
    },
  };
  handler(req, res);
  return res;
}

const list = run(listHandler, { method: "GET", query: {} });
assert.strictEqual(list.statusCode, 200);
assert.strictEqual(list.body.ok, true);
assert.strictEqual(list.body.data.length, 8);
assert.deepStrictEqual(
  list.body.data.map((page) => page.slug),
  ["home", "about", "services", "projects", "features", "team", "testimonials", "contact"]
);

const one = run(listHandler, { method: "GET", query: { slug: "contact" } });
assert.strictEqual(one.statusCode, 200);
assert.strictEqual(one.body.data.name, "Malaika Rizwan");
assert.strictEqual(one.body.data.phone, "+92********");
assert.strictEqual(one.body.data.email, "malaikarizwan121@gmail.com");
assert.strictEqual(one.body.data.portfolio, "https://portfoilio-jet.vercel.app");

const missingQuery = run(listHandler, { method: "GET", query: { slug: "missing" } });
assert.strictEqual(missingQuery.statusCode, 404);
assert.deepStrictEqual(missingQuery.body, { ok: false, error: "Page not found" });

const postList = run(listHandler, { method: "POST", query: {} });
assert.strictEqual(postList.statusCode, 405);

const bySlug = run(slugHandler, { method: "GET", query: { slug: "services" } });
assert.strictEqual(bySlug.statusCode, 200);
assert.strictEqual(bySlug.body.data.slug, "services");
assert.ok(Array.isArray(bySlug.body.data.sections));

const missingSlug = run(slugHandler, { method: "GET", query: { slug: "nope" } });
assert.strictEqual(missingSlug.statusCode, 404);

const putSlug = run(slugHandler, { method: "PUT", query: { slug: "home" } });
assert.strictEqual(putSlug.statusCode, 405);

const created = run(contactHandler, {
  method: "POST",
  body: { name: "Malaika", email: "malaikarizwan121@gmail.com", subject: "Hi", message: "Hello" },
});
assert.strictEqual(created.statusCode, 201);
assert.deepStrictEqual(created.body, { ok: true, message: "Message received" });

const badEmail = run(contactHandler, {
  method: "POST",
  body: { name: "Malaika", email: "not-an-email", subject: "Hi", message: "Hello" },
});
assert.strictEqual(badEmail.statusCode, 400);
assert.strictEqual(badEmail.body.ok, false);

const missingField = run(contactHandler, {
  method: "POST",
  body: { name: "Malaika", email: "a@b.com", subject: "  ", message: "Hello" },
});
assert.strictEqual(missingField.statusCode, 400);
assert.strictEqual(missingField.body.error, "subject is required");

const getContact = run(contactHandler, { method: "GET", body: {} });
assert.strictEqual(getContact.statusCode, 405);

console.log("api checks passed");
