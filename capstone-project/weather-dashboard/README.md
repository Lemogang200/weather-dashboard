Weather Dashboard (React + Vite)
A beginner-friendly Weather Dashboard built with React and Vite that allows users to search for a city and view real-time weather information using a public weather API.
This project is ideal for learning React fundamentals, working with APIs, managing state, and using environment variables in a modern Vite setup.

Features
•	Search weather by city name
•	Displays current temperature and weather conditions
•	Shows humidity and wind speed
•	Dynamic weather icons based on conditions
•	Friendly error messages for invalid searches
•	Responsive design for mobile and desktop

Tech Stack
•	Framework: React
•	Build Tool: Vite
•	Language: JavaScript (ES6)
•	Styling: TailwindCSS
•	API: OpenWeatherMap API

Prerequisites
Make sure you have:
•	Node.js (v16 or later recommended)
•	npm or yarn
•	A free weather API key (OpenWeatherMap)


Installation
1.	Clone the repository:
 	git clone https://github.com/Lemogang200/weather-dashboard.git
2.	Navigate into the project folder:
 	cd weather-dashboard
3.	Install dependencies:
 	npm install
4.	Start the development server:
 	npm run dev
 	
API Configuration (Vite)
1.	Sign up at a weather API provider (e.g., OpenWeatherMap)
2.	Generate your API key
3.	Create a .env file in the project root
4.	Add your API key using the Vite format:
 	VITE_WEATHER_API_KEY=your_api_key_here
5.	Access the key in your code:
 	import.meta.env.VITE_WEATHER_API_KEY
    
How the App Works (Beginner Explanation)
1.	The user types a city name into the search input
2.	When the form is submitted, the app calls the weather API
3.	The API returns weather data in JSON format
4.	React stores the data using useState
5.	The UI automatically updates when the state changes

Error Handling
•	Shows a message when the city is not found
•	Prevents empty searches
Learning Extensions
Want to keep practicing? Try adding:
•	5-day forecast
•	Temperature unit toggle (°C / °F)
•	Recent search history
•	Dark mode

Acknowledgments
•	Weather data provided by OpenWeatherMap
•	Built with React + Vite for learning purposes

Contact
Created by Lemogang Seroka
Email: taaiboseroka@gmail.com
GitHub: https://github.com/Lemogang200