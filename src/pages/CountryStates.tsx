import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Country, State } from 'worldpedia';
import Layout from './Layout';
import Card from '../components/Card/Card';
import { Link } from 'react-router-dom';
import * as _ from 'lodash';
import CustomPopup from '../components/CustomPopup/CustomPopup';
import { IState } from 'worldpedia/lib/interfaces';

const CountryStates = () => {
    const { id } = useParams();
    const country = Country.getCountryByCode(id?.toUpperCase()!);
    const states = _.sortBy(State.getAllStatesByCountry(id?.toUpperCase()!), 'name');
    const [show, setShow] = useState<boolean>(false);
    const [selectedState, setSelectedState] = useState<IState | null>(null);
    const handleShowDetails = (state: IState) => {
        setShow(!show);
        setSelectedState(state)
    }
    return (
        <Layout title={`States of ${country?.name}`}>
            {states && states.map(state => {
                return (
                    <Card key={state.name} name={`${state.name}`} >
                        <div className='card-actions flex justify-around mt-1'>
                            <button onClick={() => handleShowDetails(state)} className="btn modal-button btn-secondary btn-outline normal-case">Details</button>
                            <Link to={`/state/cities/${id}/${state.isoCode}`} className="btn btn-secondary btn-outline normal-case">Cities</Link>
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
                                {JSON.stringify(selectedState, null, 2)}
                            </code>
                        </pre>
                    </div>
                </CustomPopup>
            }
        </Layout>
    )
}

export default CountryStates