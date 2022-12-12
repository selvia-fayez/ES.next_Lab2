fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
  response
    .json()
    .then((users) => {
      for (let user of users) {
        let divnames = document.getElementById("usersname");
        divnames.innerHTML += `<button id = ${user.id} onclick="DisTitle(event)">${user.name}</button>`;
      }
    })
    .catch((err) => console.log(err));
});

function DisTitle(event) {
  let divtitles = document.getElementById("usertitle");
  divtitles.innerHTML = "";
  let btn = event.target;
  btn.className = "btn";
  getTitles(event.target.id);
}
async function getTitles(userId) {
  let res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  let posts = await res.json();
  for (let post of posts) {
    let divtitles = document.getElementById("usertitle");
    divtitles.innerHTML += `<p>${post.title}</p>`;
  }
}
