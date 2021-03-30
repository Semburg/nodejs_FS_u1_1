const fs = require('fs');

fs.readFile('./blog1.txt', "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});

let text = " I'm really more an apartment person."

fs.appendFile('./blog1.txt', text, 'utf-8', (err) => {
    if (err) throw err
    console.log('file written')
})
//!    see HOW exactly it is overwritten!  with append we are CREATING new file as well if this is nocht existing!!!

let text2 = "new text - overwriting!"
fs.writeFile('./blog1.txt', text2, 'utf-8', (err) => {
    if (err) throw err
    console.log('file written')
})

//?  mkdir
// console.log("----------MKDIR---------");
// fs.mkdir('./blog2.txt', { recursive: true }, (err) => {
//     if (err) throw err;
//   });


//? create new file from njs


//! no need for utf by writing
  let text3 = "one more extra text"
  fs.appendFile('./blog3.txt', text3, (err) => {
    if (err) throw err
    console.log('file written')
})

//?  ordner assets

fs.mkdir('./assets', { recursive: true }, (err) => {
    if (err) throw err;
  });

  //todo -   one file in new folder:
  fs.appendFile('./assets/blog3.txt', text3, (err) => {
    if (err) throw err
    console.log('file written')
})

//?  rename assets/text3.txt   to text4.txt

if (fs.existsSync('./assets/blog3.txt')) {
    fs.rename('./assets/blog3.txt', './assets/blog4.txt', (err) => {
        if (err) throw err;
        console.log('Rename complete!');
    });
}




