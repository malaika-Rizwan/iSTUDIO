import { useState } from "react";

export default function ContactForm() {
  const [notice, setNotice] = useState("");

  async function onSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const body = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      if (response.ok && data.ok) {
        setNotice(data.message);
        form.reset();
        return;
      }
      setNotice(data.error || "Message could not be sent");
    } catch (error) {
      setNotice("Message could not be sent");
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="row g-3">
        <div className="col-md-6">
          <div className="form-floating">
            <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" />
            <label htmlFor="name">Your Name</label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-floating">
            <input type="email" className="form-control" id="email" name="email" placeholder="Your Email" />
            <label htmlFor="email">Your Email</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating">
            <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject" />
            <label htmlFor="subject">Subject</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating">
            <textarea className="form-control" placeholder="Leave a message here" id="message" name="message" style={{ height: "150px" }}></textarea>
            <label htmlFor="message">Message</label>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
        </div>
        {notice ? <div className="col-12"><p className="mb-0">{notice}</p></div> : null}
      </div>
    </form>
  );
}
