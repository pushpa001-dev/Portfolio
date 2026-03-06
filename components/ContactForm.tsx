export default function ContactForm() {
    return (
      <section className="p-8 max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <form action="https://formsubmit.io/send/your-email" method="POST" className="space-y-4">
          <input name="name" placeholder="Your Name" className="w-full border p-2 rounded-md" required />
          <input name="email" type="email" placeholder="Your Email" className="w-full border p-2 rounded-md" required />
          <textarea name="message" placeholder="Your Message" className="w-full border p-2 rounded-md" rows={4} required />
          <button type="submit" className="bg-black text-white px-6 py-2 rounded-md">Send Message</button>
        </form>
      </section>
    )
  }