Movie Explorer

Movie Explorer is a sleek, interactive web application to browse, search, and favorite movies. Featuring light/dark mode, dynamic movie cards, and responsive design, it’s perfect for movie enthusiasts looking for an engaging user experience.

Features:
Dynamic Movie Display: Browse a collection of movies displayed as animated cards.
Search Movies: Filter movies in real-time by typing in the search bar.
Favorites: Mark your favorite movies with the heart button and see them stored in the console.
Light/Dark Mode: Toggle between light and dark themes for comfortable viewing.
Responsive Design: Optimized for desktop, tablet, and mobile screens.
Animated Cards: Smooth hover effects, scaling, and shadow animations.

Technologies Used:
HTML5 & CSS3 – Structure, styling, animations, and responsive layouts.
JavaScript – Handles dynamic movie rendering, search functionality, favorites, and dark mode toggle.
Google Fonts – 'Poppins' for modern, clean typography.

How It Works:

Display Movies:
Movies are stored in an array of objects containing title, year, and poster URL. The displayMovies() function generates movie cards dynamically in the container.

Search:
The search input listens for keyup events and filters movies based on the typed query.

Favorites:
Clicking the heart icon toggles the movie in the favorites array and shows an alert confirming the action.

Dark Mode:
Clicking the dark mode button toggles the dark-mode class on the body and updates the button text.
