import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import card from './Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
	const [title, setTitle] = useState(props.title);

	const clickHandler = () => {
		setTitle('Updated');
		console.log(title);
	};

	return (
		<card className='expense-item'>
			<ExpenseDate date={props.date} />
			<div className='expense-item__description'>
				<h2>{title} </h2>
			</div>
			<div className='expense-item__price'>${props.amount}</div>
			<button onClick={clickHandler}>change title</button>
		</card>
	);
};

export default ExpenseItem;
