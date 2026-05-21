import { useEffect, useMemo, useRef, useState } from 'react'
import tournaments, { STATUS_TABS } from '../data/tournaments'
import TournamentCard from '../components/TournamentCard'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth , db } from '../config/firebaseConfig'
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import axios from 'axios';
import { FaUser, FaSignOutAlt } from "react-icons/fa";

const Tournaments = () => {
  const [activeTab, setActiveTab] = useState('ALL')
  const [showBottomNav, setShowBottomNav] = useState(false)
  const tabsRef = useRef(null)
  const featuredTournament = tournaments.find((item) => item.featured) ?? tournaments[0]
    const [showFirst, setShowFirst] = useState(true);
  const [userData, setUserData] = useState(null);
  const { user, loading} = useAuth();
 const apiUrl = import.meta.env.VITE_API_URL;



  const filteredTournaments = useMemo(() => {
    if (activeTab === 'ALL') return tournaments
    return tournaments.filter((item) => item.status.toUpperCase() === activeTab)
  }, [activeTab])


  const handleLogout = async (e) => {
    try {
      axios.post(`${apiUrl}/signout `,{
    withCredentials: true,
  } )
      await signOut(auth);
    } catch (error) {
      console.log(error)

    }
  }

  const fetchUserData = async (uid) => {

    const userRef = doc(db, "users", uid);
    const snap = await getDoc(userRef);

    if (snap.exists()) {
      return snap.data(); // contains isPaid
    }

    return null;
};

  useEffect(() => {
    const tabsElement = tabsRef.current
    if (!tabsElement) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowBottomNav(!entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    observer.observe(tabsElement)

    return () => observer.disconnect()
  }, [])



  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 5000); // Swaps every 3 seconds
    return () => clearInterval(interval);
  }, []);

    useEffect(()=>{
      console.log(user)
    },[user])


  return (
    <main className="min-h-screen bg-[#060b18] pb-28 text-white ">

      <section className="pt-5 sm:pt-6 mt-8">
        <div className="relative overflow-hidden">
          <div className="relative w-full aspect-video overflow-hidden">
            <img
              src={featuredTournament.thumbnail}
              alt={featuredTournament.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-10 lg:p-16">
            {/* Label: Slightly smaller on mobile to keep it on one line */}
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f6e925] sm:text-xs">
              Featured Tournament
            </p>

            {/* Title: Using text-2xl for mobile and 6xl for very large screens */}
            <h1 className="mt-1 max-w-4xl text-2xl font-black leading-[1.1] text-white sm:text-4xl md:text-5xl lg:text-6xl">
              {featuredTournament.title}
            </h1>

            {/* Description: Hidden or clamped on very small screens to prevent overlap, full view on desktop */}
            <p className="mt-2 max-w-2xl line-clamp-2 text-xs leading-relaxed text-slate-200 sm:line-clamp-none sm:text-base md:text-lg">
              {featuredTournament.description}
            </p>

            {/* Button: Responsive padding */}
            <a
              href={loading ?'' : `#${featuredTournament.id}`}
              onClick={()=>{setActiveTab('ALL')}}
              className="mt-4 inline-flex items-center rounded-md bg-[#f6e925] px-4 py-2 text-xs font-extrabold text-[#0c1227] transition-all hover:scale-105 hover:bg-[#fff34f] sm:px-6 sm:py-3 sm:text-sm"
            >
              {
                loading ? 'Loading....' : ' Watch Now'
              }
             
            </a>
          </div>
        </div>
      </section>

      <section ref={tabsRef} className="mx-auto max-w-6xl px-4 pb-6 sm:px-6">
        <div className="no-scrollbar flex gap-2 overflow-x-auto py-2">
          {STATUS_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-md px-4 py-2 text-xs font-bold tracking-wide transition-all sm:text-sm ${activeTab === tab
                ? 'bg-[#f6e925] text-[#0b1227]'
                : 'text-slate-200 hover:bg-[#152345]'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-4 transition-all duration-300 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTournaments.map((tournament) => (
            <div
              key={tournament.id}
              id={tournament.id}
              className="animate-[fadeIn_250ms_ease-out]"
            >
              <TournamentCard tournament={tournament }  />
            </div>
          ))}
        </div>
      </section>

      {showBottomNav ? (
        <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-[#223457] bg-[#0a1430]/95 px-3 py-3 backdrop-blur md:hidden">
          <div className="no-scrollbar mx-auto flex max-w-6xl gap-2 overflow-x-auto">
            {STATUS_TABS.map((tab) => (
              <button
                key={`bottom-${tab}`}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap rounded-md px-4 py-2 text-xs font-bold tracking-wide transition-all ${activeTab === tab
                  ? 'bg-[#f6e925] text-[#0b1227]'
                  : 'text-slate-200 hover:bg-[#152345]'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </nav>
      ) : null}
    </main>
  )
}

export default Tournaments