import { useEffect, useState } from 'react'
import '../css/skipOptions.css'
import { gettingApi } from '../js/modules/api'
import skipImg from '../../public/skip1.jpeg'
import Button from './Button'
import SelectedSkip from './SelectedSkip'

const SkipOptions = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await gettingApi();
                setData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;

    // calculation the total price with VAT
    const calcVAT = (beforeVat, vat) => {
        return new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        }).format(beforeVat + (beforeVat * vat / 100))
    }

    const selectedSkip = data.find(skip => skip.id === selectedId);

    return (
        <>
            <div className="container">
                {data
                    // Removing null values from the final result
                    .filter((skip) => skip.price_before_vat !== null)
                    .map((skip) => {
                        const isSelected = selectedId === skip.id;

                        return (
                            <>
                                <div
                                    key={skip.id}
                                    className={`box ${isSelected ? 'selected-box' : ''}`}
                                    onClick={() => setSelectedId(skip.id)}>
                                    <div className="skip-image">
                                        <img src={skipImg} alt="skip image" />
                                        <p className='days text'>{skip.hire_period_days} day hire period</p>
                                    </div>
                                    <div className='skip-details'>
                                        <p className='yard text'>{skip.size} Yard</p>
                                        <p className='price text'>{calcVAT(skip.price_before_vat, skip.vat)} per week</p>
                                        {skip.allowed_on_road === false ? <p className='property'>&#9888; Private Property Only</p> : ''}
                                    </div>
                                    <div className='btn'>
                                        <Button
                                            isSelected={selectedId === skip.id}
                                            yard={skip.size}
                                        />
                                    </div>
                                </div>
                                {selectedSkip && (
                                    <SelectedSkip
                                        price={calcVAT(selectedSkip.price_before_vat, selectedSkip.vat)}
                                        size={selectedSkip.size}
                                    />
                                )}
                            </>
                        )
                    })}
            </div>
        </>
    )
}

export default SkipOptions