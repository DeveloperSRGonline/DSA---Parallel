let n = Number(prompt("Enter a number"));
if (isNaN(n)) {
  console.log("Please write valid input");
} else {
  let i;
  for (i = 1; i <= n; i++) {
    console.log("Hello world");
  }
  console.log("Fail at", i);
}
