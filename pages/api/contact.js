const FIELDS = ["name", "email", "subject", "message"];

module.exports = function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const body = req.body;
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return res.status(400).json({ ok: false, error: "Request body must be a JSON object" });
  }

  for (const field of FIELDS) {
    const value = body[field];
    if (typeof value !== "string" || value.trim() === "") {
      return res.status(400).json({ ok: false, error: `${field} is required` });
    }
  }

  if (!body.email.includes("@")) {
    return res.status(400).json({ ok: false, error: "Email must contain @" });
  }

  return res.status(201).json({ ok: true, message: "Message received" });
};

module.exports.default = module.exports;
