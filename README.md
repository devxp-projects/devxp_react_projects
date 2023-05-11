# Repository for DevXP projects
This repository is the monorepo for all DevXP React projects for 2023. Please fork it and head to your Cohorts project to work there.

## Project structure
Each app is divided into two. The main app and the test app. The main app has the app name eg ch4 and the test app has e2e at the end of its name e.g ch4-e2e. Just work on the app that your cohort is working on and forget about the rest.

## How to run an App
We use ```yarn``` as our package manager. So under no circumstance should ```npm``` be used.
## Install the packages 

```bash
    yarn install 

```
Each app is run by running yarn plus the name of your cohort, - the environment. So to run Ch3 web (React(NextJS)) just run 
```bash
    yarn ch3-web
    or
    yarn ch3-api 
```
We use [MUI](https://mui.com/) for UI. And only when absolutely very neccessary should another UI library or CSS be used directly. MUI has all the component you need
