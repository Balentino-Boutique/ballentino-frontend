export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="text-center py-16 md:py-24 bg-white px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-melodrama mb-4 text-black">
          Contact Us
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          We're here to help with any questions or concerns
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-melodrama text-accent mb-4">Get in Touch</h2>
            <p className="text-gray-300">
              Email: support@balentino.com<br />
              Phone: +1 234 567 8900<br />
              Hours: Monday - Friday, 9am - 5pm
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-melodrama mb-2">Name</label>
              <input
                type="text"
                className="w-full bg-gray-900 border border-gray-800 rounded-md px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-melodrama mb-2">Email</label>
              <input
                type="email"
                className="w-full bg-gray-900 border border-gray-800 rounded-md px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-melodrama mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full bg-gray-900 border border-gray-800 rounded-md px-4 py-2"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-white py-3 rounded-md hover:bg-accent/90 transition-colors font-melodrama"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 