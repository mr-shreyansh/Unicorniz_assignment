import { HomeCard } from '@/components/home_card'
import styles from '@/styles/homepage.module.css'
import boat from '../assets/boat.jpg'
import scuba from '../assets/scuba.png'
import hotel from '../assets/hotel.png'
import Navbar from '@/components/Navbar'
import beach from '../assets/beach.jpg'
import Image from 'next/image'
const Homepage = () => {

  return (
    <main >

      <Image className={`${styles.img}`} alt='andaman' src={beach} >
      </Image>
      <div className={styles.text}>
        <h1>
          ANDAMANS. YOUR WAY.
        </h1>
        <h2>
          The best of Andamans, curated for you.
        </h2>
      </div>
      <div className={`${styles.card_list} grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center`}>
        <HomeCard className="m-5" heading={"Plan an incredible trip"} text={"Build the trip-of-a-lifetime with us"} pic={"https://img.freepik.com/premium-vector/route-location-way-icon-travel-route-map-maps-gps-map-localization-icon-stock-vector_799714-72.jpg?w=2000"} />
        <HomeCard className="m-5" heading={"The Best Hotels + Resorts"} text={"Build the trip-of-a-lifetime with us"} pic={hotel} />
        <HomeCard className="m-5" heading={"Explore Things-to-do"} text={"Build the trip-of-a-lifetime with us"} pic={scuba} />
        <HomeCard className="m-5" heading={"Ferry Bookings"} text={"Build the trip-of-a-lifetime with us"} pic={boat} />
      </div>
    </main>
  );

}

export default Homepage;