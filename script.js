function toggleMode() {
  const html = document.documentElement

  if (html.classList.contains("light")) html.classList.remove("light")
  else html.classList.add("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.src = "./assets/avatar-light1.png"
  } else {
    img.src = "./assets/avatar-joao.png"
  }
}
