"use client";

export default function ContactClient() {
  async function handleSubmit(e: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined; }) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    try {
      const response = await fetch('/api/contact', {
        method: 'post',
        body: data,
      });
      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }
      alert('Message sent successfully. Thank you! Expect a response within a business day.');
    } catch (err) {
      console.error(err);
      alert("Message failed to send. Please try again later.");
    }
  }
  
return (
    <div className="flex flex-col justify-center items-center gap-4 bg-gray-900 h-full w-full outline-1 outline-gray-700 pt-10">

        <form className="flex flex-col w-full max-w-xl mx-auto gap-6" onSubmit={handleSubmit}>
        
          {/* Names */}
          <div className="flex w-full gap-4">
              <div className="flex flex-col gap-2 text-sm flex-1">
                <p>First name</p>
                <input 
                    id="frm-first"                  
                    type="text"
                    name="first"
                    autoComplete="given-name"
                    className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                />
              </div>            
              <div className="flex flex-col gap-2 text-sm flex-1">
                <p>Last name</p>
                <input 
                    id="frm-last"
                    type="text"
                    name="last"
                    autoComplete="family-name"
                    className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                />
              </div>            
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2 text-sm w-full">
            <p>Email</p>
            <input 
                id="email"
                type="email"
                name="email"
                autoComplete="email"                  
                className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-2 text-sm w-full">
            <p>Phone</p>
            <input 
                id="frm-phone"
                type="text"
                name="phone"
                autoComplete="tel"
                className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2 text-sm w-full">
            <p>Message</p>
            <textarea
                id="frm-message"                  
                name="message"
                className="w-full h-20 py-3 px-4 text-gray-700 bg-white border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Submit */}
          <div className="flex flex-col gap-2 text-sm w-full pt-6">              
              <button type="submit" className=" self-end flex h-12 w-24 items-center justify-center gap-2 rounded-lg border border-solid px-5 transition-colors hover:border-transparent border-white/[.145] hover:bg-gray-700 md:w-39.5 text-sm">Send Message</button>
          </div>

        </form>
                
    </div>
  );
}