import Image from 'next/image'
import React, { useEffect, useState } from 'react'



interface Props {
  columns: any[],
}

/*
 * This component is used to display the shutdown table
 */
export default function HistoryTable({ props, search }: { props: Props, search: string }) {
  const [selected, setSelected] = useState<[] | any>([]);
  const [originalData, setOriginalData] = useState<any[]>([]);
  const [data, setData] = useState<any[]>([]);
  const [ascendingSort, setAscendingSort] = useState<boolean>(true);
  const [searched, setSearched] = useState<boolean>(false);

  const sortDataBySocketID = () => {
    if (ascendingSort) {
      const sortedData = data.sort((a: any, b: any) => {
        return a.socketID > b.socketID ? 1 : -1;
      });
      setData([...sortedData]);
    } else {
      const sortedData = data.sort((a: any, b: any) => {
        return a.socketID < b.socketID ? 1 : -1;
      });
      setData([...sortedData]);
    }
    setAscendingSort(!ascendingSort);
  };

  const sortDataByTravail = () => {
    if (ascendingSort) {
      const sortedData = data.sort((a: any, b: any) => {
        return a.travail - b.travail;
      });
      setData([...sortedData]);
    } else {
      const sortedData = data.sort((a: any, b: any) => {
        return b.travail - a.travail;
      });
      setData([...sortedData]);
    }
    setAscendingSort(!ascendingSort);
  };

  function sortDataByZone() {
    if (ascendingSort) {
      const sortedData = data.sort((a: any, b: any) => {
        return a.zone > b.zone ? 1 : -1;
      });
      setData([...sortedData]);
    } else {
      const sortedData = data.sort((a: any, b: any) => {
        return a.zone < b.zone ? 1 : -1;
      });
      setData([...sortedData]);
    }
    setAscendingSort(!ascendingSort);
  };

  const sortDataByLocalisation = () => {
    if (ascendingSort) {
      const sortedData = data.sort((a: any, b: any) => {
        return a.localisation > b.localisation ? 1 : -1;
      });
      setData([...sortedData]);
    } else {
      const sortedData = data.sort((a: any, b: any) => {
        return a.localisation < b.localisation ? 1 : -1;
      });
      setData([...sortedData]);
    }
    setAscendingSort(!ascendingSort);
  };

  const sortDataByEtage = () => {
    if (ascendingSort) {
      const sortedData = data.sort((a: any, b: any) => {
        return a.etage > b.etage ? 1 : -1;
      });
      setData([...sortedData]);
    } else {
      const sortedData = data.sort((a: any, b: any) => {
        return a.etage < b.etage ? 1 : -1;
      });
      setData([...sortedData]);
    }
    setAscendingSort(!ascendingSort);
  };

  const sortDataByArret = () => {
    if (ascendingSort) {
      const sortedData = data.sort((a: any, b: any) => {
        return a.arret > b.arret ? 1 : -1;
      });
      setData([...sortedData]);
    } else {
      const sortedData = data.sort((a: any, b: any) => {
        return a.arret < b.arret ? 1 : -1;
      });
      setData([...sortedData]);
    }
    setAscendingSort(!ascendingSort);
  };


  useEffect(() => {
    if (search.length > 0) {
      const filteredData = originalData.filter((item: any) => {
        return item.prise.includes(search) ||
          item.travail.includes(search) ||
          item.zone.toLowerCase().includes(search.toLowerCase()) ||
          item.localisation.toLowerCase().includes(search.toLowerCase()) ||
          item.etage.toLowerCase().includes(search.toLowerCase()) ||
          item.shutdown.toLowerCase().includes(search.toLowerCase())
      });
      setData([...filteredData]);
      setSearched(true);
    } else if (search.length === 0 && searched) {
      setData([...originalData]);
      setSearched(false);
    }

  }, [data, originalData, search, searched])


  const sortOptions = [sortDataBySocketID, sortDataByTravail, sortDataByLocalisation, sortDataByEtage,
    sortDataByZone, sortDataByArret]

  useEffect(() => {
    fetch("/api/table_data")
      .then(res => res.json())
      .then(data => {
        setData(data);
        setOriginalData(data);
      })
  }, [])

  const handleSelect = (id: Number) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item: any) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  return (
    <React.Fragment>
      <div className="mt-8 flex flex-col">
        <div className="-my-2  overflow-x-auto ">
          <div className="inline-block min-w-full py-2 align-middle ">
            <table className="min-w-full divide-y divide-[#E6EDFF]">
              <thead>
                <tr>
                  {props.columns.map((column, index) => (
                    <th key={index + column.name} scope="col" className="py-3.5 first:pl-0 px-[10px]   ">
                      <div className='flex items-center justify-start gap-x-2 w-full'>
                        <span className='font-poppins text-xs font-medium text-primary'>
                          {column.name}
                        </span>
                        {column.icon &&
                          <Image className='cursor-pointer' src={column.icon} width={10} height={10} alt={column.iconAlt}
                            onClick={sortOptions[index]} />
                        }
                      </div>
                    </th>

                  ))}

                </tr>
              </thead>
              <tbody className="divide-y divide-[#E6EDFF] text-xs text-black">
                {data.map((row, index) => (
                  <tr key={index}>
                    <td className="whitespace-nowrap text-left py-4 pr-5">
                      {row.prise}
                    </td>
                    <td className="whitespace-nowrap text-left pl-3 py-4">{row.travail}</td>
                    <td className="whitespace-nowrap text-left py-4">{row.localisation}</td>
                    <td className="whitespace-nowrap text-left py-4">
                      {row.etage}
                    </td>
                    <td className="  text-left py-4">
                      <span className='ml-2'>{row.zone}</span>
                    </td>
                    <td className=" text-left py-4">
                      {row.travail === 'Nettoyage' && row.localisation === 'Vestiaires - Homme' ?
                        'Bouton connecté n°27'
                        : row.travail === 'Action bouton' && row.localisation === 'Vestiaires - Femme' ?
                          'Bouton alerte n°46'
                          : row.travail === 'Action bouton' && row.localisation === 'Vestiaires - Homme' ?
                            'Bouton alerte n°45'
                            : row.travail === 'Nettoyage' && row.localisation === 'Vestiaires - Femme' ?
                              'Bouton connecté n°28'
                              : row.travail === 'Seuil atteint' && row.localisation === 'Vestiaires - Homme' ?
                                'Capteur PIR n°1489'
                                : row.travail === 'Seuil atteint' && row.localisation === 'Vestiaires - Femme' ?
                                  'Capteur PIR n°1490'
                                  : ''
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}