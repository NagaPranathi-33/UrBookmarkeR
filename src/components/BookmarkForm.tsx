"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"

export default function BookmarkForm({ user }: any) {
  const [title, setTitle] = useState("")
  const [url, setUrl] = useState("")

  const addBookmark = async () => {
    if (!title || !url) return

    await supabase.from("bookmarks").insert({
      title,
      url,
      user_id: user.id,
    })

    setTitle("")
    setUrl("")
  }

  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-800 w-full max-w-xl">
      <h2 className="text-xl font-semibold mb-4 text-white">
        Add New Bookmark
      </h2>

      <div className="flex flex-col gap-4">
        <input
          className="bg-gray-800 border border-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          placeholder="Bookmark Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="bg-gray-800 border border-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <button
          onClick={addBookmark}
          className="bg-green-600 hover:bg-green-700 transition text-white font-semibold py-3 rounded-lg"
        >
          Save Bookmark
        </button>
      </div>
    </div>
  )
}
