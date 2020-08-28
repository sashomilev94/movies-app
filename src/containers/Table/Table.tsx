/*
	External Dependencies
 */
import React, { FunctionComponent } from 'react';

/*
	Internal Dependencies
 */
import Shell from '../Shell/Shell'
import Title from '../../components/Title/Title'

const Table:FunctionComponent = () => {
  return (
    <div className="Table" >
    	<Shell>
    		<div className="TableHeading">
    			<Title title="Movies" />
    		</div>
    	</Shell>
    </div>
  );
}

export default Table;
