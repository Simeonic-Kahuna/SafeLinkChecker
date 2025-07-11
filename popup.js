function checkLink() {
  const input = document.getElementById('linkInput').value.toLowerCase();
  const resultDiv = document.getElementById('result');
  const blacklist = ["phishy.com", "badsite.net", "fakebank.ng", "bvnupdate.com"];
  const sketchyKeywords = ["login", "bvn", "password", "verify", "reset", "bank", "account"];
  const isSuspicious = blacklist.some(site => input.includes(site)) ||
                       sketchyKeywords.some(keyword => input.includes(keyword));
  resultDiv.textContent = isSuspicious ?
    "⚠️ Warning: This link may be unsafe!" :
    "✅ This link looks okay.";
  resultDiv.style.color = isSuspicious ? "red" : "green";
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('scanBtn').addEventListener('click', checkLink);
});
