import home1 from '../img/home1.png';
import {About, Description, Hide, Image} from '../components/styles'

const AboutSection = () => {
	return (
		<About className="about">
			<Description className="description">
				<div className="title">
					<Hide className="hide">
						<h2>We work to make</h2>
					</Hide>
					<Hide className="hide">
						<h2>your <span>dreams</span> come</h2>
					</Hide>
					<Hide className="hide">
						<h2>true.</h2>
					</Hide>
				</div>
				<p>Contact us for any photography ideas that you have</p>
				<button>Contact us</button>
			</Description>
			<Image>
				<img src={home1} alt="guy with a camera" />
			</Image>
		</About>
	)
}

// Styled Components




export default AboutSection;