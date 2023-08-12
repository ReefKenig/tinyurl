TinyURL web application

An API for creating shortened URL of real internet addresses.

Frameworks:

- React
- Typescript

Features:

1. Home page- Displaying a welcome message and a navbar to navigate to other endpoints
2. Create TinyURL- A form for typing URL and receiving a shortened address back
3. URL Management- View all active TinyURLs

Installation:

1. Clone the github repository https://github.com/ReefKenig/tinyurl.git

2. Docker must be installed on your system with the following images:

- All images are available online at DockerHub
  - postgres: latest
  - python: latest
  - node: latest

3. In the project root folder open terminal and run the command "docker compose up" to run the services

4. Open your browser and go to http://localhost:3000

Instructions (running the app locally):

1. In order to create your first TinyURL go to the navbar and press "Create TinyURL"
2. In the text field input the full URL address and press "Generate TinyURL"
3. Congratulations, You created your first TinyURL! Now just press it and you will be redirected to your desired website
4. Want to view all TinyUrls that you created? Go to the "Manage TinyURLs" page
5. Click on whichever link you want to be redirected
