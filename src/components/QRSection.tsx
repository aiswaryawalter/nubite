'use client'

import Image from 'next/image'

export default function QRSection() {
  const surveyUrl = "https://forms.google.com/your-survey-url" // Replace with actual Google Form URL
  
  const openSurvey = () => {
    window.open(surveyUrl, '_blank')
  }

  return (
    <section id="qr-section" className="bg-white section-padding">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-700">
            Help Us Shape the Future of Snacking
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Your feedback is crucial in creating the perfect functional snack bar. 
            Scan the QR code or click below to share your thoughts.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
          <div className="space-y-4">
            <div className="relative w-48 h-48 bg-neutral-100 rounded-lg border-2 border-dashed border-neutral-300 flex items-center justify-center">
              <Image
                src="/qr-placeholder.png"
                alt="Survey QR Code"
                fill
                className="object-contain p-4"
              />
            </div>
            <p className="text-sm text-neutral-500">Scan to open survey</p>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-neutral-800">
                Quick Access
              </h3>
              <p className="text-neutral-600">
                Prefer to click? Use the button below to open the survey directly.
              </p>
            </div>
            
            <button
              onClick={openSurvey}
              className="btn-secondary text-lg px-8 py-4"
            >
              Open Survey
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
