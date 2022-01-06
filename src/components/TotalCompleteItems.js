import React from 'react';

import {useSelector} from 'react-redux'

const TotalCompleteItems = () => {

	let completedItems = useSelector((state)=> state.todos.filter((item)=> item.completed === true))





	return <h4 className='mt-3'>Total Complete Items: {completedItems.length}</h4>;
};

export default TotalCompleteItems;