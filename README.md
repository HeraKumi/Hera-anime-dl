[![npm version](https://badge.fury.io/js/hera-anime-dl.svg)](https://badge.fury.io/js/hera-anime-dl)
[![JavaScript Style Guide: Good Parts](https://img.shields.io/badge/code%20style-goodparts-brightgreen.svg?style=flat)](https://github.com/dwyl/goodparts "JavaScript The Good Parts")
[![https://nodei.co/npm/hera-anime-dl.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/hera-anime-dl.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/hera-anime-dl)
[![HitCount](http://hits.dwyl.io/HeraKumi/Hera-anime-dl.svg)](http://hits.dwyl.io/HeraKumi/Hera-anime-dl)


# Hera-anime-dl
This is a simple but yet a easy to use anime download CLI client for downloading anime also with a GUI version

# Want a GUI?
Windows : [Download](https://mega.nz/#!Eq5XjRxC!czE9hDKDG6ZfKE4OPRMj-_apv3WqVKy9LGLNXu4a4lc) | [VirusTotal](https://www.virustotal.com/#/file/75ad7a085cf692d91721d7fcfbbbb9b9798078a07d7b62296c5b6c19f1838852/detection)
Linux : [Download](https://mega.nz/#!ci4xwJhQ!W5u92XuqORT4FW-fmNWYVzRbu_GTaRGwM9uMAvXrbSg) | 


Not working on linux?
* Step 1: Download and extract the files to the desktop or anywhere you prefer
* Step 2: Open a terminal and cd into the directory you have extracted the files
* Step 3: `chmod +x Hera-Anime-Dl-Gui`
* Step 3: Now excute the file Hera-Anime-Dl-Gui with the following command `./Hera-Anime-Dl-Gui` and now you have access the GUI version of the cli <3

# Installing hera-anime-dl via git clone method
* Step 1: If you have installed node and npm (recommended latest version node 8) then you are fine, If you haven't installed node or npm I recommend using youtube to help you install it

* step 2: using git clone to download the repo: `git clone https://github.com/HeraKumi/Hera-anime-dl`

* Step 3: Installing the dependencies needed for hera-anime-dl to work `npm i -s`

* Step 4: Running the app, cd or open the folder called anime and run `node anime.js` and if all has gone well you should be greeted with a welcome and questions, if not feel free to create a ticket issue on GitHub or by click [this](https://github.com/HeraKumi/Hera-anime-dl/issues) and creating an issue

# Basic Usage
`node anime.js` this command should run the app, If not you should report the problem to the dev [here](https://github.com/HeraKumi/Hera-anime-dl/issues).

You should now see a question asking you what anime you want to download, Choose a name for the anime you want to get a downlink for and press enter. Thus by pressing enter, you should see a new question asking you to input an episode number, so enter an episode number. Now that part is done, you should now wait a few seconds, after waiting you should see an output like this
``` 
{
  urls: [
    'http://jkanime.net/stream/jkmedia/83b83090f08cbe7823cb0ed531f8cc72/0f40333b749a2a6d1bc5706accd73329/1/1de4451f8844a9c171830d25ff1cebbb/',
    'http://jkanime.net/stream/jkmedia/83b83090f08cbe7823cb0ed531f8cc72/4f501d26373b56e0fe0351c1a6154bd4/1/1de4451f8844a9c171830d25ff1cebbb/',
    'http://jkanime.net/stream/jkmedia/83b83090f08cbe7823cb0ed531f8cc72/ea38fc252cc488c0c1149875b8694f87/1/1de4451f8844a9c171830d25ff1cebbb/'
  ]
}
```
so here is the good part you see where it says URLS? copy one of the links to get the anime episode you wanted and paste it into a new tab in your browser and it should start downloading.

The video will be downloaded into you're Downloads folder.
