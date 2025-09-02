'use client'

export default function Hero() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('qr-section')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-primary-50 via-neutral-50 to-accent-50 section-padding">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-700 text-center">
            Nubite
          </h1>
          <p className="text-xl sm:text-2xl text-neutral-600 text-center font-medium">
            Functional Snack Bar
          </p>
        </div>
        
        <div className="space-y-8">
          <p className="text-xl sm:text-2xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
            Discover the future of snacking with our innovative functional snack bars. 
            Packed with nutrition, flavor, and purpose.
          </p>
          
          <button
            onClick={scrollToNextSection}
            className="btn-primary text-lg px-8 py-4"
          >
            Discover More
          </button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-primary-300 rounded-full opacity-30 animate-bounce"></div>
    </section>
  )
}
