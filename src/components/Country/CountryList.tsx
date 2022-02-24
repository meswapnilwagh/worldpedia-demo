import React, { useState } from 'react'
import { ICountry } from 'worldpedia/lib/interfaces';
import Card from '../Card/Card';
import CustomPopup from '../CustomPopup/CustomPopup';
import { Link } from 'react-router-dom';
interface Props {
    countries: ICountry[];
}



const CountryList = (props: Props) => {
    const { countries } = props;
    const [show, setShow] = useState<boolean>(false);
    const [selectedCountry, setSelectedCountry] = useState<ICountry | null>(null);
    const handleShowDetails = (country: ICountry) => {
        setShow(!show);
        setSelectedCountry(country)
    }

    return (
        <>
            {countries && countries.map(country => {
                return (
                    <Card key={country.iso2} image={country.flag} name={`${country.name}`} >
                        <div className='card-actions flex justify-around mt-1'>
                            <button onClick={() => handleShowDetails(country)} className="btn modal-button btn-secondary btn-outline normal-case">Details</button>
                            <Link to={`/states/${country.iso2}`} className="btn btn-secondary btn-outline normal-case">States</Link>
                        </div>
                    </Card>
                )
            })}
            {show &&
                <CustomPopup
                    title="Country Details"
                    open={show}
                    onClose={() => setShow(false)}
                >
                    <div className="mockup-code">
                        <pre data-prefix="">
                            <code>
                                {JSON.stringify(selectedCountry, null, 2)}
                            </code>
                        </pre>
                    </div>
                </CustomPopup>
            }
        </>
    )
}

export default CountryList