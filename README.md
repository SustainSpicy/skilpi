# React App README

This README provides instructions on how to set up and run the React app locally on your development environment.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js and npm**: Make sure you have Node.js and npm (Node Package Manager) installed on your system. You can download and install them from [nodejs.org](https://nodejs.org/).

## Getting Started

Follow these steps to set up and run the React app:

- **Clone the Repository**: Start by cloning this repository to your local machine. You can do this using the following command:

  ```shell
  git clone the repo

  ```

=> cd into /server directory

- **Install dependencies**: Install the node dependencies. You can do this using the following command:

  ```shell
  npm install or yarn install

  ```

- **Update the env files**: create a .env file and update the following values:

  ```
  UI_URL =

  //firebase parameter (realtime-database)
   API_KEY=
   AUTH_DOMAIN=
   DATABASE_URL=
   PROJECT_ID=
   STORAGE_BUCKET=
   MESSAGING_SENDER_ID=
   APP_ID=

   //VONAGE api parameter (for sending sms)
   VONAGE_API_KEY=
   VONAGE_API_SECRET=
  ```

````

- **start server**:You can do this using the following command:

  ```shell
    npm run dev

````

=> cd into /client directory

- **Install dependencies**: Install the node dependencies. You can do this using the following command:

  ```shell
  npm install or yarn install

  ```

- **Update the env files**: create a .env file and update the following values:

  ```
  REACT_APP_API_URL =
  ```

````

- **start server**:You can do this using the following command:

  ```shell
    npm run start

````
