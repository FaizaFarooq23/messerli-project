import React from "react"

interface Props{
    
}

const SearchSVG = (props:Props) => (
    <svg
        width={28}
        height={28}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M12.667 23.333c5.89 0 10.666-4.775 10.666-10.666S18.558 2 12.667 2 2 6.776 2 12.667c0 5.89 4.776 10.666 10.667 10.666ZM26 26l-5.8-5.8"
            stroke="#1D51AB"
            strokeWidth={2.667}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export default SearchSVG
