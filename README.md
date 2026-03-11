# Let's make a SQL cheatsheet together! 

In the SQL-cheatsheet.md file, you will see several SQL-related terms. Some have been already been defined. Your job is to collaborate with your colleagues to define the rest of the SQL terms in this cheatsheet. 

In addition to reviewing your SQL knowledge, in this process you will also practice making and merging Git branches, editing Markdown, submitting a pull request, and reviewing one of your classmates' pull requests. 

## **Workshop Objectives**

1. Understand the concept of **branches** in Git.
2. Learn to create, switch, and manage branches.
3. Use GitHub to open and review **pull requests** (PRs).

## **Where we are now**

1. Basic familiarity with Git and GitHub (e.g., cloning, committing, and pushing changes).
2. Git installed on local machines.
3. GitHub accounts and access to a shared repository.
4. A code editor (e.g., VS Code).

## Resources

1. [A successful Git branching model](https://nvie.com/posts/a-successful-git-branching-model/)
2. [GitHub flow - GitHub Docs](https://docs.github.com/en/get-started/using-github/github-flow)
3. [Learn Git Branching Interactive Tutorial](https://learngitbranching.js.org/)
4. [Github Skills](https://skills.github.com/)
5. [Git and Github Learning Resources](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources)
6. [Pluralsight course: Git Real](https://app.pluralsight.com/library/courses/code-school-git-real/table-of-contents)
7. [git - the simple guide](https://rogerdudler.github.io/git-guide/)

---

## Instructions

### 1. Forking and Cloning this Github repo

1. Fork this Repository to make a copy into your Github account by selecting the 'Fork' button
   <img width="707" alt="Screenshot of Github repo with Fork button" src="https://github.com/user-attachments/assets/0f6a1ddf-60d2-4e63-859c-b84bfaafacde" />

2. Confirm you forked the repo. At the top of the repo's page, instead of `ac-backend` like in the below screenshot, you should see your own Github username followed by the name of the repo. 
    
    <img width="1201" alt="Screenshot showing the name of the repo and the username that owns the repo" src="https://github.com/user-attachments/assets/ed4dab00-fc78-4fd4-afd9-0283f2f62254" />



3. Clone the Repository into your local machine
    - Go to your Github repo's page on GitHub. Click on the green “Code” button and copy the repo's URL
        ![image](https://github.com/user-attachments/assets/fd6fcf7f-9246-42da-80be-0c4d75c3f48a)

        
    - Open the Terminal
    - `cd` to into your `dev` folder, which is where you want to clone the repo
    - Type `git clone YOUR_REPO_URL` , replacing `YOUR_REPO_URL` with your Github repo link that you copied
    - Press Enter to run the command. Now you’ve cloned your Github repo! 🎉

### 2. Making a new branch in your Github repo

1. Create a branch called “new-feature”
    
    ```bash
    git checkout -b new-feature
    ```
    
2. Verify the branch was created successfully:
    
    ```bash
    git branch
    ```
    
    - This command will open up a lightweight text editor called LESS, which is an application that lives within the terminal.
    - To exit LESS and go back to the command line, press the `q` key on your keyboard. You may have to press `q` multiple times.

3. Make sure you’ve switched to your new branch on VS Code
   - In the bottom left corner of VS Code, you should see the name of your new branch “new-feature”. This indicates that you have switched to your new branch on VS Code.
   - If it says “main” instead of “new-feature”, that means you are currently on the main branch. Click on the branch name to switch the branch you’re on in VS Code.
   - From now on, you should always check which branch you’re in before you write any code — you don’t want to accidentally write code in the wrong branch! Generally, you only write code in a feature branch or a develop branch, never in the main branch.

### 3. Edit the SQL-cheatsheet.md file in your `new-feature` branch

1. You have been assigned a PostgreSQL clause in the SQL-cheatsheet.md file. This file is written in Markdown, which is a markup language used to create formatted text. Write a description of what the SQL clause does, and provide example SQL code demonstrating how you'd use this clause. 

2. Once you have completed your new feature locally, commit your changes and push to your branch.
    
    ```bash
    git add .
    git commit -m "Added SQL clause definition and example code to SQL-cheatsheet.md"
    git push origin new-feature
    ```

### 4. Merging the new-feature branch into your main branch


1. **Switch to the Target Branch (e.g., `main`)**
   
      Run the following command to switch to the branch you want to merge into:
      
          
          git checkout main
          

3. **Update the Target Branch**
   
      Make sure your `main` branch is up-to-date with the latest changes from the remote:
          
          git pull origin main

5. **Merge the Specified Branch into the Current branch**
      
          git merge new-feature
      
   If this command takes you to a strange window in the Terminal where you can't type anything, don't panic! This is called Vim, a text editor that lives on the command line. You can exit back to the normal command line by typing `:wq`. 
   
6. **Push the Merged Changes to the Remote Repository**
   
      After a successful merge, push the updated `main` branch to GitHub:
      
          git push origin main
   

### 5. Submit a Pull Request (PR)
In order to have your code accepted back into the original repo, you'll need to submit a pull request. 

1. Open **your** repository on the Github website
2. Click on the Pull Requests tab
3. Start a New Pull Request
5. Select the Branches to Compare
6. Review the Changes:
    - GitHub will display a summary of the changes.
    - Ensure the listed changes match your expectations.
7. Add a Title and Description:
    - Write a descriptive title (e.g., “Added new feature”).
    - Provide a detailed description of the changes, including:
        - The purpose of the changes.
        - Any key features or fixes.
        - Any dependencies or testing instructions.
8. Submit the Pull Request:
    - Click the **Create Pull Request** button.
  
### 5. Review, Provide Feedback, and Accept another person's Pull Request

1. Review one other person's pull request and look at their code that they want to merge into the main branch. [The Github documentation on pull requests will help you do this.](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/approving-a-pull-request-with-required-reviews)
2. Add a comment to their pull request and provide feedback about their proposed changes. This is an opportunity to practice talking about code and giving respectful and constructive feedback: if you notice something cool or admirable, tell them! Or if you notice something they can improve or something they should fix before the pull request can be approved, let them know. 
3. If their code looks good to you, approve their pull request so that their code can be merged.

### If you get a merge conflict error
Congrats on encountering your very first merge conflict error! 🎉 [Check out this article to see how you can resolve it](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github)! 

## Recap

Let’s review what we did in this workshop:

- Fork - Make a copy of a remote repo to another remote repo
- Clone - Make a copy of a remote repo to our local machine
- Branch checkout - Create a new branch, allows us to work on our entire project in a separate workstream
- Add, Commit + Push our changes to our `new-feature` branch
- Switch back into the `main` branch
- Pull the code on the `main` branch to make sure we are all up to date
- Merged `new-feature` branch code into `main` branch
- Push `main` branch changes to remote repo
- Submitted a pull request to have code accepted back into original repo. Someone else will review our pull request. 
- Review and add comments/feedback to someone else's pull request
- Approved and merged someone else's pull request 
