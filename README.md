# Poem App

A React application for managing your collection of poems. Create, read, mark as favorite, and organize your poetry collection all in one place.


## Features

- **View All Poems**: Browse through your collection of poems
- **Create New Poems**: Add new poems with title, author, and content
- **Toggle Read Status**: Mark poems as read or unread
- **Favorite Poems**: Add poems to your favorites for quick access
- **Delete Poems**: Remove poems you no longer want in your collection
- **Data Persistence**: All your poems are saved locally and remain after refreshing the page
- **Responsive Design**: Works on desktop and mobile devices

## Project Structure

```
poem-manager/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── PoemForm.jsx    # Form to create new poems
│   │   ├── PoemList.jsx    # List of poems
│   │   └── PoemCard.jsx    # Individual poem card
│   ├── App.jsx            # Main application component
│   ├── App.css            # Styles for the application
│   ├── index.js           # Entry point
│   └── index.css          # Global styles
├── README.md
└── package.json
```

## Installation and Setup

1. Install dependencies:
```
npm install
```

2. Run the development server:
```
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## How to Use

1. **View Poems**: When you first open the app, you'll see all your poems (if any exist).
2. **Add a New Poem**: Click the "Add New Poem" button to show the form, fill in the details, and click "Save Poem".
3. **Toggle Read Status**: Click the "Mark as read" button to toggle the read status of a poem.
4. **Favorite a Poem**: Click the "Add to Favorites" button to add a poem to your favorites.
5. **View Favorites**: Click the "Favorites" tab to see only your favorite poems.
6. **Delete a Poem**: Click the "Delete" button to remove a poem from your collection.
7. **Expand/Collapse Poem**: Click on a poem title to expand or collapse its content.

## Technologies Used

- React (Hooks)
- CSS

## License

MIT# poesy-dennis-wanjohi
