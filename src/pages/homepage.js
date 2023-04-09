import { HomeCard } from '@/components/home_card'
import styles from '@/styles/homepage.module.css'
import boat from '../assets/boat.jpg'
import scuba from '../assets/scuba.png'
import hotel from '../assets/hotel.png'
import Navbar from '@/components/Navbar'
import beach from '../assets/beach.jpg'
import Image from 'next/image'
import InfoCard from '@/components/info_card'
const Homepage = () => {

  const cards = [];

  for (let i = 0; i < 4; i++) {
    cards.push(<InfoCard i={i} />);
  }

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
     <div className='grid grid-cols-1 md:grid-cols-2 place-items-center lg:w-[70vw] lg:mx-[15vw] '>
        {cards}
     </div>

    </main>
  );

}

export default Homepage;