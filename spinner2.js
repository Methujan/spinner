const spin = () => {
  let seconds = 100;
  let lines = ['|', '/', '-', "\\",'|', '/', '-', "\\"];

  for (let line of lines) {
    setTimeout(() => {
      process.stdout.write(`\r${line}   `);
    }, seconds);

    seconds += 200;
  }

  setTimeout(() => {
    process.stdout.write('\n');
  }, seconds);
};

//TEST CODE
spin();


//OLD CODE
/*setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r\\   ');
}, 700);

setTimeout(() => {
  process.stdout.write('\r\|   ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1100);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1300);

setTimeout(() => {
  process.stdout.write('\r\\   ');
}, 1500);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1700);
*/