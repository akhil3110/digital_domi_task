# Digital_Domi_TASK
## About the Project:
This is project is a task for Digital Domi.<br />

where you can upload A Image and extract text from It.<br />
* Here First user Have to login using credentials or, with google or github account
* Then you can upload image containing text
* After uploading image text will be extracted from it using Tesseract.js 
* And you will be directed to the page where the text extracted will be displayed

You can also see the history of the user. A dedicated history page is created.
Where you can see the images you have been used and also can delete the history.


## Getting Started

### Start the server

First go to the server directory
```bash
cd .\server\
```

Install all dependencies required for the backend:
```bash
npm i
```

Now all the depedencies are intalled you can start the server:
```bash
npm run dev
```

Now go to the root directory again
```bash
cd ..
```

### Start the Frontend

First Cd to the server directory
```bash
cd .\client\
```

Now set up .env file 
```bash
cp .env.sample .env
```

Add all you the requires keys in .env file 
(I have already provided all my env variables so that it can be easy for you to run the project locally)

Now project set up is completed now you can run the project
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Technologies Used
A list of technologies used within the project:
* Next.js
* React.js
* Tesseract.js
* Tailwind CSS
* Zustand (State Managment)
* Clerk (for Authentication)
* Mongoose
* MongoDB
* Express
* Node.js
* axios
* UploadThing (Cloud Provider)

