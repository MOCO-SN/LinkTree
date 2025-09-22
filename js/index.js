// popup show or hide funcations
function show(){

  const pop = document.getElementById('popup');
  popup.style.display = "block";
}
function hide(){

  const pop = document.getElementById('popup');
  popup.style.display = "none";
}

var sho = document.getElementById()

function copyText() {
  /* Copy text into Clipboard */
  window.confirm('Copied Sucessfully.. 🤗')
  if(confirm("Copied 😊")){
  }
  else{
    alert("Not Copied.😒")
    setTimeout(async () => {
      const text = await navigator.clipboard.readText();
      // console.log(text);
      alert(text)
      alert("This text is in your Clipboard");
    },2000);
  }
  navigator.clipboard.writeText
      ("https://snlick.surge.sh/");
}