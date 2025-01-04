export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center">
          Why Choose Us
        </h2>
        <p className="mt-6 text-lg text-gray-600 text-center max-w-3xl mx-auto">
          Sea World is not just about marine education&mdash;it&apos;s about creating an experience that inspires action.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold">Interactive Learning</h3>
            <p className="mt-4 text-gray-600">
              Hands on exhibits designed to spark curiosity and deepen understanding.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold">Expert Insights</h3>
            <p className="mt-4 text-gray-600">
              Learn from marine biologists and conservationists passionate about ocean health.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold">Conservation Efforts</h3>
            <p className="mt-4 text-gray-600">
              Join us in our mission to protect marine life and habitats.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
