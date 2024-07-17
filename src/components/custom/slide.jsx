'use client';

import styles from '../style.module.scss';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export default function Slide({ src }) {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.5,
	});

	return (
		<div className={styles.container}>
			<p>Slide</p>
			<div
				style={{ overflow: 'hidden' }}
				ref={ref}
				className={styles.imageContainer}
			>
				<Image
					src={src}
					fill
					alt='image'
					style={{
						opacity: inView ? 1 : 0,
					}}
				/>
				<div
					style={{
						backgroundColor: '#e9c6b0',
						width: '100%',
						height: '100%',
						position: 'relative',
						zIndex: 1,
						top: 0,
						left: inView ? '100%' : '0%',
						transition: 'left 0.2s cubic-bezier(0.3, 0.2, 0.2, 0.8)',
					}}
				></div>
			</div>
		</div>
	);
}
