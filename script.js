let texto = document.querySelector(".entradaTexto")
let botaoGerar = document.querySelector(".botaoGerar")
let botaoBaixar = document.querySelector(".botaoBaixar")
let contendoQrCode = document.querySelector(".qrcode")

function gerarQrCode() {
    if(texto.value) {
        contendoQrCode.innerHTML = ""
        let qrCode = new QRCode(contendoQrCode,{
            text: texto.value,
            width: 256,
            heigth: 256,
        })
        botaoBaixar.style.display = "block"
    } else {
        alert("Por favor, digite algum texto ou URL para gerar o QR Code.")
    }
}

function baixarQrCode() {
    if (contendoQrCode.firstChild) {
        let link = document.createElement("a");
    link.href = contendoQrCode.firstChild.toDataURL("image/png")
    link.download = "qrcode.png";
    link.click();
    }
}

botaoGerar.addEventListener("click", gerarQrCode)
botaoBaixar.addEventListener("click", baixarQrCode)
