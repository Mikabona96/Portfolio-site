import styled from 'styled-components'
import { Link } from 'react-router-dom'

import athlete from '../img/athlete-small.png'
import theracer from '../img/theracer-small.png'
import goodtimes from '../img/goodtimes-small.png'

import { motion } from 'framer-motion';
import { PageAnimation, fade, photoAnim, lineAnim, slider, sliderContainer } from '../animation';

const OurWork = () => {
	return (
		<Work style={{background: '#fff'}} variants={PageAnimation} exit="exit" initial="hidden" animate="show">
			<motion.div variants={sliderContainer}>
				<Frame1 variants={slider}></Frame1>
				<Frame2 variants={slider}></Frame2>
				<Frame3 variants={slider}></Frame3>
				<Frame4 variants={slider}></Frame4>
			</motion.div>
			<Movie>
				<Link to="/work/the-athlete" style={{color: 'black', 'text-decoration': 'none'}}>
					<motion.h2 variants={fade}>The Athlete</motion.h2>
				</Link>
				<motion.div variants={lineAnim} className="line"></motion.div>
				<Link to="/work/the-athlete">
					<Hide>
						<motion.img variants={photoAnim} src={athlete} alt="athlete" />
					</Hide>
				</Link>
			</Movie>
			<Movie>
				<Link to="/work/the-racer" style={{color: 'black', 'text-decoration': 'none'}}><h2>The Racer</h2></Link>
				<motion.div variants={lineAnim} className="line"></motion.div>
				<Link to="/work/the-racer">
					<img src={theracer} alt="theracer" />
				</Link>
			</Movie>
			<Movie>
				<Link to="/work/good-times" style={{color: 'black', 'text-decoration': 'none'}}><h2>Good Times</h2></Link>
				<motion.div variants={lineAnim} className="line"></motion.div>
				<Link to="/work/good-times">
					<img src={goodtimes} alt="goodtimes" />
				</Link>
			</Movie>
		</Work>
	)
}

const Work = styled(motion.div)`
	min-height: 100vh;
	overflow: hidden;
	padding: 5rem;
	h2 {
		padding: 1rem 0rem;
	}
`

const Movie = styled.div`
	img {
		width: 100%;
		/* height: 70vh; */
	}
	padding-bottom: 10rem;
	.line {
		height: 0.5rem;
		background: #23d997;
		margin-bottom: 3rem;
	}
`

const Hide = styled.div`
	overflow: hidden
` 

const Frame1 = styled(motion.div)`
	position: fixed;
	left: 0;
	top: 10%;
	width: 100%;
	height: 100vh;
	background: #fffebf;
	z-index: 2;
`

const Frame2 = styled(Frame1)`
	background: #ff8efb;
`

const Frame3 = styled(Frame1)`
	background: #8ed2ff;
`

const Frame4 = styled(Frame1)`
	background: #8effa0;
`

export default OurWork