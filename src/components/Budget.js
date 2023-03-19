import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MAX_BUDGET = 2000;

const Budget = () => {
    const { budget, totalExpenses,currency, dispatch } = useContext(AppContext);


    // function budgetHandler 
    const budgetHandler = (event) => {

        const budgetValue = Number(event.target.value)

        // check budgetValue entery is valid number 
        if (Number.isNaN(budgetValue)){
            alert('Please enter valid number input.')
            return;
        }

        // check budgetValue entery isan integer 
        
        if (!Number.isInteger(budgetValue)){
            alert('Please enter an integer number.')
            return;
        }

        // check if budgetValue is less than total Expenses
        if (budgetValue < totalExpenses){
            alert('The value of the buget canbot be lower than the expenses value' + currency + totalExpenses)

        } else {
            if (budgetValue > MAX_BUDGET){
                alert('Please enter a value less that ' + MAX_BUDGET);
                return;
            }

            dispatch({
                type: 'SET_BUDGET',
                payload: budgetValue,

            });
        }

    }

    return (
        <div className='alert alert-secondary'
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
            <div>
                <label>Budget:</label>
            </div>
            <div>
                <span>{currency}</span>
                <input
                required="required"
                type="number"
                id="budget"
                style={{ marginLeft: '0.2rem' , size: 10}}
                value={budget}
                step="10"
                onChange={budgetHandler}
                ></input>
            </div>
            {/* <span>Budget: £{budget}</span> */}
        </div>
    );
};
export default Budget;