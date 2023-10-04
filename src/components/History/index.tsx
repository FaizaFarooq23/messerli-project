import React, { FormEvent, useState } from 'react'
import HistoryTable from './HistoryTable';
import { TableProps } from '../../../data/TableProps';
import SearchSVG from '../Svgs/Search';


export default function HistoryComponent() {
    const [searchBar, setSearchBar] = useState<boolean>(false);
    const [search, setSearch] = useState<string>('');

    const closeSearch = () => {
        setSearchBar(false);
        setSearch('');
    };

    const handleSearch = (e: FormEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value);
    };

    return (
        <div className=' pr-5'>


            <div className='mt-6 px-5 pb-5 w-full border border-[#E6EDFF] rounded-xl '>
                <div className='mt-7 flex justify-between items-center'>
                    <div className=' flex justify-center items-center'>
                        <span className='font-Poppins font-medium text-xl text-primary'>
                        Listing
                        </span>
                    </div>
                </div>

                <div className='mt-7 w-9 '>
                    {
                        searchBar ?
                            <div className='flex items-center gap-x-2 ease-in-out -left-10 relative translate-x-10 duration-500'>
                                <input className='bg-transparent border border-[#BBB] rounded-lg pl-5 py-1 focus:outline-none font-inter'
                                    placeholder='Search' onChange={handleSearch} />
                                <div className='bg-primary w-6 h-6 rounded-full flex justify-center items-center cursor-pointer text-white p-3'
                                    onClick={closeSearch}>
                                    &#10005;
                                </div>
                            </div>
                            :
                            <div className='flex flex-col justify-center items-center cursor-pointer '
                                onClick={() => setSearchBar(true)}>
                                <div className=''>
                                    <SearchSVG />
                                </div>
                                <span className='mt-1 text-primary text-xs font-poppins'>
                                    Search
                                </span>
                            </div>
                    }
                </div>

                <div className='w-full'>
                    <HistoryTable props={TableProps} search={search} />
                </div>
            </div>
        </div>
    )
}
