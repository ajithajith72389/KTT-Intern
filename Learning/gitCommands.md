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

git commit
git commit -m "commit message"
git commit -a -m "commit message"
    to add and commit tracked files

git log
    to view the commit history of your repository.

git log -p
    to view the commit history including all files and its commit changes.

git show commit-id
    show some statistics about the changes in each commit.

git diff
    show unstage changes by default.

git add -p
    opens a prompt and asks if you want to stage changes or not and including others options.

git rm filename
    a commit message to explain why the file was deleted.

git rv oldname newname
    to rename a file in the staging area.

git checkout filename
    Revert unstaged changes in git

git reset HEAD filename
git reset HEAD -p
    Revert staged changes in git

git branch branch_name
    create a new branch in your repository.

git checkout branch_name
    check out a branch in your repository.

git branch
    to view all branches in your repository.

git checkout -b branch_name
    create a new branch and switch to it immediately in your repository.

git checkout -d branch_name
    delete a branch in your repository.

git merge branch_name
    To merge the history of the branch you are currently in with the branch_name.

git add remote origin_url
    add a remote repository to your local repository.

git remote -v
    see all remote repositories for your local repository.

git remote show origin
    to get more info about a remote repo in Git.

git push
    push changes to a remote repo

git pull
    If other team members are working on your repository, you can retrieve the latest changes made to the remote repository