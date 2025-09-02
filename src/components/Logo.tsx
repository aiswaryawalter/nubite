import Image from 'next/image'

export default function Logo() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative w-24 h-24 sm:w-32 sm:h-32">
        <Image
          src="/logo-placeholder.png"
          alt="NuBite Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-700 text-center">
        NuBite
      </h1>
      <p className="text-xl sm:text-2xl text-neutral-600 text-center font-medium">
        Functional Snack Bar
      </p>
    </div>
  )
}
