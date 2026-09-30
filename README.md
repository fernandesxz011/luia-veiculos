# Luia Veículos

Protótipo de portfólio de uma vitrine automotiva, desenvolvido com **HTML, CSS e JavaScript**, sem framework ou backend. O projeto explora a apresentação de veículos e o caminho entre encontrar um modelo e iniciar uma conversa comercial.

**Status:** demonstração frontend em desenvolvimento. Não há comprovação de publicação como site oficial ou de entrega aprovada para cliente. Estoque, preços, condições, garantias, imagens, endereço e contatos presentes na interface precisam de confirmação antes de qualquer uso comercial.

## Funcionalidades implementadas

- Busca por palavras com normalização de acentos, combinada com filtros de marca, preço máximo e categoria.
- Três veículos de demonstração, estado de busca sem resultados e botão para limpar filtros.
- Favoritos visuais mantidos apenas enquanto a página está aberta; não há conta ou armazenamento persistente.
- Simulador local com entrada ajustável e prazos de 36, 48 ou 60 meses. A taxa fixa no código serve à demonstração; não existe integração com bancos ou aprovação de crédito.
- Botões que preparam mensagens de interesse, simulação e avaliação de veículo para abrir no WhatsApp. O formulário não envia dados a um backend próprio.
- Menu para telas menores e navegação pelas seções de estoque, financiamento, venda e localização.

## Estrutura

| Arquivo | Responsabilidade |
| --- | --- |
| [index.html](index.html) | Conteúdo, cartões de veículos, formulários e navegação. |
| [styles.css](styles.css) | Identidade visual, layouts e regras responsivas. |
| [script.js](script.js) | Filtros, favoritos, calculadora, mensagens e menu. |
| [PROMPT_EFEITO_CARRO.md](PROMPT_EFEITO_CARRO.md) | Referência de direção visual; não é uma lista de funcionalidades entregues. |
| [.gitignore](.gitignore) | Exclusões de arquivos locais e padrões comuns de segredos. |

As fontes Manrope e Oswald são solicitadas ao Google Fonts. Não há etapa de build ou instalação de dependências JavaScript para executar o site.

## Executar localmente

Na pasta do repositório, com Python 3 instalado:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Abra `http://127.0.0.1:8000`. A página também pode ser aberta pelo `index.html`, mas um servidor local facilita identificar recursos ausentes.

## Imagens e conteúdo comercial pendentes

A pasta `assets/` não está versionada. O HTML referencia quatro arquivos ausentes:

- `assets/logo-luia.png` — cabeçalho, rodapé e favicon.
- `assets/hero-showroom.webp` — imagem de abertura.
- `assets/honda-city.webp` — imagem de veículo.
- `assets/tcross.webp` — imagem de veículo.

O Fiat Pulse já usa um aviso de foto indisponível. É necessário obter imagens autorizadas e confirmar a identidade visual antes de completar a apresentação. Os números promocionais do hero não representam um inventário verificado; o código contém três cartões de demonstração.

## Validação e limitações

Em 30/09/2026, uma verificação local em Chromium conferiu larguras de 375, 768 e 1440 px: não houve rolagem horizontal, erros de JavaScript ou âncoras internas quebradas. Busca, marca, estado vazio, limpeza de filtros, favorito e abertura do menu foram exercitados. A preparação do link de WhatsApp foi interceptada, sem envio de mensagens. Recursos externos, incluindo fontes, ficaram bloqueados nessa verificação.

Pendências identificadas:

- Corrigir a calculadora quando o valor do veículo é reduzido: o limite da entrada muda depois do cálculo, podendo deixar o texto e a parcela divergentes do controle.
- Reforçar a validação: o formulário aceita quilometragem negativa e telefone sem formato válido. Os campos entram em uma URL do WhatsApp; usar dados fictícios durante testes e confirmar o destinatário antes do uso comercial.
- Ajustar contraste de textos e botões apontado pela análise automatizada de acessibilidade; revisar também teclado, foco e estados dos favoritos/filtros.
- Completar as imagens e validar novamente o layout com as fontes e os recursos finais.

Não há autenticação, painel administrativo, banco de dados, estoque sincronizado ou integração financeira implementados. Uma futura API precisará validar os dados no servidor; a validação do navegador não substitui esse controle.

## Desenvolvimento assistido por IA

Ferramentas de IA apoiam a prototipação, pesquisa e desenvolvimento. O trabalho envolve definição de requisitos, direcionamento, revisão e testes, com o objetivo de compreender as soluções e evoluir tecnicamente. As limitações registradas acima delimitam o que foi validado.
