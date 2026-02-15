'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function BookmarkList({ user }: any) {
  const [bookmarks, setBookmarks] = useState<any[]>([])

  const fetchBookmarks = async () => {
    const { data } = await supabase
      .from('bookmarks')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })

    if (data) setBookmarks(data)
  }

  // ✅ MAKE SURE THIS EXISTS
  const deleteBookmark = async (id: string) => {
    await supabase
      .from('bookmarks')
      .delete()
      .eq('id', id)
  }

  useEffect(() => {
    if (!user) return

    fetchBookmarks()

    const channel = supabase
      .channel('bookmarks-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'bookmarks',
        },
        () => {
          fetchBookmarks()
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [user])

  return (
    <div className="space-y-4">
      {bookmarks.length === 0 && (
        <p className="text-gray-500 text-sm">No bookmarks yet.</p>
      )}

      {bookmarks.map((bookmark) => (
        <div
          key={bookmark.id}
          className="border p-4 rounded flex justify-between items-center"
        >
          <div>
            <a
              href={bookmark.url}
              target="_blank"
              className="font-medium text-blue-600 hover:underline"
            >
              {bookmark.title}
            </a>
            <p className="text-xs text-gray-500 break-all">
              {bookmark.url}
            </p>
          </div>

          <button
            onClick={() => deleteBookmark(bookmark.id)}
            className="px-2 py-1 text-sm bg-red-100 text-red-600 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}
