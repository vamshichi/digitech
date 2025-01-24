import Link from "next/link"

export default function SpeakersPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Speakers</h1>
        <p className="mt-4 text-xl text-gray-500">To Be Announced</p>
        <div className="mt-8 bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Stay Tuned!</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>
                We're in the process of confirming an exciting lineup of industry-leading speakers. Check back soon for
                updates!
              </p>
            </div>
            <div className="mt-5">
              <Link
                href="/newsletter-signup"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Get notified when speakers are announced
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

