<img src="https://kingslanduniversity.com/wp-content/uploads/2021/12/Kingsland-Technology-Philippines.png" width="45%"></img> <img src="https://kingslanduniversity.com/wp-content/uploads/2021/12/Kingsland-Innovation-Center.png" width="45%"></img> 

# Welcome, Prospect Intern!

This repository contains the preset codebase for the Backend OJT assessment.

# Structure

## Frontend
This project does not include any frontend interactions.

## Backend
The backend is built with Javascript (Vanilla JS, Express).

Use `npm start` to launch the project and it will be hosted on [http://localhost:3100](http://localhost:3100).


# The Assessment

You have the technical freedom to install any libraries that you deem fit for the tasks.

## Backend

The routes have been premade for you. You have the freedom to use whatever database and ORM technology that you want. You may also opt to eliminate the database entirely and use in-memory storage.

Your task is to implement the actions behind the routes that fulfill the necessary requests.

Student
* GET (all) `/student/`
* GET (single) `/student:/id`
* DELETE `/student/:id`
* PATCH `/student/:id`

User
* GET (all) `/user/`
* GET (single) `/user/:id`
* POST `/register/`
* POST `/login/`

Please refer to this documentation as the basis on how you'll structure your payloads and responses.
https://api-demo.kingslandtesting.com/

# Extra Credit

Here are some extra credit tasks that you can do. These tasks are not required. Only proceed if you have met the basic functionalities described before this section.

## Backend
* Tokenized Sessions
  * You may use your own algorithm to generate tokens.
  * You may opt to use cookies or header Authorization tokens
* Authenticated links
  * Unauthenticated users can only access `/register/` and `/login/` routes.
  * Return proper HTTP codes.
* Use of ORM
* Adding more relevant routes
* Deploying and hosting the project somewhere (eg. Heroku)
* Unit tests

# Submitting
## 1. Fork the repository.

![img](https://kingslanduniversity.com/wp-content/uploads/2021/12/Repository-Forking.gif)

## 2. Clone the repository locally.

`git clone (your-unique-https-or-ssh-repository-link)`

![img](https://kingslanduniversity.com/wp-content/uploads/2021/12/Repository-Cloning.gif)

You will need to push changes into your forked repository.

## 3. Create a pull request to the main repository

Go to the Pull Requests section of the main repository.

https://github.com/kingsland-innovation-center/Kingsland-Full-Stack-OJT-Assessment/compare

Make sure to select the source `base repository:` as your forked repository and the target `base repository:` as our repository. You will see the list of changes. 

From here, click on `Create a pull request`.

![img](https://kingslanduniversity.com/wp-content/uploads/2021/12/v5ILL6EYFi.gif)

# Assessment Timeframe
You will hear from us within 1-2 business days regarding your assessment after you submitted your pull request.

<p align="center">
© 2021 Kingsland University, Kingsland Technology Philippines Inc., All rights reserved.
</p>