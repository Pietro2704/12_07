let botao = document.querySelector("#btn")

botao.addEventListener("click", () => {
    let user = document.querySelector("#username").value
    let password = document.querySelector("#password").value

    if (user === "Pietro" && password === "1234") {
        let texto = "Parabens!!!"
        let p = document.querySelector("#magic").textContent = texto
    }
})