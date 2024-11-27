import WebFont from 'webfontloader';
import React, { useEffect } from 'react';
const WhyMoonEx = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Raleway', 'sans-serif', 'Fira Code'],
      },
    });
  }, []);
  return (
    <section style={{ fontFamily: 'Raleway' }} className="py-10 sm:py-16 lg:py-24 relative text-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h className="text-2xl md:text-5xl font-bold mb-4 ms-12 pt-12 px-8 z-10">
          <span className="text-white">Why </span>
          <span className="text-[#e0b417]">MoonEX</span>
          <span className="text-white"> ?</span>
        </h>
        <div
          className="absolute top-1/2 left-40 lg:left-80 transform -translate-x-1/2 w-80 h-80 rounded-full z-0"
          style={{
            background:
              "radial-gradient(circle, rgba(224, 180, 23, 0.1) 0%, rgba(224, 180, 23, 0.01) 70%, transparent 100%)",
          }}
        ></div>

        <div className="hidden mt-16 lg:block bg-gray-800 px-12 rounded-xl">
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-8 pr-4">
                  <div className="text-[#e0b417] text-3xl text-center my-auto font-bold">
                    Comparison
                  </div>
                </th>

                <th className="px-4 py-8 text-center">
                  <img
                    src="/logo.svg"
                    alt=""
                    className="w-20 mx-auto lg:w-40"
                  />
                </th>

                <th className="px-4 py-8 text-center">
                  <img
                    src="/uniswaplogo.svg"
                    alt="Uniswap"
                    className="w-20 mx-auto lg:w-40"
                  />
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="py-4 pr-4 font-medium border-b text-[#F0F0F0B2] border-gray-200">
                  1.Point no one
                </td>

                <td className="px-4 py-4 text-center border-b border-gray-200">
                  <p className="text-[#a3dca9] font-bold text-2xl">✓</p>
                </td>

                <td className="px-4 py-4 text-center border-b border-gray-200">
                <p className="text-[#d14845] font-bold text-2xl">✕</p>
                </td>
              </tr>

              <tr>
                <td className="py-4 pr-4 font-medium border-b text-[#F0F0F0B2] border-gray-200">
                  2.Point no two this
                </td>

                <td className="px-4 py-4 text-center border-b border-gray-200">
                  <p className="text-[#a3dca9] font-bold text-2xl">✓</p>
                </td>

                <td className="px-4 py-4 text-center border-b border-gray-200">
                  <p className="text-[#d14845] font-bold text-2xl">✕</p>
                </td>
              </tr>

              <tr>
                <td className="py-4 pr-4 font-medium border-b text-[#F0F0F0B2] border-gray-200">
                  2.Point no two this
                </td>

                <td className="px-4 py-4 text-center border-b border-gray-200">
                  <p className="text-[#a3dca9] font-bold text-2xl">✓</p>
                </td>

                <td className="px-4 py-4 text-center border-b border-gray-200">
                  <p className="text-[#d14845] font-bold text-2xl">✕</p>
                </td>
              </tr>

              <tr>
                <td className="py-4 pr-4 font-medium border-b text-[#F0F0F0B2] border-gray-200">
                  2.Point no two this
                </td>

                <td className="px-4 py-4 text-center border-b border-gray-200">
                  <p className="text-[#a3dca9] font-bold text-2xl">✓</p>
                </td>

                <td className="px-4 py-4 text-center border-b border-gray-200">
                  <p className="text-[#d14845] font-bold text-2xl">✕</p>
                </td>
              </tr>

              <tr>
                <td className="py-4 pr-4 font-medium border-b text-[#F0F0F0B2] border-gray-200">
                  2.Point no two this
                </td>

                <td className="px-4 py-4 text-center border-b border-gray-200">
                  <p className="text-[#a3dca9] font-bold text-2xl">✓</p>
                </td>

                <td className="px-4 py-4 text-center border-b border-gray-200">
                  <p className="text-[#d14845] font-bold text-2xl">✕</p>
                </td>
              </tr>

              <tr>
                <td className="py-6 pr-4"></td>

                <td className="px-4 py-6 text-center"></td>

                <td className="px-4 py-6 text-center"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="block mt-12 border-t border-b border-gray-200 divide-y divide-gray-200 lg:hidden">
        <div className="grid grid-cols-2 text-center divide-x divide-gray-200">
          <div className="px-2 py-2">
            <img src="/logo.svg" alt="" className="w-20 lg:w-40" />
          </div>

          <div className="px-2 py-2">
            <img
              src="/uniswaplogo.svg"
              alt="Uniswap"
              className="w-20 lg:w-40"
            />
          </div>
        </div>

        <div className="px-2 py-4 sm:px-4">
          <p className="font-semibold text-[#F0F0F0B2]">1.Point no one</p>
        </div>

        <div className="grid grid-cols-2 text-center divide-x divide-gray-200">
          <div className="px-2 py-2">
            <p className="text-[#a3dca9] font-bold text-2xl">✓</p>
          </div>

          <div className="px-2 py-2"><p className="text-[#d14845] font-bold text-2xl">✕</p></div>
        </div>

        <div className="px-2 py-4 sm:px-4">
          <p className="font-semibold text-[#F0F0F0B2]">2.Point no two this</p>
        </div>

        <div className="grid grid-cols-2 text-center divide-x divide-gray-200">
          <div className="px-2 py-2">
            <p className="text-[#a3dca9] font-bold text-2xl">✓</p>
          </div>

          <div className="px-2 py-2"><p className="text-[#d14845] font-bold text-2xl">✕</p></div>
        </div>

        <div className="px-2 py-4 sm:px-4">
          <p className="font-semibold">2.Point no this</p>
        </div>

        <div className="grid grid-cols-2 text-center divide-x divide-gray-200">
          <div className="px-2 py-2">
            <p className="text-[#a3dca9] font-bold text-2xl">✓</p>
          </div>

          <div className="px-2 py-2"><p className="text-[#d14845] font-bold text-2xl">✕</p></div>
        </div>

        <div className="px-2 py-4 sm:px-4">
          <p className="font-semibold text-[#F0F0F0B2]">2.Point no two this</p>
        </div>

        <div className="grid grid-cols-2 text-center divide-x divide-gray-200">
          <div className="px-2 py-2">
            <p className="text-[#a3dca9] font-bold text-2xl">✓</p>
          </div>

          <div className="px-2 py-2"><p className="text-[#d14845] font-bold text-2xl">✕</p></div>
        </div>

        <div className="px-2 py-4 sm:px-4">
          <p className="font-semibold text-[#F0F0F0B2]">2.Point no two this</p>
        </div>

        <div className="grid grid-cols-2 text-center divide-x divide-gray-200">
          <div className="px-2 py-2">
            <p className="text-[#a3dca9] font-bold text-2xl">✓</p>
          </div>

          <div className="px-2 py-2"><p className="text-[#d14845] font-bold text-2xl">✕</p></div>
        </div>

        <div className="grid grid-cols-2 text-center divide-x divide-gray-200"></div>
      </div>
    </section>
  );
};

export default WhyMoonEx;
