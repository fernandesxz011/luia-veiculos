# Prompt para criar o efeito do carro desmontando ao rolar

Copie e cole este prompt no Codex dentro do VS Code:

> Trabalhe neste projeto existente da Luia Veículos e preserve integralmente a identidade visual oficial da marca: logo original, vermelho, preto e branco, tipografia, conteúdo, responsividade e funções já existentes.
>
> Crie na página inicial uma seção cinematográfica e premium, inspirada em apresentações interativas de automóveis, controlada pela rolagem do mouse. Nessa seção, um carro deve permanecer centralizado e em destaque enquanto a página avança. Conforme o usuário rola para baixo, o carro deve ser desmontado progressivamente em uma vista explodida: primeiro a carroceria e portas, depois rodas, vidros e faróis, interior e bancos e, por último, componentes mecânicos. As peças devem se afastar suavemente do centro, em direções coerentes, mantendo a leitura visual do veículo. Ao rolar para cima, toda a animação deve acontecer exatamente ao contrário até o carro ficar montado novamente.
>
> Use React Three Fiber com Three.js e GSAP ScrollTrigger se o projeto já estiver em React. Se este projeto continuar em HTML/CSS/JavaScript puro, use Three.js e GSAP ScrollTrigger sem migrar o site inteiro nem quebrar a estrutura atual. A seção deve usar pin durante a animação, scrub ligado à rolagem e uma timeline contínua, sem reproduzir um vídeo comum. A rolagem deve controlar diretamente o progresso da animação.
>
> Antes de implementar, analise a estrutura do projeto e escolha a solução menos invasiva. Organize o código em componentes ou módulos reutilizáveis, carregue os recursos apenas quando a seção estiver próxima da tela e não altere nenhuma seção existente sem necessidade.
>
> Para um efeito 3D real, use um modelo GLB/GLTF de automóvel com as peças separadas e nomes claros no arquivo. Não invente nem baixe um modelo sem licença: crie a estrutura esperando o arquivo em public/models/carro-luia.glb e documente exatamente como substituí-lo. No código, associe os grupos do modelo às etapas da desmontagem e permita ajustar facilmente distância, rotação e tempo de cada peça por uma configuração central.
>
> Se ainda não houver um GLB/GLTF com peças separadas, implemente provisoriamente uma versão demonstrativa em camadas 2.5D usando imagens transparentes separadas, mantendo a mesma arquitetura de timeline, e deixe comentários claros indicando onde trocar pelo modelo 3D definitivo. Não tente simular desmontagem usando uma única imagem, pois isso gera deformações falsas.
>
> Direção visual: fundo escuro premium com luz vermelha discreta da Luia, reflexos realistas, leve movimento de câmera, profundidade e sombra suave. Durante a desmontagem, exiba textos curtos sincronizados com as etapas, como “Design”, “Segurança”, “Conforto” e “Performance”, sem poluir a tela. O foco principal deve continuar sendo o carro.
>
> Requisitos técnicos: animação fluida a 60 fps quando possível; renderização limitada pelo devicePixelRatio; compressão Draco ou Meshopt para o modelo; lazy loading; barra de progresso ou skeleton durante o carregamento; pausa quando a seção não estiver visível; dispose correto de geometrias, materiais e texturas; respeito a prefers-reduced-motion; fallback estático para dispositivos fracos; funcionamento com mouse, touchpad e rolagem no celular; layout perfeito em desktop, tablet e mobile.
>
> Não use imagens externas quebráveis em produção. Não mude a logo oficial da Luia. Não remova estoque, filtros, financiamento, avaliação do usado, contatos ou botões existentes. Não deixe erros no console.
>
> Ao terminar: execute o projeto, teste a animação indo e voltando com a rolagem, verifique responsividade, rode o build, corrija eventuais erros e explique em um README curto quais arquivos foram alterados, onde colocar o modelo 3D e como regular a intensidade e a duração do efeito.

## Observação importante

O resultado realmente parecido com um carro desmontando exige um modelo 3D cujas peças estejam separadas. Uma foto única ou um modelo inteiro, sem objetos independentes, não permite desmontagem realista.
