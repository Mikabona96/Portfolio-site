import styled from 'styled-components';
import {motion} from 'framer-motion';

export const About = styled(motion.div)`
	min-height: 90vh;
	display: flex;
	/* align-items: flex-start; */
	justify-content: space-between;
	padding: 5rem 5rem;
	color: white;
`;

export const Description = styled.div`
	flex: 1;
	margin-top: 10rem;
	padding-right: 5rem;
	h2 {
		font-weight: lighter;
	}
	z-index: 2;
`

export const Image = styled.div`
	flex: 1;
	overflow: hidden;
	img {
		width: 130%;
		height: 120vh;
		object-fit: cover;
	}
	z-index: 2;
`

export const Hide = styled.div`
	overflow: hidden;
`