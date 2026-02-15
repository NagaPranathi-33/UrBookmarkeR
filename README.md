# 🔖 UrBookmarkeR - Smart Bookmark App

A full-stack, real-time bookmark manager built using **Next.js (App Router)** and **Supabase**.  

This application allows users to securely log in using **Google OAuth**, add and manage private bookmarks, and experience real-time updates across multiple tabs — all deployed live on Vercel.

---

## 🚀 Live Demo

🌐 Live URL: [(https://ur-bookmarke-r.vercel.app/)]

🔗 GitHub Repository: [(https://github.com/NagaPranathi-33/UrBookmarkeR/)]

---

## ✨ Features

- 🔐 Google OAuth Authentication (No email/password)
- ➕ Add bookmarks (Title + URL)
- 🗑️ Delete your own bookmarks
- 🔒 Bookmarks are private per user
- ⚡ Real-time updates across multiple tabs (powered by Supabase Realtime)
- 🌍 Fully deployed on Vercel

---

## 🏗️ Tech Stack

- **Frontend:** Next.js (App Router)
- **Backend & Database:** Supabase (Auth, PostgreSQL, Realtime)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

---

## 🧠 Architecture Overview

- Google OAuth handled via Supabase Auth
- User session managed securely on the client
- Bookmarks stored in Supabase PostgreSQL
- Row Level Security (RLS) ensures users can only access their own bookmarks
- Supabase Realtime subscription keeps UI synced across tabs instantly

---

## 🧩 Database Design

### Bookmarks Table

| Column      | Type      | Description                  |
|-------------|-----------|------------------------------|
| id          | uuid      | Primary key                  |
| user_id     | uuid      | Foreign key (auth user)      |
| title       | text      | Bookmark title               |
| url         | text      | Bookmark URL                 |
| created_at  | timestamp | Auto-generated timestamp     |

### Security

- Row Level Security (RLS) enabled
- Policy ensures:
  - Users can insert only their own bookmarks
  - Users can view only their own bookmarks
  - Users can delete only their own bookmarks

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone <your-repo-url>
cd smart-bookmark-app
```
###   **Challenges Faced**
1. Supabase API Integration

Problem:
Connecting the frontend with Supabase and handling API responses correctly was initially challenging. I faced issues with incorrect function calls and handling asynchronous operations.

Solution:
Carefully reviewed Supabase documentation
Debugged API responses using console logs
Ensured proper async/await handling
Structured database queries properly

2. Runtime Errors (e.g., Undefined Functions)

Problem:
At one point, I encountered errors like: deleteBookmark is not defined

Solution:
Traced the function reference in the component
Ensured proper function declaration and export
Verified correct binding and usage inside event handlers

3. Meeting Requirement #4

Problem:
Requirement #4 required careful implementation and testing to ensure everything worked as expected.

Solution:
Broke the requirement into smaller tasks
Tested each part individually
Refactored the structure to keep the logic clean and scalable

What I Learnt was
Practical integration of Supabase in a real project
Managing frontend-backend data flow
Debugging runtime errors effectively
Writing cleaner and more maintainable code

Final Thoughts

This project helped me improve my understanding of full-stack integration and debugging real-world issues. I focused not only on making the application work but also on keeping the structure clean and understandable.
