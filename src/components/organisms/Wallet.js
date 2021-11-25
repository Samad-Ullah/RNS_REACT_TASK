import React from 'react';
import styled from 'styled-components';

import Index from '../molecules';



const StyledMenu = styled.div`
min-height: 100vh;
`;

function Menu() {
	return (
		<StyledMenu>
		
				<Index/>
		
		</StyledMenu>
	);
}

export default Menu;