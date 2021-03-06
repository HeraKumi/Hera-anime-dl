const input = require('input');
const chalk = require('chalk');
const anime = require('anime-dl');
const boxen = require('boxen');
const ProgressBar = require('progress');

let bar = new ProgressBar(':bar', { total: 20 });
let timer = setInterval(function () {
  bar.tick();
  if (bar.complete) {
      console.log(chalk.red(boxen("Welcome to Hera's Anime Download CLI console application", {padding: 1, margin: 1, borderStyle: 'double'})));
      
      async function animeDownload() {
          const name = await input.text('What anime would you like to download? || ');
          
          if (name) {
            await input.text == null
          } else {
              console.log(chalk.bgRed('ERROR: Please make sure you have entered something other than leave it blank.'))
              return;
          }

          const chapter = await input.text('And now what episode would you like to download || ')

          if (chapter) {
              await input.text == null
          } else {
              console.log(chalk.bgRed('ERROR: Please make sure you have enterted something, if not you have to re-run the cli and try again'))
              return;
          }

          anime.getLinksByNameAndChapter(name, chapter).then((results)=>{
              console.log(chalk.green(results.urls));
            });
        }
        animeDownload();
        
    clearInterval(timer);
  }
}, 100);


/* 
const anime = require('anime-dl')

const query = 'boku no kanojo'
const results = await anime.searchAnime(query)

if (results.length > 0) {
    const name = results[0].name
    console.log(results[0])
    const chapter = '1'
    const data = await anime.getLinksByNameAndChapter(name, chapter)
}
 */
