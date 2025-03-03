import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Play, Shield, Currency, Server, CreditCard, Car, Laptop } from 'lucide-react'

// Add the downloadBlob function
async function downloadBlob(blobUrl: string, fileName: string) {
  try {
    const response = await fetch(blobUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = objectUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(objectUrl);
  } catch (error) {
    console.error('Error downloading the blob:', error);
  }
}

export function HeroSection() {
  return (
    <section className="pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-tight text-[#2D3748]">
              Sales Made Simple,{' '}
              <span className="block">Business Made</span>
              <span className="block">Smarter</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-[480px]">
              Streamline your sales and inventory management with cutting-edge tools designed to help you track, sell, and grow your business operations.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="flex items-center justify-center px-8 py-3 bg-[#2B82FE] text-white rounded-full hover:bg-blue-600 transition-colors text-sm font-medium"
              >
                Try Free Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <button className="flex items-center justify-center px-6 py-3 text-gray-700 hover:text-gray-900 text-sm font-medium">
                <Play className="mr-2 h-4 w-4 text-[#2B82FE]" fill="currentColor" />
                Watch Demo
              </button>
              <button
                onClick={() => downloadBlob('https://your-vercel-blob-url', 'salesbox-offline.zip')}
                className="flex items-center justify-center px-6 py-3 border border-[#2B82FE] text-[#2B82FE] hover:bg-blue-50 rounded-full transition-colors text-sm font-medium"
              >
                Download Offline Version
              </button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/resources/heroimage.png"
              alt="SalesBox Dashboard"
              width={800}
              height={600}
              className="rounded-lg"
              priority
            />
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8 text-lg">Businesses Trust Salesbox</p>
          <div className="grid grid-cols-6 gap-8 items-center justify-center">
            {[
              { name: 'Unilever', Icon: Shield },
              { name: 'Binance', Icon: Currency },
              { name: 'IBM REDBOOM', Icon: Server },
              { name: 'Mastercard', Icon: CreditCard },
              { name: 'Volkswagen', Icon: Car },
              { name: 'Microsoft', Icon: Laptop }
            ].map(({ name, Icon }, i) => (
              <div key={i} className="text-gray-400 hover:text-[#2B82FE] transition-colors">
                <Icon className="w-16 h-16 p-2" strokeWidth={1} />
                <span className="sr-only">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

