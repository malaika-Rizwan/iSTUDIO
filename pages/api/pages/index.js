const { pages, findPage } = require("../../../data/pages");

function readSlug(query) {
  const value = query.slug;
  if (Array.isArray(value)) return value[0];
  return value;
}

module.exports = function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const slug = readSlug(req.query);
  if (slug === undefined) {
    return res.status(200).json({ ok: true, data: pages });
  }

  const page = findPage(String(slug));
  if (!page) {
    return res.status(404).json({ ok: false, error: "Page not found" });
  }

  return res.status(200).json({ ok: true, data: page });
};

module.exports.default = module.exports;
