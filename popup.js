function checkLink() {
  const input = document.getElementById('linkInput').value.toLowerCase();
  const resultDiv = document.getElementById('result');

  const blacklist = ["phishy.com", "badsite.net", "fakebank.ng", "bvnupdate.com"];
  const sketchyKeywords = ["login", "bvn", "password", "verify", "reset", "bank", "account"];

  let isSuspicious = blacklist.some(site => input.includes(site)) ||
                     sketchyKeywords.some(keyword => input.includes(keyword));

  if (isSuspicious) {
    resultDiv.innerHTML = "⚠️ Warning: This link may be unsafe!";
    resultDiv.style.color = "red";
  } else {
    resultDiv.innerHTML = "✅ This link looks okay.";
    resultDiv.style.color = "green";
  }
}
