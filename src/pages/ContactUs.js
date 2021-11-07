import { motion } from 'framer-motion';
import { PageAnimation } from '../animation';

const ContactUs = () => {
	return (
		<motion.div variants={PageAnimation} exit="exit" initial="hidden" animate="show" style={{background: '#fff'}}>
			<h1>Our Contact</h1>
		</motion.div>
	)
}

export default ContactUs