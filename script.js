document.getElementById('search-input').addEventListener('input', function() {
    var searchValue = this.value.toLowerCase();
    var containers = document.querySelectorAll('.container');

    containers.forEach(function(container) {
        var title = container.querySelector('.title');
        var legend = container.querySelector('.legend');

        var titleText = title.textContent.toLowerCase();
        var legendText = legend.textContent.toLowerCase();

        // Resetando o conteúdo original
        title.innerHTML = titleText;
        legend.innerHTML = legendText;

        // Verificando e destacando o texto pesquisado
        highlightText(title, searchValue);
        highlightText(legend, searchValue);

        // Exibindo ou ocultando o contêiner com base na pesquisa
        if (titleText.includes(searchValue) || legendText.includes(searchValue)) {
            container.style.display = 'flex';
        } else {
            container.style.display = 'none';
        }
    });
});

function highlightText(element, searchValue) {
    var text = element.textContent.toLowerCase();
    var index = text.indexOf(searchValue);

    if (index !== -1) {
        var originalText = element.textContent;
        var highlightedText = originalText.substring(0, index) + '<span class="highlight">' + originalText.substring(index, index + searchValue.length) + '</span>' + originalText.substring(index + searchValue.length);
        element.innerHTML = highlightedText;
    }
}