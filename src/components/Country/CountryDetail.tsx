import React from 'react'

interface ICountryDetailProp {
    id: string
}
const CountryDetail = ({ id }: ICountryDetailProp) => {
    return (
        <div>CountryDetail {id}</div>
    )
}

export default CountryDetail