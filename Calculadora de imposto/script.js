document.getElementById('calcular').addEventListener('click', function() {
    const renda = parseFloat(document.getElementById('renda').value);
    const deducoes = parseFloat(document.getElementById('deducoes').value);
    const taxa = parseFloat(document.getElementById('taxa').value);

    if (isNaN(renda) || isNaN(deducoes) || isNaN(taxa) || renda < 0 || deducoes < 0 || taxa < 0) {
        document.getElementById('resultado').innerText = 'Por favor, insira valores válidos.';
        document.getElementById('detalhes').classList.add('hidden');
        return;
    }

    const rendaTributavel = renda - deducoes;
    const imposto = (rendaTributavel * (taxa / 100)).toFixed(2);

    document.getElementById('resultado').innerText = `Imposto a Pagar: R$ ${imposto}`;
    document.getElementById('detalhes').innerText = `Renda Total: R$ ${renda}\nDeduções: R$ ${deducoes}\nRenda Tributável: R$ ${rendaTributavel.toFixed(2)}`;
    document.getElementById('detalhes').classList.remove('hidden');
});
