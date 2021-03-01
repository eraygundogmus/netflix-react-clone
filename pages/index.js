import Link from 'next/link';
import { useRouter } from 'next/router';




export default function Home() {
  return (
    <div className="container">
      
      <img style={{ width : '70px'}} src="https://raw.githubusercontent.com/eraygundogmus/netflix-clone/main/assets/logo.png"/>
      <h1> Who is watching? </h1>
      <Link href="/homepage">
      <img className="avatar" src="https://occ-0-4451-778.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABeejl5K5m5X89-zGMTGwJpgBHWBDoeq0GBckfW0ozDQBUfsbEdB8gpxl6Ix18UfRtFZboYvFezfogNFHoiOd-kNukJ2d.png?r=dd1"/>
      </Link>
      
    </div>
  )
}