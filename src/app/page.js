import styles from './page.module.scss';
import DefaultBlur from '../components/static/defaultBlur';
import PictureOne from '../../public/images/img-1.webp';
// import PictureOne from '../../public/images/img-3.jpg';
import StaticPlaiceholderBlur from '../components/static/plaiceholder/blur';
import StaticPlaiceholderColor from '../components/static/plaiceholder/color';
import DynamicPlaiceholderBlur from '../components/dynamic/blur';
import DynamicPlaiceholderColor from '../components/dynamic/color';
import CustomOpacity from '../components/custom/opacity';
import CustomSlide from '../components/custom/slide';

export default function Home() {
	return (
		<main className='min-h-screen p-24'>
			<section className={styles.section}>
				<h1 className='text-3xl font-bold underline flex flex-col items-center justify-center'>
					Static import
				</h1>

				<div className={styles.images}>
					<DefaultBlur src={PictureOne} />
				</div>
			</section>

			<section className={styles.section}>
				<h1 className='text-3xl font-bold underline flex flex-col items-center justify-center'>
					Static import with Plaiceholder
				</h1>

				<div className={styles.images}>
					<StaticPlaiceholderBlur src={'/images/img-1.webp'} />
				</div>
			</section>

			<section className={styles.section}>
				<h1 className='text-3xl font-bold underline flex flex-col items-center justify-center'>
					Static import with Plaiceholder Color
				</h1>

				<div className={styles.images}>
					<StaticPlaiceholderColor src={'/images/img-1.webp'} />
				</div>
			</section>

			<section className={styles.section}>
				<h1 className='text-3xl font-bold underline flex flex-col items-center justify-center'>
					Dynamic import with Plaiceholder
				</h1>

				<div className={styles.images}>
					<DynamicPlaiceholderBlur src='https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80' />
					<DynamicPlaiceholderColor src='https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80' />
				</div>
			</section>

			<section className={styles.section}>
				<h1 className='text-3xl font-bold underline flex flex-col items-center justify-center'>
					Custom in-view animations
				</h1>

				<div className={styles.images}>
					<CustomOpacity src='https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80' />
					<CustomSlide src='https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80' />
				</div>
			</section>
		</main>
	);
}
