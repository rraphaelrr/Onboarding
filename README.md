# Install environment

Before clone project, install node.js and command line npm

# First install all dependency

Then install environment, clone project, open your command line, go in file project and run command line "npm install" for install all dependency to project

# Run in localhost

If you're going development, use in command line of project "npm start"

# Build for Deploy

if you are going to publish the project, first change the version in "package.json" alternating in 5/5, example "1.0.5" will become "1.1.0", then check if the url you want to upload is correct in constants/Products.js and constants/Info.js, if everything is ok, in the command line, use "npm run build". This command will generate a file called "build", use this file to publish the project
