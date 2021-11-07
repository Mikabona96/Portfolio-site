import styled from 'styled-components';
import { About } from './styles';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
import {scrollReveal} from '../animation';
import { useScroll } from './useScroll';


const FaqSection = () => {
	const [element, controls] = useScroll();
	return (
		<Faq className="faq" initial="hidden" variants={scrollReveal} ref={element} animate={controls}>
			<h2>Any Questions <span>FAQ</span></h2>
			<AnimateSharedLayout>
				<Toggle title="How do I Start?">
						<div className="answer">
							<p>Lorem ipsum dolor sit amet.</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, illo.</p>
						</div>
				</Toggle>
				<Toggle title="DailySchedule">
						<div className="answer">
							<p>Lorem ipsum dolor sit amet.</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, illo.</p>
						</div>
				</Toggle>
				<Toggle title="Different Payments Methods">
						<div className="answer">
							<p>Lorem ipsum dolor sit amet.</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, illo.</p>
						</div>
				</Toggle>
				<Toggle title="What Products do you offer.">
						<div className="answer">
							<p>Lorem ipsum dolor sit amet.</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, illo.</p>
						</div>
				</Toggle>
			</AnimateSharedLayout>
		</Faq>
	)
}

const Faq = styled(About)`
	display: block;
	span {
		display: block;
	}
	h2 {
		padding-bottom: 2rem;
		font-weight: lighter;
	}
	.faq-line {
		background: #cccccc;
		height: 0.2rem;
		width: 100%;
		margin: 2rem 0rem;
		width: 100%;
	}
	.question {
		padding: 1rem 0;
		cursor: pointer;
	}
	p {
		padding: 1rem 0rem;
	}
`

export default FaqSection;