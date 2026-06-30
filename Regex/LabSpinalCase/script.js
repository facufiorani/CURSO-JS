function spinalCase(string) {
  const newString = string
    .replace(/([A-Z])/g, " $1")
    .trim()
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
  return (newString);
}
spinalCase("This Is Spinal Tap");
