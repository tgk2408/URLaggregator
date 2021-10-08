INSTRUCTIONS-

	In the server folder, install using 
		$ npm install 
			or
		$ yarn install
	
	Run using
		$ npm start 
			or
		$ yarn start 
			or 
		$ npx nodemon
	
	It will run on the port 5000.
	
	It will print "connected" in the terminal when it connects to the MongoDB database.

	In the client folder, install using 
		$ npm install 
			or
		$ yarn install
	
	Run using
		$ npm start 
			or
		$ yarn start 
	
	It will run on the port 3000.
	
	The homepage is common for all users who are not logged in. 
	Log in page is accessible through this homepage.
	Once logged in, the local storage gets an unique value depending upon the logged in user.
	This value is called slug. It can be passed as a parameter with the URL to access the user profile.
	There is also one dashboard which displays the stored URLs along with their icons corresponding to the slug value passed in the URL.
	If a user is logged in, then he/she has the option to add new links from his/her dashboard page.
	
	

https://user-images.githubusercontent.com/56961055/136562525-c78ba517-cdcf-4ebf-a121-0a77d7f03f8c.mp4



COLLABORATORS:-
	DIVY PRAJAPATI  - BACKEND  (server)
	KSHITIJ RAJ     - FRONTEND (client)
