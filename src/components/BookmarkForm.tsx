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
      user_id: user.id
    })

    setTitle("")
    setUrl("")
  }

return (
  <div className="flex flex-col gap-3 mb-6">

    <input
      className="border p-2 rounded"
      placeholder="Bookmark Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />

    <input
      className="border p-2 rounded"
      placeholder="https://example.com"
      value={url}
      onChange={(e) => setUrl(e.target.value)}
    />

    <button
      onClick={addBookmark}
      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
    >
      Add Bookmark
    </button>

  </div>
)
}