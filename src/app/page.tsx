import Hero from '@/components/Hero'
import QRSection from '@/components/QRSection'
import SubscribeSection from '@/components/SubscribeSection'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <QRSection />
      <SubscribeSection />
      
      {/* Contact Us Section */}
      <section className="bg-white section-padding">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-700">
              We'd Love to Hear From You
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Have questions, suggestions, or just want to say hello? 
              We're here to listen and would love to connect with you.
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-neutral-800 text-white py-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary-400">Nubite</h3>
            <p className="text-neutral-300">
              Functional Snack Bar - The Future of Healthy Snacking
            </p>
          </div>
          
          <div className="flex justify-center space-x-8 text-sm text-neutral-400">
            <span>© 2024 Nubite. All rights reserved.</span>
            <span>•</span>
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
