const { findPage } = require("../../../data/pages");

module.exports = function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const slug = Array.isArray(req.query.slug) ? req.query.slug[0] : req.query.slug;
  const page = findPage(String(slug || ""));
  if (!page) {
    return res.status(404).json({ ok: false, error: "Page not found" });
  }

  return res.status(200).json({ ok: true, data: page });
};

module.exports.default = module.exports;
