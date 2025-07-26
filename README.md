# Portfolio Dashboard App

A visually polished portfolio viewer with dynamic pagination, user verification badges, and a clean dashboard layout.

---

## Getting Started

### Installation

```bash
npm install
```

### Running the App

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## Development Approach

- Built using **Next.js**, **Tailwind CSS**, and **Zustand** for local state management.
- Modular architecture: reusable UI components (Table, Badge, Pagination).
- Consumes mock API data via `fetch`, with dynamic pagination logic and badge color logic.

---

## ✅ API Test with Postman

The backend API was thoroughly tested using **Postman** to confirm valid JSON data is returned from:

```http
GET http://localhost:8080/api/data
```

**Response:**

![Backend API Test via Postman](./public/postman-backend-test.png)

---

## Final Frontend UI

Here’s a snapshot of the completed frontend dashboard:

![Frontend Dashboard Preview](./public/final-ui.png)

---

## Assumptions

- The API always returns clean JSON format.
- "Verified", "Not Verified", and "In Progress" statuses are sent directly by the backend.
- App is for internal tool usage, so no authentication or user roles implemented.

---

## Known Issues

- Sorting functionality is visual only (icons shown, no logic).
- No mobile responsiveness or accessibility optimizations yet.
- Client-side pagination only (no backend slicing).

---

## Folder Structure

```
components/
  ui/                # All reusable UI components (Table, Pagination, Badge, Avatar)
pages/
  index.tsx          # Dashboard main page
public/
  postman-backend-test.png   # API test screenshot
  final-ui.png               # Final frontend preview
```

---

## Documentation

- Fully commented, developer-friendly codebase.
- Easy to extend with filters, column sorting, or server-side pagination.

---

## Testing Summary

| Item                         | Status |
|------------------------------|--------|
| API connectivity             | ✅      |
| Pagination working           | ✅      |
| Data rendering               | ✅      |
| Badge color/status mapping   | ✅      |
| UI tested on 1280px viewport | ✅      |

---

# Implementation Report

## Features Implemented
- Paginated table displaying user portfolios
- Verification badges with dynamic styles
- Responsive layout with alternating row colors
- Scrollable table when row count exceeds limit
- Sort icon displayed beside column headers

## Technical Decisions
- Chose Tailwind CSS for rapid styling
- Used `useState` + `useEffect` for pagination and data fetching
- Manual control of rows per page with `SmartPagination` component

## Trade-Offs
- Chose to mock sorting UI without actual sorting logic due to time constraints
- Focused on layout precision and scroll behavior over search/filter

## QA Test Report

### Steps Taken:
- Loaded dashboard in browser and verified correct rendering.
- Confirmed pagination works when more than 10 rows exist.
- Used Postman to verify GET endpoint delivers expected data.

### Bugs:
- None critical. Sorting and filtering are yet to be implemented.

### Tools Used:
- Postman (for API testing)
- Browser DevTools (layout inspection)

---

## Contact

For any queries or feedback, feel free to reach out via GitHub or email.

---

