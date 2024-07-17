import styles from '../../style.module.scss';
import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';
import fs from 'node:fs/promises';

export default async function Blur({ src }) {
	const buffer = await fs.readFile(`./public${src}`);
	const { base64 } = await getPlaiceholder(buffer);

	return (
		<div className={styles.container}>
			<p>Blur</p>
			<div className={styles.imageContainer}>
				<Image
					src={src}
					fill
					alt='image'
					placeholder='blur'
					blurDataURL={base64}
				/>
			</div>
		</div>
	);
}
