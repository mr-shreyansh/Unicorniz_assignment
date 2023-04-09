import { HomeCard } from '@/components/home_card'
import styles from '@/styles/homepage.module.css'
import boat from '../assets/boat.jpg'
import scuba from '../assets/scuba.png'
import hotel from '../assets/hotel.png'
import Navbar from '@/components/Navbar'
import beach from '../assets/beach.jpg'
import Image from 'next/image'
import InfoCard from '@/components/info_card'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
const Homepage = () => {



  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 935, min: 0 },
      items: 1
    }
  };


  return (
    <main >

      <Image className={`${styles.img}`} alt='andaman' src={beach} >
      </Image>
      <div className={styles.text}>
        <h1 className={styles.heading}>
          ANDAMANS. YOUR WAY.
        </h1>
        <h2 className={styles.heading}>
          The best of Andamans, curated for you.
        </h2>
      </div>
      <div className={`${styles.card_list} grid grid-cols-1 w-full lg:grid-cols-4 md:grid-cols-2 gap-5 justify-items-end`}>
        <HomeCard className={`m-5 ${styles.card}`} heading={"Plan an incredible trip"} text={"Build the trip-of-a-lifetime with us"} pic={"https://img.freepik.com/premium-vector/route-location-way-icon-travel-route-map-maps-gps-map-localization-icon-stock-vector_799714-72.jpg?w=2000"} />
        <HomeCard className={`m-5 ${styles.card}`} heading={"The Best Hotels + Resorts"} text={"Build the trip-of-a-lifetime with us"} pic={hotel} />
        <HomeCard className={`m-5 ${styles.card}`} heading={"Explore Things-to-do"} text={"Build the trip-of-a-lifetime with us"} pic={scuba} />
        <HomeCard className={`m-5 ${styles.card}`} heading={"Ferry Bookings"} text={"Build the trip-of-a-lifetime with us"} pic={boat} />
      </div>
      <h1 className='text-center py-4 mt-9 text-xl'>Things To Know Before You Go</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 place-items-center md:w-[80vw] md:mx-[10vw] hidden md:inline-grid'>
        <div><InfoCard /></div>
        <div><InfoCard /></div>
        <div><InfoCard /></div>
        <div><InfoCard /></div>
      </div>
      <Carousel responsive={responsive} className='w-[80vw] mx-[10vw] sm:hidden'>
        <div className='md:hidden'><InfoCard /></div>
        <div className='md:hidden'><InfoCard /></div>
        <div className='md:hidden'><InfoCard /></div>
        <div className='md:hidden'><InfoCard /></div>
      </Carousel>;
    </main>
  );

}

export default Homepage;