# Ethio Open-Source Community Main Site

A Web App for ethio open-source community on which various ongoing or planned projects are showcased and aimed to enable new contributors to onboard to projects that is interesting to them.

## Requirements

- Latest version of [Node.js and npm](https://nodejs.org/ro/download)
- Git and Github account
- Use git-bash, bash or [WSL](https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux) to run the following command

## Technologies and Libraries used

If you want to contribute to this project you need to understand those libraries and technologies

1. React.js with [Next.js](https://nextjs.org/)
2. [Sanity](https://www.sanity.io/)
3. [Material UI](https://mui.com/)

## Installation

If you want to contribute to this project or wanted to run it on your local machine make sure to follow those instructions.

```bash
# clone the project to your local machine
git clone <git-repo>
cd <main-site>
npm install # install dependencies
cp .env.example .env
# ⚠️ populate .env with sanity and redis credentials
# 🌟 open the project with your fav editor
code .
# 🚀 run the project
npm run dev

```

> **Important** You can access sanity studio in `/studio` (<http://localhost:3000/studio>)
