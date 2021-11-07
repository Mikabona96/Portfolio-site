import home1 from '../img/home1.png';
import {About, Description, Hide, Image} from '../components/styles'
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';
import Wave from './Wave';

const AboutSection = () => {

	return (
		<About className="about">
			<Description className="description">
				<motion.div	className="title">
					<Hide className="hide">
						<motion.h2 variants={titleAnim}>We work to make</motion.h2>
					</Hide>
					<Hide className="hide">
						<motion.h2 variants={titleAnim}>your <span>dreams</span> come</motion.h2>
					</Hide>
					<Hide className="hide">
						<motion.h2 variants={titleAnim}>true.</motion.h2>
					</Hide>
				</motion.div>
				<motion.p variants={fade}>Contact us for any photography ideas that you have</motion.p>
				<motion.button variants={fade}>Contact us</motion.button>
			</Description>
			<Image>
				<motion.img variants={photoAnim} initial="hidden" animate="show" src={home1} alt="guy with a camera" />
			</Image>
			<Wave />
		</About>
	)
}

// Styled Components




export default AboutSection;