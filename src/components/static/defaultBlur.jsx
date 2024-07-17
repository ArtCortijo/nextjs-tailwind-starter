import Image from 'next/image';
import styles from '../style.module.scss';

export default function DefaultBlur({ src }) {
	return (
		<div className={styles.container}>
			<p>Blur</p>
			<div className={styles.imageContainer}>
				<Image src={src} fill alt='image' placeholder='blur' />
			</div>
		</div>
	);
}
