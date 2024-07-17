import styles from '../../style.module.scss';
import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';
import fs from 'node:fs/promises';

export default async function Color({ src }) {
	const buffer = await fs.readFile(`./public${src}`);
	const { color } = await getPlaiceholder(buffer);

	return (
		<div className={styles.container}>
			<p>Color</p>
			<div
				style={{ backgroundColor: color.hex }}
				className={styles.imageContainer}
			>
				<Image src={src} fill alt='image' />
			</div>
		</div>
	);
}
