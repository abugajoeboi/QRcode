import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';


//1  : use the inquirer npm package to get user input
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message:'type in your URL:',
        name:'URL'
    }


  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers)
    const url = answers.URL;



    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('q_image.png'));
    

    fs.writeFile('url.txt', url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 




  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
//2  : use the qr-image npm package to turn the user link into an image

//3  :  create a text file to save the user input using the fs native load module