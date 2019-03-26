# SSD Group Project Starter
Starter project files for the final group project for the SSD Front-End Web Design course.

## Project Installation and Building Instructions

**IMPORTANT:** If you intend to use these starter files as is, then please follow both the install and the submission instructions fully. Failure to do so will result in development errors and build errors.

## Install Instructions

The following instructions, assume you have already installed, Node.js, Git and / or the GitHub Desktop application on your computer system. 

- [Install Node.js](https://nodejs.org/)
- [Install Git](https://git-scm.com/)
- [Install the GitHub Desktop Application](https://desktop.github.com/)

To install this project do the following:

### 1. Create a New Separate Repo

Create a new empty repo on GitHub for your group project.

Once you have created your new GitHub repo, clone it down to your local machine by either clicking the big green button on your repo page and selecting "Open in Desktop" or copy the Git URL for your repo and running `git clone [your-github-repo-url]` from the terminal or command line. 

### 2. Download the SSD Starter Files Repo

Download the [SSD Starter Files](https://github.com/michaelwhyte/ssd-group-project-starter) repo by clicking the big green "Download" button on this repo's GitHub page and choosing "Download ZIP".

Once downloaded, unzip this repo. 

**Note:** You can clone this repo as well, but you will not have permission to push changes to this repo so you will quickly get errors. So I would just download a ZIP copy of this repo.

### 3. Copy files from SSD Starter Files to Your Project Repo

With your own group project cloned to your local machine and the SSD Starter Files repo files downloaded, copy all the files in the "ssd-starter-file" folder and paste them into your project repo folder.

Once you have copied over all the files, add and commit all the new files to your project using Git and push them up to your GitHub repo.


### 4. Install Gulp Globally

**Note:** If you have already installed Gulp globally on your computer for another project, then you can skip this step.

Install Gulp.js globally on your machine by launching the terminal app on a Mac, the Node.js CMD Prompt or Powershell on Windows and typing the following command and pressing enter:

#### Mac Terminal

```shell
$ sudo npm install gulp -g 
```
**Note:** On a Mac after entering the above command you will be prompted to enter your computer's login password. When you enter the password into the terminal nothing will appear to be happening. This is normal, just keep typing your password and then press enter.

#### Windows Node.js CMD Prompt or PowerShell

```shell
$ npm install gulp -g
```
### 3. Install this Repo's Node.js Dependencies

In the Terminal app (Mac) or the Node.js CMD Prompt or PowerShell (Windows), change the directory to the directory where you cloned your group project's repo on your computer in step 1.

```shell
$ your-computer> cd the/path/to/your/repo/on/your/computer
```

With your terminal application pointed at this repo's folder, type the following command and press enter.

```shell
$ npm install
```

That's it! You have installed this repo and are now ready to run and build this project.

## Development and Building Instructions

### Development Instructions

For the day to day development of your project, follow the instructions below.

### 1. CD To Your Repo and Run Gulp

Make sure your terminal application is pointing at the root directory of your group project's repository, then enter the following command into your terminal application and press enter:

```shell
$ gulp
```

The above terminal command will fire up Gulp, which in turn will run BrowserSync for automatic browser refreshes on code changes and the Sass compiler for compiling Sass.

Once the above command has been entered, you can just write all your code throughout the day and Gulp will watch your files and compile Sass as needed. No further interaction on your part is needed.

Run this "gulp" command at the start of each day to re-start Gulp.

Don't forget to commit and push your changes to this repo up to GitHub throughout the day.

**Note:** There is no need to run a "sass --watch" command for this project. Gulp takes care of all the Sass compiling for you.

### Build Instructions

To create a final production version of your website run these build instructions.

### 1. CD To Your Repo and Run Gulp

Make sure your terminal application is pointing at the root directory of your group project's repository, then enter the following command into your terminal application and press enter:

```shell
$ gulp build
```

Running the above command automatically will compress all your source files, compile all your Sass files into CSS and copy all the project files over to the the "dist" folder.

Push the newly created "dist" files up to GitHub to have a production ready version of your project up on GitHub.

## FAQ's

### Q. Our CSS files and our styles folder are not pushing up to GitHub?

That is the correct behaviour. Version controlling compiled CSS files will lead to constant merge conflicts. Not having compiled CSS files in the GitHub repo is not an issue because any team member can easily regenerate the compiled CSS files by running the "gulp" command in the terminal.

### How do I install Google Fonts

The easiest method is to grab the "link" code from Google Fonts and place it in the head section of the index.html file of this project.

**IMPORTANT** Do not place the "link" code for the Google Fonts in-between the "css:build" comments. Doing so will cause errors when you run the project submission instructions. See the comments in the index.html file for details on where to put the Google fonts link code.
