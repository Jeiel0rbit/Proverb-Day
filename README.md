![](https://i.imgur.com/80WBR8i.png)

Pesquisei sites e aplicativos, mas não há outro que se tem uso de leitura diária para o livro considerado sagrado, em específico: Provérbios de Salomão. 

Tecnologias usadas:

- Javascript.
- CSS + Tailwindcss.
- Html.
- API.

### _Por quê?_

O livro de provérbios, contém 31 capítulos. Isso equivale ao mês. Sabemos que maioria dos meses têm 30 dias. Por esse motivo usei uma API chamada [A Biblia Digital](https://www.abibliadigital.com.br/). São mais de 11 milhões de requisições, com 7 versões, 4 idiomas e mútiplas funcionalidades para um desenvolvedor programar do seu jeito. API específica usado para filtrar o livro de provérbios foi:

```
https://www.abibliadigital.com.br/api/verses/acf/pv/${chapter}
```

> acf = Almeida Corrigida Fiel; versão.
> pv = Provérbios.

### _OK, mas e ${chapter}?__

`${chapter}` é um Fetch usado no javascript. Pois criei um lógica que seja correspondida, conforme fuso horário UTC-3 = Brasília, de cada dia. Significa que não tem como você avançar ou retroceder.

Aqui eu mostro como foi feito a sicronização da data com capítulo.

```
 const date = new Date();
        date.setTime(date.getTime() + (3600000 * -3)); // Ajuste para UTC-3
        const chapter = date.getDate();
        document.getElementById('chapter-display').textContent = `Capítulo ${chapter}`;
```

Para deixar um estímulo à leitura, foi adcionado um `dialog`. Somente quando o "Scroll" chega no final da página. Frase é: **Espírito edificado, volte amanhã fortificado!**

```
<!-- Dialog que aparece no final -->
    <dialog id="end-dialog">
        <p class="text-xl lg:text-2xl">Espírito edificado, volte amanhã fortificado!</p>
        <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg" onclick="document.getElementById('end-dialog').close();">Fechar</button>
    </dialog>
-------------------------------------
// Observe quando o usuário atinge o último versículo
                observeLastVerse();
            })
            .catch(error => console.error('Error fetching verses:', error));

        function observeLastVerse() {
            const lastVerse = document.getElementById('last-verse');
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Mostrar o dialog quando o último versículo for visualizado
                        document.getElementById('end-dialog').showModal();
                    }
                });
            });

            observer.observe(lastVerse);
        }
```

PWA simples foi adicionado para facilitar o acesso imediato. Códifo fonte se encontra no Github: https://github.com/Jetrom17/Proverb-Day

*Caso queira **mais de 10 versões** em português. Você pode acessar nesse link, escrito pelo colega @rodrigobsm.*

https://www.tabnews.com.br/rodrigobsm/criei-um-site-gratuito-com-14-versoes-da-biblia-em-portugues-do-brasil
