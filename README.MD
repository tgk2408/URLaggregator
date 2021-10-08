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
	
	https://rr5---sn-cvh7knzl.c.drive.google.com/videoplayback?expire=1633712630&ei=tkFgYfSOJZOUmvUPhLaI6AY&ip=61.2.59.15&cp=QVRIVUhfUVZRQVhPOnptVzlpeDdlVUJuWWNMRkhrRThFU3BtdWFiQWNJYlVZalJBSjhWbVRiZmg&id=7b630361c2799522&itag=22&source=webdrive&requiressl=yes&mh=GU&mm=32&mn=sn-cvh7knzl&ms=su&mv=m&mvi=5&pl=21&ttl=transient&susc=dr&driveid=1glO9RgjN7awyOxM6jf8pSLfprMu9qVqI&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=65.805&lmt=1633697991401351&mt=1633698034&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRAIgbZSBEZgt5ModX-JZyHjmr5C35UgSwKdCEDib03qzku8CIA55IYUjLqfHBC-1yE58wrHnJ5O3rTa3cQT0cVhxfYaC&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgYHYnGcMNn3_5_OPu-k3yqA-5P-CCibU3abjl1ztCr-UCIQDSnlt-W2Dg5tP0anRbtw5q63ZjuFTLXxhGIN5gve1zRg==&cpn=9yiMHQ20xMTS8Y-Y&c=WEB_EMBEDDED_PLAYER&cver=1.20211005.1.0

COLLABORATORS:-
	DIVY PRAJAPATI  - BACKEND  (server)
	KSHITIJ RAJ     - FRONTEND (client)