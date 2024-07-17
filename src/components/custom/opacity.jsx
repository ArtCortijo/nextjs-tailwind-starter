'use client';

import styles from '../style.module.scss';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export default function Opacity({ src }) {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.5,
	});

	return (
		<div className={styles.container}>
			<p>Opacity</p>
			<div
				ref={ref}
				style={{ backgroundColor: '#e9c6b0' }}
				className={styles.imageContainer}
			>
				<Image
					src={src}
					fill
					alt='image'
					style={{
						opacity: inView ? 1 : 0,
						transition: 'opacity 0.5s cubic-bezier(0.3, 0.2, 0.2, 0.8)',
					}}
				/>
			</div>
		</div>
	);
}
