async function carregardata() {
    fetch('data.json').then((res) => {
        console.log(res)
        const obj = {
            nome: JSON.stringify(res.text())
        }
        console.log(obj)

    })
}