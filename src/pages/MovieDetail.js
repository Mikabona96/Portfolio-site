import { useHistory } from 'react-router-dom'
import {MovieState} from '../movieState'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

import { motion } from 'framer-motion';
import { PageAnimation } from '../animation';

const MovieDetail = () => {

	const history = useHistory()
	const url = history.location.pathname;
	const [movies, setMovies] = useState(MovieState());
	const [movie, setMovie] = useState(null);

	useEffect(() => {
		const currentMovie = movies.filter(stateMovie => stateMovie.url === url)
		setMovie(currentMovie[0])
	}, [movies, url])


	return (
		<> 
			{movie && (
			<Details variants={PageAnimation} exit="exit" initial="hidden" animate="show">
				<Headline>
					<h2>{movie.title}</h2>
					<img src={movie.mainImg} alt="" />
				</Headline>
				<Awards>
					{movie.awards.map(award => (
						<Award title={award.title} description={award.description} key={award.title}/>
					))}
				</Awards>
				<ImageDisplay>
					<img src={movie.secondaryImg} alt="" srcset="" />
				</ImageDisplay>
			</Details>
			)}
		</>
	)
}

const Details = styled(motion.div)`
	color: white;
`

const Headline = styled.div`
	min-height: 90vh;
	padding-top: 20vh;
	position: relative;
	h2 {
		position: absolute;
		top: 10%;
		left: 50%;
		transform: translate(-50%, 10%);
	}
	img {
		margin-top: 2rem;
		width: 100%;
		height: 90vh;
		object-fit: cover;
	}
`

const Awards = styled.div`
	h3 {
		padding: 1rem;
	}
	min-height: 80vh;
	display: flex;
	margin: 5rem 5rem;
	align-items: center;
	justify-content: space-around;
`

const AwardStyle = styled.div`
	padding: 2rem;
	h3 {
		font-size: 1.5rem;
	}
	p {
		font-size: 1rem;

	}
	.line {
		width: 100%;
		background: #23d997;
		height: 0.5rem;
		margin: 1rem 0rem;
		margin-left: 1rem;

	}
`
const ImageDisplay = styled.div`
	min-height: 50vh;
	img {
		width: 100%;
		height: 100vh;
		object-fit: cover;
	}
`

const Award = ({title, description}) => {
	return (
		<AwardStyle>
			<h3>{title}</h3>
			<div className="line"></div>
			<p>{description}</p>
		</AwardStyle>
	)
}
	


export default MovieDetail