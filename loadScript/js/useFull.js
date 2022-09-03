console.log("useFull");

loadScript("js/a.js", () => {
  console.log("From useFull ", a);

  loadScript("js/b.js", () => {
    console.log("result sum a + b ", a + b);
  });
});
