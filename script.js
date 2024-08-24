const regrasCriptografia = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

const regrasDescriptografia = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
};

function criptografar(texto) {
    return texto.split('').map(caractere => regrasCriptografia[caractere] || caractere).join('');
}

function descriptografar(texto) {
    let textoDescriptografado = texto;
    for (let chave in regrasDescriptografia) {
        textoDescriptografado = textoDescriptografado.split(chave).join(regrasDescriptografia[chave]);
    }
    return textoDescriptografado;
}

document.getElementById('botao-criptografar').addEventListener('click', function() {
    const textoEntrada = document.getElementById('texto-entrada').value;
    const ladoDireito = document.getElementById('lado-direito');
    ladoDireito.innerHTML = '';

    const textoCriptografado = criptografar(textoEntrada);

    const textoSaida = document.createElement('p');
    textoSaida.textContent = textoCriptografado;
    textoSaida.style.fontSize = '24px';
    textoSaida.style.color = '#666';
    textoSaida.style.textAlign = 'center';
    textoSaida.style.padding = '32px';
    ladoDireito.appendChild(textoSaida);

    const botaoCopiar = document.createElement('button');
    botaoCopiar.textContent = 'Copiar';
    botaoCopiar.id = 'botao-copiar';
    botaoCopiar.style.marginTop = '32px';
    ladoDireito.appendChild(botaoCopiar);

    botaoCopiar.addEventListener('click', function() {
        const areaTemporaria = document.createElement('textarea');
        areaTemporaria.value = textoCriptografado;
        document.body.appendChild(areaTemporaria);
        areaTemporaria.select();
        document.execCommand('copy');
        document.body.removeChild(areaTemporaria);
    });

    document.getElementById('botao-descriptografar').style.backgroundColor = 'white';
});

document.getElementById('botao-descriptografar').addEventListener('click', function() {
    const textoEntrada = document.getElementById('texto-entrada').value;
    const ladoDireito = document.getElementById('lado-direito');
    ladoDireito.innerHTML = '';

    const textoDescriptografado = descriptografar(textoEntrada);

    const textoSaida = document.createElement('p');
    textoSaida.textContent = textoDescriptografado;
    textoSaida.style.fontSize = '24px';
    textoSaida.style.color = '#666';
    textoSaida.style.textAlign = 'center';
    textoSaida.style.padding = '32px';
    ladoDireito.appendChild(textoSaida);

    const botaoCopiar = document.createElement('button');
    botaoCopiar.textContent = 'Copiar';
    botaoCopiar.id = 'botao-copiar';
    botaoCopiar.style.marginTop = '32px';
    ladoDireito.appendChild(botaoCopiar);

    botaoCopiar.addEventListener('click', function() {
        const areaTemporaria = document.createElement('textarea');
        areaTemporaria.value = textoDescriptografado;
        document.body.appendChild(areaTemporaria);
        areaTemporaria.select();
        document.execCommand('copy');
        document.body.removeChild(areaTemporaria);
    });
});
