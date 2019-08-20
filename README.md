Folder structure 
----------------
    config          - It contains Webpack configs and entry javascript file 
    dist            - This is output folder used for Server-side code bundle 
    src             - Root Folder
        App         - Main App folder
        Assets      - It contains images and fonts 
        Pages       - It contains Pages
        Components  - It contains UI Components used for create Widgets
        Router      - It has the code for Routing for the project
    node_modules    - It contains installed NPM packages and node dependency 
    .babelrc        - It contains babel root config 
    package.json    - It contains package info along with running script and dependency details
    postcss.config  -  It contains config for postCss
    yarn.lock       - this is locks file and it contains details for installed npm packages 


Developmet build setup
-----------------------
nodejs version >=10.16.0 
yarn version >= 1.16 
react version >= 16.8.6 


Run comment :
-------------
1. yarn install 
2. yarn dev 



TODO:
------
1. Code optimization and performance [in-progress]
2. Production ready code [Done]
3. deployment using docker [Done]
4. deploy in s3 / heroku / amplify --> using this docker push as contianer we can achieve [todo]

Docker deployment notes
-----------------------

1. Install docker and related setup in local / server machine 
2. create an account in dockerhub 
3. copy Dockerfile along with build.sh and run.sh and paste it to where we need to deploy ( we can do via cmd cli comments )
4. execute build.sh and then run.sh with desired port details 
5. build will be available in mentioned port 


Efforts for this task:
----------------------
1. React setup along with webpack 4 - 12hrs (2SP) 
2. Router , Code splitting - 3hrs ( .5 SP)
3. UI with functionality (responsive ) - 12hrs (2SP)
4. Docker setup and deployment process - 18hrs ( 3SP)

Total 45 hrs (7.5 StoryPoints per developer) 



