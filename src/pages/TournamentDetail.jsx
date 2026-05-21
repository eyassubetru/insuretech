import { ArrowLeft, Share2 } from 'lucide-react'
import { Link, useParams } from 'react-router'
import tournaments from '../data/tournaments'

const TournamentDetail = () => {
  const { id } = useParams()
  const tournament = tournaments.find((item) => item.id === id)

  if (!tournament) {
    return (
      <div className="min-h-screen bg-[#070a14] p-6 text-white">
        <Link to="/" className="text-cyan-300">
          Back to Home
        </Link>
        <p className="mt-4 text-slate-300">Tournament not found.</p>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-[#060b18] px-4 py-5 text-white sm:px-6">
      <div className="mx-auto max-w-6xl space-y-4 pb-10">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-md border border-[#2d3d63] bg-[#0c142b] px-4 py-2 text-sm font-semibold text-slate-200"
          >
            <ArrowLeft size={16} />
            Back
          </Link>
        </div>

        <section className="grid gap-4 lg:grid-cols-[1.8fr_1fr]">
          <div className="overflow-hidden rounded-md border border-[#2d3d63] bg-black">
            <iframe
              className="h-[230px] w-full sm:h-[360px]"
              src={tournament.streamEmbedUrl}
              title={tournament.title}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
          <aside className="space-y-3 rounded-md border border-[#2d3d63] bg-[#0c142b] p-4">
            <h1 className="text-xl font-black uppercase sm:text-2xl">{tournament.title}</h1>
            <p className="text-sm text-slate-300">{tournament.description}</p>
            <div className="space-y-1 text-sm text-slate-300">
              <p>Game: {tournament.game}</p>
              <p>Schedule: {tournament.dateTime}</p>
              <p>Prize Pool: {tournament.prizePool}</p>
            </div>
          </aside>
        </section>

        <section>
          <div className="rounded-md border border-[#2d3d63] bg-[#0c142b] p-4">
            <h2 className="mb-2 text-lg font-bold text-[#f6e925]">Match Details</h2>
            <p className="text-sm text-slate-300">{tournament.matchDetails}</p>
            <h3 className="mb-2 mt-4 text-base font-bold text-[#8bc2ff]">Teams / Players</h3>
            <div className="flex flex-wrap gap-2">
              {tournament.teams.map((team) => (
                <span
                  key={team}
                  className="rounded-sm border border-[#268dff]/40 bg-[#268dff]/10 px-3 py-1 text-xs text-[#9dcdff]"
                >
                  {team}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default TournamentDetail