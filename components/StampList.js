import { ARTWALKS } from "../constants/ArtWalks"
  
export default function StampList() {
    return (
        <div className="bg-gray-900 p-16 text-left">
          <div className="px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl">Stamps</h1>

            <div className="mt-8 flow-root">
              
              <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead>
                      <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0">
                          
                        </th>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0">
                          Event
                        </th>
                        <th scope="col" className="hidden lg:table-cell py-3.5 px-3 text-left text-sm font-semibold text-white">
                          Date
                        </th>
                        <th scope="col" className="hidden lg:table-cell py-3.5 px-3 text-left text-sm font-semibold text-white">
                          City
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800 text-left">
                      {ARTWALKS.map((item) => (
                        <tr key={item.title}>
                          <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-300 hidden lg:table-cell">
                            <img src={item.image} alt="" className="inline-block h-14 w-14 rounded-full" />
                          </td>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                            {item.title}
                          </td>
                          <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-300 hidden lg:table-cell">{item.date}</td>
                          <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-300 hidden lg:table-cell">{item.city}</td>
                          <td>
                            <a
                              href={'/stamps/'+item.id}
                                className="block rounded-md bg-indigo-500 py-2 px-3 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >Mint</a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
  }
  