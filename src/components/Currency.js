
import React, { useContext, useState} from 'react';
import { AppContext} from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);

    const [isOpen, setIsOpen] = useState(false);

    const currencyHandler = (currency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency,
          });             

    }

    const currencyType = () => {
        switch(currency){
            case '$' :
              return '$ Dollar'
            case '£' :
              return '£ Pound'
            case '€' :
              return '€ Euro'
            case '₹' :
              return '₹ Ruppee'
            default:
              return ''
          }
    }

    return(
        <div id="currency-menu" className="dropdown" style={{ cursor: 'pointer' }}>
            <button
            id="currency-menu-button"
            className="btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ backgroundColor: '#93e399', color: '#fff' }}
            onClick={() => setIsOpen(!isOpen)}
            >
                Currency {'('}{currencyType()}{')'}
            </button>
            <ul className={`custom-menu dropdown-menu ${isOpen ? 'show' : ''} `}>
                <li>
                    <button 
                    className="dropdown-item"
                    type="button"
                    onClick={ () => currencyHandler('$')}>
                    $ Dollar
                    </button>
                </li>
                <li>
                    <button 
                    className="dropdown-item"
                    type="button"
                    onClick={ () => currencyHandler('£')}>
                    £ Pound
                    </button>
                </li>
                <li>
                    <button 
                    className="dropdown-item"
                    type="button"
                    onClick={ () => currencyHandler('€')}>
                    € Euro
                    </button>
                </li>
                <li>
                    <button 
                    className="dropdown-item"
                    type="button"
                    onClick={ () => currencyHandler('₹')}>
                    ₹ Ruppee
                    </button>
                </li>
                
                
            </ul>
        </div>
    );
}

export default Currency;