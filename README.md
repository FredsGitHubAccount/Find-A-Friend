# Find-A-Friend
An application that matches you with an Archer character after filling out a survey.

## Table of Contents 

## Objective 

Created an application that provides a survey to the user and based on the results, it will match you with a character from the television series Archer.  Utilizing express, I was able to host my application and set up my HTML and API routes.

## Screenshot

![Screenshot](/ss/findafriend.png)


## Code Structure

My server.js contains the code necessary to launch my application by hosting my CSS, JavaScript, requiring my routes, and express's settings to function with JSON.  The public folder contains two HTML files, the homepage and survey.  The data folder contains my friends.js where I keep all the data for the individuals that can be potential matches based on the survey.  My routing folder handles all of the POST & GET requests.  The apiRoutes.js file contains the logic to match you with an Archer character from the friends.js file after extracting the survey results.  

### Technologies
Front-End
- [ ] HTML5
- [ ] CSS3
- [ ] JavaScript
- [ ] Bootstrap
- [ ] Animate.CSS

Back-End
- [ ] Express.js
- [ ] Node.js
- [ ] NPM Packages

### Setup 
```
1. git clone https://github.com/FredsGitHubAccount/Find-A-Friend.git
2. cd Find-A-Friend in your terminal
3. npm install
4. node server.js
5. Go to http://localhost:8087 or another port if you modified the code

```


