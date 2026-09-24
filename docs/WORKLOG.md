# Worklog técnico

## Objetivo atual

Executar a rodada final de refinamento visual, UX, copy e conversão do `sites.arturcarletto.com`, preservando a arquitetura existente, a identidade de Artur Carletto como Engenheiro de Software e o caráter demonstrativo dos quatro conceitos.

## Checkpoint 1 — Auditoria inicial

### Concluído

- `AGENTS.md`, documentação estratégica do Obsidian e pedido completo desta rodada relidos; o vault permaneceu estritamente somente leitura.
- Git confirmado limpo antes das alterações (`34bf651`).
- Arquitetura, páginas, componentes, dados, estilos e documentação inventariados.
- Inspeção visual inicial executada em desktop e em 320 px nas páginas institucionais e nos quatro modelos.
- O indicador “1 Issue” foi rastreado até falhas do `next/font/google` ao buscar Manrope e Newsreader em `fonts.googleapis.com`; não foram encontrados erros nem avisos de runtime da aplicação.
- Problemas prioritários confirmados: conteúdo cortado no limite direito em 320 px, WhatsApp genérico quebrando a imersão das demos, disclaimers em posição inadequada, demonstrações ainda pouco interativas e trechos de copy vagos.

### Arquivos modificados

- `docs/WORKLOG.md`

### Pendências

- Eliminar dependência de download de fontes no desenvolvimento.
- Corrigir largura/overflow no mobile e safe areas.
- Tornar o contato persistente contextual nas demos.
- Refinar Home, `/sites` e cada modelo, com interações acessíveis e sem alegações inventadas.
- Executar lint, build e matriz final de inspeção visual.

### Próximo passo

Aplicar correções globais: fontes locais, largura mobile, WhatsApp contextual, acessibilidade compartilhada e base de interações.

## Checkpoint 2 — Correções globais

### Concluído

- Manrope e Newsreader migradas de `next/font/google` para arquivos locais; recompilações posteriores ocorreram sem novos avisos de rede das fontes.
- Corte lateral da Home em 320 px corrigido com itens de grid realmente redimensionáveis e escala tipográfica específica para telas estreitas.
- Botão flutuante passou a respeitar safe areas com margem adicional.
- Nas páginas institucionais, o contato continua direto com Artur; nas quatro demos, o rótulo agora acompanha a intenção do segmento e abre uma janela acessível que esclarece a natureza fictícia antes de encaminhar ao WhatsApp real.
- Foco inicial, fechamento nativo por Escape e clique fora foram incorporados ao diálogo demonstrativo.

### Arquivos modificados

- `src/app/layout.tsx`
- `src/app/globals.css`
- `src/app/fonts/manrope-latin.woff2`
- `src/app/fonts/newsreader-latin.woff2`
- `src/components/floating-whatsapp.tsx`
- `docs/ASSETS.md`
- `docs/WORKLOG.md`

### Pendências

- Refinar Home e `/sites` para mostrar prova visual e escopo comercial com mais rapidez.
- Implementar as interações específicas e revisar copy dos quatro conceitos.
- Validar o indicador do Next.js, lint, build, teclado e matriz de viewports ao final.

### Próximo passo

Revisar Home e `/sites`, removendo abstrações decorativas, aproximando os modelos da primeira dobra e tornando entregáveis e próximos passos concretos.

## Checkpoint 3 — Home e `/sites`

### Concluído

- Home preservou o posicionamento e o título aprovados, explicitou aplicações web, sites, landing pages e páginas comerciais e substituiu o card abstrato do hero por previews navegáveis de três conceitos.
- Composição dos previews adaptada para mobile sem overflow; espaçamento da primeira dobra reduzido e controles conferidos contra o WhatsApp fixo.
- `/sites` recebeu descrições diretas para os quatro formatos, “O que entra em um projeto” com etapas concretas e três demonstrações acessíveis diretamente na página.
- Numeração decorativa da seção azul removida; frases aprovadas foram preservadas.
- Home e `/sites` inspecionadas em 1440 px e 320 px, incluindo a composição completa de `/sites`.

### Arquivos modificados

- `src/app/page.tsx`
- `src/app/sites/page.tsx`
- `src/app/globals.css`
- `docs/WORKLOG.md`

### Problemas corrigidos

- Prova visual abstrata demais na Home.
- Oferta comercial dependente de jargão e exemplos escondidos em outra rota.
- Excesso de espaço antes do conteúdo principal em telas estreitas.
- Contato flutuante próximo dos CTAs sem verificação de colisão real.

### Pendências

- Revisar acabamento de `/modelos` e `/sobre`.
- Implementar mapa real e FAQ acessível na climatização.
- Concluir as interações características de odontologia, móveis e automotivo.

### Próximo passo

Fazer ajustes estritamente necessários em `/modelos` e `/sobre`, depois concluir climatização e registrar o checkpoint 4.

## Checkpoint 4 — Climatização

### Concluído

- Pseudo-mapa, rotas e regiões inventadas removidos por completo.
- Nova visualização usa o contorno oficial simplificado de Santa Catarina e o polígono municipal de Joinville obtidos da API de Malhas Geográficas do IBGE; o destaque regional é visual, não uma alegação de cobertura.
- Copy deixa explícito que a área é demonstrativa e que a cobertura real dependeria da empresa.
- FAQ migrado para accordion com botões semânticos, `aria-expanded`, painéis nomeados, alvos confortáveis, ícones +/− e animação compatível com `prefers-reduced-motion`.
- Serviços permanecem em uma coluna abaixo de 480 px.
- Hero, mapa e FAQ inspecionados em desktop e 320 px; accordion validado por teclado.

### Arquivos modificados

- `src/app/modelos/climatizacao/page.tsx`
- `src/components/accordion.tsx`
- `src/components/santa-catarina-map.tsx`
- `src/app/globals.css`
- `docs/ASSETS.md`
- `docs/WORKLOG.md`

### Problemas corrigidos

- Geografia com aparência de wireframe e rótulos de rota sem base real.
- FAQ nativo sem `aria-expanded` explícito e com affordance fraca.
- Quebra do título de climatização em 320 px.

### Pendências

- Atualizar `ROADMAP.md` para substituir o registro obsoleto do pseudo-mapa.
- Concluir odontologia, móveis e automotivo.
- Validar todos os breakpoints e o build ao final.

### Próximo passo

Refinar odontologia: remover disclaimer redundante, tornar tratamentos expansíveis e adicionar o fluxo da primeira conversa.

## Checkpoint 5 — Odontologia

### Concluído

- Disclaimer redundante removido do hero; a `ConceptBar` mantém a transparência sem quebrar a imersão.
- Cards altos com símbolo genérico substituídos por uma lista expansível de tratamentos, com informação adicional útil e controles acessíveis.
- FAQ padronizado no mesmo accordion semântico da climatização.
- Nova seção “Como funciona a primeira conversa” organiza escuta, avaliação e próximo passo sem atribuir profissionais, credenciais ou resultados fictícios.
- Visual acolhedor, tipografia serifada e paleta aprovados foram preservados.
- Hero e fluxo intermediário inspecionados em 320 px e desktop; tratamento validado por teclado.

### Arquivos modificados

- `src/app/modelos/odontologia/page.tsx`
- `src/app/globals.css`
- `docs/WORKLOG.md`

### Problemas corrigidos

- Aviso repetido dentro da experiência fictícia.
- Elementos circulares com aparência de placeholder.
- Cards com baixa densidade e pouca utilidade interativa.
- Ausência de um fluxo simples para a primeira conversa.

### Pendências

- Concluir mudança visual real do seletor de materiais em móveis.
- Criar interação automotiva honesta sem simular resultado de cliente.
- Executar matriz final de acessibilidade e responsividade.

### Próximo passo

Refinar móveis planejados, preservando a lógica existente do seletor e tornando cada material visualmente distinto.

## Checkpoint 6 — Móveis planejados

### Concluído

- Seletor de materiais passou a trocar imagem, aplicação, título e explicação em conjunto, preservando a navegação por abas e as teclas direcionais.
- Madeira e pedra reutilizam cenas coerentes já existentes; metal recebeu uma cena original criada especificamente para este conceito, sem pessoas, marcas ou associação a cliente real.
- Copy abstrata substituída por uma orientação direta sobre escolha de materiais para a rotina e explicação antes do orçamento.
- Estados Madeira e Metal inspecionados em desktop; composição e foco conferidos em 320 px; `ArrowRight` atualiza seleção e foco corretamente.

### Arquivos modificados

- `src/components/material-selector.tsx`
- `src/app/modelos/moveis-planejados/page.tsx`
- `src/app/globals.css`
- `public/images/moveis-metal.png`
- `docs/ASSETS.md`
- `docs/WORKLOG.md`

### Problemas corrigidos

- Seletor que alterava apenas um gradiente, sem demonstrar visualmente os materiais.
- Relação pouco clara entre material, aplicação e critério de escolha.
- Frase de abertura vaga em uma seção importante para a decisão comercial.

### Pendências

- Refinar estética automotiva com uma interação honesta, sem fabricar comparação de resultado.
- Ajustar o contato flutuante mobile para não cobrir conteúdo durante a rolagem.
- Executar validação final completa, lint, build e revisão documental.

### Próximo passo

Revisar copy e experiência de estética automotiva e implementar uma interação visual útil sem sugerir um caso real.

## Checkpoint 7 — Estética automotiva

### Concluído

- Copy vaga sobre “recuperar a leitura” substituída por critérios concretos: estado do veículo, objetivo de uso, preparação e manutenção.
- Serviços agora descrevem vitrificação, polimento, higienização e proteção de superfícies sem prometer resultado específico; quatro CTAs repetidos foram consolidados em uma única ação.
- Comparação antes/depois foi deliberadamente evitada por não existir um par de imagens real e comparável.
- Nova exploração visual demonstra três pontos de uma avaliação — pintura, contornos e proteção — mudando recorte, marcador e explicação sem alegar resultado de cliente.
- Tabs da interação validadas por clique e teclado; composição conferida em desktop e 320 px, sem overflow horizontal.
- Atalho fixo de WhatsApp removido até 960 px para não cobrir texto nem controles em mobile e tablet. Os CTAs inseridos no fluxo continuam disponíveis em todas as páginas.

### Arquivos modificados

- `src/app/modelos/estetica-automotiva/page.tsx`
- `src/components/auto-inspection-explorer.tsx`
- `src/app/globals.css`
- `docs/WORKLOG.md`

### Problemas corrigidos

- Linguagem abstrata e pouco útil para escolha de serviço.
- Repetição de CTAs idênticos na listagem.
- Ausência de interação característica no conceito automotivo.
- Risco de sugerir um antes/depois fabricado.
- Sobreposição do contato flutuante sobre conteúdo em viewports móveis.

### Pendências

- Atualizar documentação de design e roadmap para refletir mapa real, interações e comportamento mobile.
- Executar lint, build, `git diff --check` e validação visual/funcional final nas oito rotas e sete larguras.
- Confirmar estado do indicador de desenvolvimento e separar aplicativo, tooling e extensão no diagnóstico final.

### Próximo passo

Executar a matriz de validação final, corrigir qualquer regressão encontrada e registrar o checkpoint 8.

## Checkpoint 8 — Validação final

### Concluído

- As oito rotas públicas foram verificadas em 320, 375, 390, 430, 768, 1024 e 1440 px: 56 combinações sem overflow de documento, imagens quebradas, IDs duplicados ou ausência de `h1`.
- Inspeção visual encontrou corte das prévias do hero da Home em 1024 px; a composição intermediária foi redimensionada e reinspecionada.
- Navegação mobile aberta e conferida; diálogo contextual das demos validado com foco inicial, Escape e retorno de foco; accordions e tabs validados por teclado.
- Atalhos fixos permanecem apenas acima de 960 px; mobile e tablet usam CTAs no fluxo e não têm sobreposição persistente.
- `/demo/empresa-inexistente` retorna a experiência 404 com `noindex, nofollow`; o registro de demos continua vazio e o sitemap não inclui `/demo/`.
- Console das páginas sem erros ou warnings da aplicação. O log de desenvolvimento contém apenas HMR, compilação e o aviso informativo do React DevTools.
- A antiga indicação “1 Issue” vinha da tentativa do `next/font/google` de acessar a rede; fontes locais eliminaram essa dependência. Os atributos `bis_*`, `bis_register` e `__processed_*` não apareceram no navegador limpo e permanecem classificados como modificação externa da extensão Urban VPN, sem `suppressHydrationWarning`.
- `npm run lint` concluído sem erros.
- `npm run build` concluído com sucesso no Next.js 16.3.6; TypeScript e 13 páginas estáticas/SSG foram geradas.
- `git diff --check` concluído sem erros de whitespace; somente avisos informativos de conversão LF/CRLF do Git no Windows.
- Assets SVG padrão do scaffold Next foram confirmados sem referência no repositório e removidos.

### Arquivos modificados

- `AGENTS.md`
- `docs/ARCHITECTURE.md`
- `docs/ASSETS.md`
- `docs/DESIGN.md`
- `docs/ROADMAP.md`
- `docs/WORKLOG.md`
- `src/app/globals.css`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/sites/page.tsx`
- `src/app/modelos/climatizacao/page.tsx`
- `src/app/modelos/odontologia/page.tsx`
- `src/app/modelos/moveis-planejados/page.tsx`
- `src/app/modelos/estetica-automotiva/page.tsx`
- `src/app/fonts/manrope-latin.woff2`
- `src/app/fonts/newsreader-latin.woff2`
- `src/components/accordion.tsx`
- `src/components/auto-inspection-explorer.tsx`
- `src/components/floating-whatsapp.tsx`
- `src/components/material-selector.tsx`
- `src/components/santa-catarina-map.tsx`
- `public/images/moveis-metal.png`
- `public/file.svg` (removido)
- `public/globe.svg` (removido)
- `public/next.svg` (removido)
- `public/vercel.svg` (removido)
- `public/window.svg` (removido)

### Pendências

- Retrato profissional, imagem Open Graph e favicon final ainda dependem de ativos aprovados por Artur.
- A política de privacidade ou controle de acesso das futuras demos personalizadas ainda precisa de decisão antes de publicar uma primeira demo.
- Lighthouse e teste em aparelhos físicos dependem de uma futura prévia publicada; nenhum deploy foi realizado nesta tarefa.
- O ambiente atual usa Node.js 22.12.0; a dependência `eslint-visitor-keys@5.0.1` recomenda 22.13.0 ou superior dentro da linha 22. A validação passou, mas a atualização do runtime é recomendável antes do trabalho de produção.

### Próximo passo

Revisar os ativos reais pendentes e registrar no Obsidian, após aprovação, as decisões listadas no resumo final. Não há alteração estrutural incompleta no workspace.

## Checkpoint 9 — Refinamento comercial final

### Estado inicial

- Auditoria em produção confirmou uma base visual e técnica forte, sem necessidade de redesign.
- Pendências objetivas desta rodada: favicon padrão da Vercel, ausência de imagem Open Graph, `twitter:card` pequeno, hero ainda amplo nos primeiros segundos, menu móvel sem Escape/rótulo dinâmico, contato móvel ausente e baixa exposição do estado Metal.
- Git estava limpo antes da implementação (`main...origin/main`). O vault do Obsidian foi consultado somente para leitura.

### Alterações concluídas

- Favicon antigo removido e substituído por ícone AC gerado em 64 × 64; Apple touch icon AC adicionado em 180 × 180.
- Metadados da Home atualizados de “Artur Carletto — Sites e landing pages” para “Artur Carletto — Sites para empresas”, com nova descrição comercial aprovada.
- Open Graph passou a declarar URL absoluta, `site_name`, tipo, imagem 1200 × 630, dimensões e texto alternativo; Twitter passou a `summary_large_image`.
- Criada imagem social editorial da Home baseada nos conceitos reais de estética automotiva, odontologia e climatização.
- As quatro demonstrações receberam metadados e imagens sociais próprios, sempre identificados como conceitos demonstrativos.
- Hero da Home passou a declarar “Sites para empresas que abrem conversas” e ganhou copy mais direta sobre apresentação, mobile e contato comercial.
- Ritmo do hero em 320 px refinado; o CTA principal fica visível na primeira tela testada sem comprimir a composição desktop.
- Contato móvel de Artur aparece após rolagem nas páginas institucionais, respeita safe areas, recolhe para ícone em 320 px e some ao encontrar CTA final/footer. Nas demos, o contato persistente continua oculto no mobile para preservar a experiência fictícia; a transição acontece no fechamento contextual.
- Concept bar e nota final das demos receberam uma transição mais natural para o portfólio/contato de Artur, sem transformar a empresa fictícia em cliente.
- Menu móvel agora fecha com Escape, altera `aria-label` entre “Abrir navegação” e “Fechar navegação” e devolve foco ao botão.
- Móveis planejados recebeu uma revisão curta de copy e o estado Metal ganhou crop, exposição e overlay mais claros.

### Retrato

- Nenhuma fotografia real autorizada de Artur foi encontrada no repositório. O monograma existente foi preservado e nenhuma imagem genérica ou gerada foi introduzida.
- **PENDÊNCIA HUMANA: adicionar retrato real de Artur.**

### Validação

- `npm run lint`: concluído sem erros.
- `npm run build`: concluído com sucesso no Next.js 16.3.6, incluindo TypeScript e 14 rotas geradas.
- Matriz local das oito rotas públicas em 1440, 1024, 768, 430, 390, 375 e 320 px: 56 combinações sem overflow horizontal, imagens quebradas ou contagem incorreta de `h1`.
- Hero da Home inspecionado visualmente nos sete tamanhos; CTA principal visível em 320 × 700.
- Quatro demos inspecionadas em 390 px; Metal, nota final e ausência de botão flutuante nas demos confirmados.
- Menu móvel validado com abertura, rótulo acessível, Escape e retorno de foco.
- Home e demonstração automotiva inspecionadas no HTML renderizado: canonical preservado, metadados absolutos, imagem 1200 × 630 e `summary_large_image` confirmados.
- Imagens sociais e ícones responderam localmente e foram inspecionados visualmente no navegador integrado.
- Nenhum deploy, alteração de DNS ou ação de infraestrutura foi executado.

### WhatsApp e cache de compartilhamento

- Após um deploy futuro, validar primeiro os URLs públicos `/og/home` e `/og/<segmento>` em HTTPS e confirmar resposta 200.
- Em seguida, enviar a URL canônica em uma conversa de teste. Se o WhatsApp mantiver a miniatura antiga, testar uma URL com query temporária, por exemplo `?v=2`, ou aguardar a atualização do cache; a URL canônica do site não deve ser alterada por causa do cache.
- A disponibilidade pública e o preview real do WhatsApp permanecem pendentes até o deploy, deliberadamente fora do escopo desta tarefa.
