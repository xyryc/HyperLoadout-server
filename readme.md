# HyperLoadout Server

This repository contains the server-side code for the HyperLoadout web application.

Live: [https://hyperloadout.web.app/](https://hyperloadout.web.app/)  
Live Backup: [https://hyperloadout.surge.sh/](https://hyperloadout.surge.sh/)  
Client Repo: [https://github.com/xyryc/HyperLoadout-client](https://github.com/xyryc/HyperLoadout-client)  
Server Repo: [https://github.com/xyryc/HyperLoadout-server](https://github.com/xyryc/HyperLoadout-server)


## Introduction

HyperLoadout's server powers user authentication, CRUD operations, and sorting, built with modern backend technologies.

## Features

- User authentication and authorization
- Sort, Filter
- Product Management

## Installation

To get started with the server, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/xyryc/HyperLoadout-server.git
   ```
2. Navigate to the project directory:
   ```bash
   cd HyperLoadout-server
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:

   Create a `.env.local` file in the root directory and add your configs.

   ```bash
    DB_USER=db_username
    DB_PASS=db_password
   ```

5. Start the server:
   ```bash
   nodemon index.js
   ```

## Usage

Once the server is up and running, you can access the server from `http://localhost:5000/`.

## Contribution

Feel free to fork the repository, make improvements, and submit a pull request. For major changes, open an issue first to discuss the proposed changes.
