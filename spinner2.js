process.stdout.write('hello from spinner1.js... \rheyyy\n');

let time = 0;
const symbols = ['|', '/', '-', '\\', '|', '/', '-', '\\'];

for (const arr of symbols) {  
  setTimeout(() => {
    process.stdout.write(`\r${arr}     `);
  }, time);
  time += 200;
};