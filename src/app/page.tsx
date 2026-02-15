"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import BookmarkForm from "@/components/BookmarkForm"
import BookmarkList from "@/components/BookmarkList"

export default function Home() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser()
      setUser(data.user)
    }

    getUser()
  }, [])

  const signOut = async () => {
    await supabase.auth.signOut()
    window.location.reload()
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading...
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="bg-white shadow-sm p-4 flex justify-between items-center border-b">
        <div>
          <h1 className="font-bold text-xl tracking-tight">
            Smart Bookmark
          </h1>
          <p className="text-sm text-gray-500">
            {user.email}
          </p>
        </div>

        <button
          onClick={signOut}
          className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 hover:scale-105 transition"
        >
          Sign Out
        </button>
      </div>

      <div className="max-w-2xl mx-auto p-4">
        <BookmarkForm user={user} />
        <BookmarkList user={user} />
      </div>
    </main>
  )
}




// export default function Home() {

//   const [user, setUser] = useState<any>(null)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const getUser = async () => {
//       const { data } = await supabase.auth.getUser()
//       setUser(data.user)
//       setLoading(false)
//     }

//     getUser()

//     const { data: listener } = supabase.auth.onAuthStateChange(
//       (_event, session) => {
//         setUser(session?.user ?? null)
//       }
//     )

//     return () => {
//       listener.subscription.unsubscribe()
//     }
//   }, [])

//   if (loading) {
//     return <div className="p-10">Loading...</div>
//   }

//   if (!user) {
//     return (
//       <div className="flex h-screen items-center justify-center">
//         <LoginButton />
//       </div>
//     )
//   }

//   return (
//     <div className="max-w-xl mx-auto mt-10">
//       <h1 className="text-xl mb-4">
//         Welcome {user.email}
//       </h1>

//       <BookmarkForm user={user} />
//       <BookmarkList user={user} />
//     </div>
//   )
// }






// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }
