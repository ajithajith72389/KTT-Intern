git config -l
    returns list of information about your git configuration including the user.name and user.email.

git config --global user.name "Your Name"
git config --global user.email "your_email@example.com"
    you can set your name and email using these commands.

git config --global credential.helper cache
    to store login information in cache.

git init
    to initialize a new git repository locally in your project root.

git add filename
    to add a single file to staging area.

git add .
    to add all files in the current directory to staging area.

git add fil*
    to add all files that start with "fil" to staging area.

git status
    fetch the status of your current repository, including which files are staged, unstaged and untracked files.

