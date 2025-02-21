export default function SizeGuidePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="text-center py-16 md:py-24 bg-white px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-melodrama mb-4 text-black">
          Size Guide
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Find your perfect fit with our detailed size guide
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-melodrama text-accent mb-6">Men's Sizing</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="py-4 px-6 text-left">Size</th>
                    <th className="py-4 px-6 text-left">Chest (cm)</th>
                    <th className="py-4 px-6 text-left">Waist (cm)</th>
                    <th className="py-4 px-6 text-left">Hip (cm)</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-800">
                    <td className="py-4 px-6">S</td>
                    <td className="py-4 px-6">88-96</td>
                    <td className="py-4 px-6">73-81</td>
                    <td className="py-4 px-6">88-96</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-4 px-6">M</td>
                    <td className="py-4 px-6">96-104</td>
                    <td className="py-4 px-6">81-89</td>
                    <td className="py-4 px-6">96-104</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-4 px-6">L</td>
                    <td className="py-4 px-6">104-112</td>
                    <td className="py-4 px-6">89-97</td>
                    <td className="py-4 px-6">104-112</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-melodrama text-accent mb-6">Women's Sizing</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="py-4 px-6 text-left">Size</th>
                    <th className="py-4 px-6 text-left">Bust (cm)</th>
                    <th className="py-4 px-6 text-left">Waist (cm)</th>
                    <th className="py-4 px-6 text-left">Hip (cm)</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-800">
                    <td className="py-4 px-6">XS</td>
                    <td className="py-4 px-6">76-81</td>
                    <td className="py-4 px-6">58-63</td>
                    <td className="py-4 px-6">84-89</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-4 px-6">S</td>
                    <td className="py-4 px-6">81-86</td>
                    <td className="py-4 px-6">63-68</td>
                    <td className="py-4 px-6">89-94</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-4 px-6">M</td>
                    <td className="py-4 px-6">86-91</td>
                    <td className="py-4 px-6">68-73</td>
                    <td className="py-4 px-6">94-99</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 