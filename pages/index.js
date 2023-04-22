import Artist from "@/components/Artist"
import Library from "@/components/Library"
import Player from "@/components/Player"
import PlaylistView from "@/components/PlaylistView"
import Search from "@/components/Search"
import Sidebar from "@/components/Sidebar"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"

export default function Home() {
  const [view, setView] = useState("search") // ["search", "library", "playlist", "artist"]
  const [globalPlaylistId, setGlobalPlaylistId] = useState(null)
  const [globalArtistId, setGlobalArtistId] = useState(null)
  const [globalCurrentSongId, setGlobalCurrentSongId] = useState(null)
  const [globalIsTrackPlaying, setGlobalIsTrackPlaying] = useState(false)

  return (
    <>
      <main className="h-screen overflow-hidden bg-black">
        <div className="flex w-full">
          <Sidebar
            view={view}
            setView={setView}
            setGlobalPlaylistId={setGlobalPlaylistId}
          />
          {view === "playlist" && <PlaylistView
            setView={setView}
            setGlobalArtistId={setGlobalArtistId}
            globalPlaylistId={globalPlaylistId}
            setGlobalCurrentSongId={setGlobalCurrentSongId}
            setGlobalIsTrackPlaying={setGlobalIsTrackPlaying}
          />}
          {view === "search" && <Search
            setView={setView}
            setGlobalPlaylistId={setGlobalPlaylistId}
            setGlobalCurrentSongId={setGlobalCurrentSongId}
            setGlobalIsTrackPlaying={setGlobalIsTrackPlaying}
            setGlobalArtistId={setGlobalArtistId}
          />}
          {view === "library" && <Library
            setView={setView}
            setGlobalPlaylistId={setGlobalPlaylistId}
          />}
          {view === "artist" && <Artist
            setView={setView}
            globalArtistId={globalArtistId}
            setGlobalArtistId={setGlobalArtistId}
            setGlobalCurrentSongId={setGlobalCurrentSongId}
            setGlobalIsTrackPlaying={setGlobalIsTrackPlaying}
          />}
        </div>
        <div className="sticky z-20 bottom-0 w-full">
          <Player
            globalCurrentSongId={globalCurrentSongId}
            setGlobalCurrentSongId={setGlobalCurrentSongId}
            setGlobalIsTrackPlaying={setGlobalIsTrackPlaying}
            globalIsTrackPlaying={globalIsTrackPlaying}
          />
        </div>
      </main>

    </>
  )
}
