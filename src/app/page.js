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
import ImageList from '@/components/ImageList';

export default function Home() {
	return (
		// <main className='min-h-screen'>
		// 	<section className='h-screen flex flex-col items-center justify-center bg-lime-300'>
		// 		<h1 className='text-3xl font-bold underline'>Section 1</h1>
		// 	</section>

		// 	<section className='h-screen flex flex-col items-center justify-center bg-red-200'>
		// 		<h1 className='text-3xl font-bold underline'>Section 2</h1>
		// 	</section>

		// 	<section className='h-screen flex flex-col items-center justify-center bg-orange-200'>
		// 		<h1 className='text-3xl font-bold underline'>Section 3</h1>
		// 	</section>
		// </main>
		<main className='p-16 xl:p-32 flex flex-col w-full items-center justify-center'>
			<ImageList />
		</main>
	);
}
