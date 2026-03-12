# How to run
```bash
cd backend
npm install
npm run dev
# Runs at http://localhost:3000
##frontend
cd frontend
npm install
npm run dev
# Runs at http://localhost:5173

## AI prompts used
- how to make this very clear and understandable
-how to link with git repository 
-how to check in the browser 

##What AI Generated vs What I Modified
- **AI Generated:** React Context boilerplate (`TaskContext.jsx`), sample components (`AddTask.jsx`, `TaskList.jsx`), instructions for connecting frontend to backend.
- **Modified by Me:** API design in `tasks.js`, MongoDB integration, authentication logic, filtering (All / Pending / Completed), README documentation.
# API design 
- GET /api/tasks → Fetch all tasks
- POST /api/tasks → Add new task (title, description, status, createdAt)
- PUT /api/tasks → Toggle task status (Pending ↔ Completed)
- DELETE /api/tasks/:id → Delete a task (optional)

# State management (non‑AI generated)
- Used React Context API for global state.
- Tasks fetched from backend and stored in context.
- Filtering implemented for All / Pending / Completed.
- Toggle updates both frontend state and backend API.

# Authentication details
- Used React Context API for global state.
- Tasks fetched from backend and stored in context.
- Filtering implemented for All / Pending / Completed.
- Toggle updates both frontend state and backend API.
# deliverables
## Deliverables
- **GitHub Repo Link:** https://github.com/AnshikaGupta-cloud/task-portal
- **README Includes:**
  - How to run
  - AI prompts used
  - What AI generated vs what I modified
  - API design (non‑AI generated)
  - State management (non‑AI generated)
  - Authentication details