import styles from '../style.module.scss';
import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';

export default async function Blur({ src }) {
	const buffer = await fetch(src).then(async (res) => {
		return Buffer.from(await res.arrayBuffer());
	});
	const { color } = await getPlaiceholder(buffer);

	return (
		<div className={styles.container}>
			<p>Blur</p>
			<div
				style={{ backgroundColor: color.hex }}
				className={styles.imageContainer}
			>
				<Image src={src} fill alt='image' />
			</div>
		</div>
	);
}
