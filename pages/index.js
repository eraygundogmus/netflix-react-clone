import Link from 'next/link';



export default function Home() {
  return (
    <div className="index_container">
      <img className="index__logo" src="https://raw.githubusercontent.com/eraygundogmus/netflix-clone/main/assets/logo.png"/>
      <h1> Who's watching? </h1>
      <div className="img_container">
        <Link href="/homepage">
        <img className="avatar" src="https://occ-0-4451-778.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABeejl5K5m5X89-zGMTGwJpgBHWBDoeq0GBckfW0ozDQBUfsbEdB8gpxl6Ix18UfRtFZboYvFezfogNFHoiOd-kNukJ2d.png?r=dd1"/>
        </Link>
      </div>
      <h3 className="username">Boomer</h3>
    </div>
  )
}