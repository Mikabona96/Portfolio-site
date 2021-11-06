import React from 'react';
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
import {About, Description, Image} from '../components/styles'
import styled from 'styled-components';


const ServicesSection = () => {
	return (
		<Services>
			<Description>
				<h2>High <span>quality</span> services</h2>
				<Cards>
					<div>
						<Card className="card">
						<div className="icon">
							<img src={clock} alt="" />
							<h3>Efficient</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</Card>
					<Card className="card">
						<div className="icon">
							<img src={teamwork} alt="" />
							<h3>Teamwork</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</Card>
					</div>
					<div>
						<Card className="card">
						<div className="icon">
							<img src={diaphragm} alt="" />
							<h3>Diaphragm</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</Card>
					<Card className="card">
						<div className="icon">
							<img src={money} alt="" />
							<h3>Affordable</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</Card>
					</div>
				</Cards>
			</Description>
			<Image>
					<img src={home2} alt="" />
			</Image>
		</Services>
	)
}

const Services = styled(About)`
	h2 {
		font-size: 2.8rem;
		padding-bottom: 4rem;
	}
	p {
		width: 70%;
		padding: 1rem 0rem 2rem 0rem;
	}
`

const Cards = styled.div`
	display: flex;
	flex-wrap: wrap;
`

const Card = styled.div`
	flex-basis: 20rem;
	.icon {
		display: flex;
		align-items: center
	}
	h3 {
		margin-left: 1rem;
		background: white;
		color: black;
		padding: 1rem;
	}
`


export default ServicesSection;