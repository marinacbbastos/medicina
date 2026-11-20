// ============================================================================
// ARQUIVO DE DADOS DO SITE: MARINA CASTELLO BRANCO BASTOS
// ============================================================================
// Regra de Integridade:
// Nenhum artigo inventado ou fictício é permitido.
// Todos os artigos listados abaixo correspondem aos arquivos reais na pasta
// "artigos/" e possuem referências duplamente verificadas no PubMed e Crossref,
// armazenadas em "referencias.bib".
// ============================================================================

const DADOS_SITE = {
  // 1. INFORMAÇÕES DO PERFIL
  perfil: {
    nome: "Marina Castello Branco Bastos",
    subtitulo: "Estudante de Medicina (UFSJ) & Pesquisa Científica",
    universidade: "Universidade Federal de São João del Rei (UFSJ)",
    periodoAtual: "Departamento de Medicina da UFSJ",
    localizacao: "Belo Horizonte e São João del Rei, MG",
    fotoGithub: "https://github.com/marinacbbastos.png",
    FraseDestaque: "Acredito em uma Medicina que une o rigor da ciência à escuta atenta e ao cuidado individualizado de cada paciente.",
    resumoHero: "Olá! Eu sou a Marina, estudante de Medicina na UFSJ. Criei este espaço para reunir os artigos científicos dos quais participei, compartilhar um pouco da minha trajetória e deixar indicações que fizeram diferença na minha formação.",
    sobreMim: [
      "Sou de Belo Horizonte (MG) e curso Medicina na Universidade Federal de São João del Rei (UFSJ). Ao longo da graduação, tenho direcionado meus estudos para a prática clínica baseada em evidências, a leitura crítica da literatura médica e a produção de revisões sistemáticas e meta-análises.",
      "Antes da faculdade, estudei no Colégio Santo Antônio e no Bernoulli, em Belo Horizonte, além de ter cursado dois anos do ensino médio em Portugal e três meses de estudos no Gold Coast Learning Centre, na Austrália. O convívio com diferentes contextos culturais e sistemas de ensino contribuiu para a minha rotina de estudos, para o domínio do inglês e para a facilidade de comunicação, aspectos que hoje me ajudam tanto no cuidado ao paciente quanto na participação em grupos de pesquisa."
    ],
    areasInteresse: [
      "Revisão Sistemática & Meta-Análise",
      "Acurácia Diagnóstica",
      "Pesquisa Clínica",
      "Medicina Baseada em Evidências",
      "Clínica Médica"
    ],
    links: {
      email: "mailto:marinabastosmed@gmail.com",
      emailTexto: "marinabastosmed@gmail.com",
      lattes: "http://lattes.cnpq.br/0260846804894564",
      orcid: "https://orcid.org/0009-0008-3357-5237",
      linkedin: "https://www.linkedin.com/in/marina-castello-branco-bastos-a1334a177/",
      instagram: "https://www.instagram.com/marinabastosmed",
      tiktok: "https://www.tiktok.com/@marinabastosmed?_r=1&_t=ZS-9BLOuofepfy",
      github: "https://github.com/marinacbbastos",
      bibtex: "referencias.bib",
      linktree: "links.html"
    }
  },

  // 2. TRAJETÓRIA ACADÊMICA (EM PRIMEIRA PESSOA)
  trajetoria: [
    {
      periodo: "Atual",
      cargo: "Graduação em Medicina",
      instituicao: "Universidade Federal de São João del Rei (UFSJ), São João del Rei, MG",
      descricao: "Curso Medicina na UFSJ, onde dedico minha formação ao raciocínio clínico, à medicina baseada em evidências e à participação ativa em projetos de pesquisa científica."
    },
    {
      periodo: "Outubro 2026",
      cargo: "Primeira Autora de Resumo e Pôster Científico",
      instituicao: "XXXII Congresso Brasileiro de Neurologia · Arquivos de Neuro-Psiquiatria",
      descricao: "Apresentei como pôster, como primeira autora, a revisão sistemática e meta-análise 'The potential association between active smoking and sporadic ALS: a Systematic Review and Meta-Analysis', publicada nos anais da revista Arquivos de Neuro-Psiquiatria."
    },
    {
      periodo: "Julho 2026",
      cargo: "Coautora de Revisão Sistemática e Meta-Análise",
      instituicao: "The American Surgeon (SAGE Journals)",
      descricao: "Participei como coautora, atuando diretamente na extração sistematizada de dados, do estudo 'CT for Detection, Fluoroscopy for Confirmation: A Meta-Analysis of Imaging in Suspected Esophageal Perforation', realizado em colaboração multicêntrica."
    },
    {
      periodo: "Formação Escolar",
      cargo: "Ensino Fundamental e Médio",
      instituicao: "Colégio Santo Antônio e Bernoulli (BH), Portugal e Austrália",
      descricao: "Fiz minha formação escolar em Belo Horizonte, complementada por dois anos de ensino médio em Portugal e três meses de estudos no Gold Coast Learning Centre, na Austrália."
    }
  ],

  // 3. INDICAÇÕES ACADÊMICAS & FORMAÇÃO EM PESQUISA (EM PRIMEIRA PESSOA)
  indicacoes: [
    {
      id: "medcof",
      selo: "Minha Indicação · Cupom: MARINABASTOS",
      titulo: "Grupo MedCof",
      subtitulo: "Preparação para provas de Residência Médica e raciocínio clínico",
      link: "https://embaixadores.medcof.com.br?embaixador=mnt",
      textoBotao: "Quero entrar no MedCof (Cupom: MARINABASTOS)",
      depoimentoDestaque: "Uso e indico o MedCof pela profundidade das aulas e pela forma prática como o curso trabalha o raciocínio clínico para as provas de Residência Médica.",
      descricao: [
        "Escolhi ser embaixadora do MedCof porque me identifico muito com a didática dos professores e com a organização do estudo. As aulas vão além da memorização e me ajudam a construir raciocínio clínico tanto para as provas de Residência quanto para a prática médica.",
        "O banco de questões comentadas (QBank) e o sistema de revisão espaçada facilitam bastante a minha rotina na faculdade. Se você quiser entrar no MedCof, usando o meu link de embaixadora e o cupom MARINABASTOS você garante condições especiais na matrícula."
      ],
      pilares: [
        "Meu cupom de Embaixadora: MARINABASTOS",
        "Aulas direcionadas e aprofundadas com professores especialistas",
        "QBank completo com questões comentadas alternativa por alternativa e filtros personalizados",
        "Metodologia de estudo ativo, flashcards e revisão espaçada para fixação do conteúdo"
      ]
    },
    {
      id: "meta-analysis-academy",
      selo: "Minha Indicação · Pesquisa & Metodologia",
      titulo: "Meta Analysis Academy",
      subtitulo: "Formação prática em Revisão Sistemática, Meta-Análise e Medicina Baseada em Evidências",
      link: "https://m.metaanalysisacademy.com/marina3",
      textoBotao: "Quero entrar no Meta Analysis Academy (Lista de Espera)",
      depoimentoDestaque: "Foi por meio do Meta Analysis Academy que aprendi a interpretar criticamente artigos com escalas de análise de viés validadas e a trabalhar em revisões sistemáticas.",
      descricao: [
        "O Meta Analysis Academy me trouxe ensinamentos essenciais em metodologia científica e meta-análise, mostrando na prática cada etapa de um estudo, desde a formulação da pergunta clínica e busca nas bases de dados até a extração padronizada e análise estatística.",
        "Além da parte metodológica, o curso oferece um excelente networking por meio de grupos de pesquisa colaborativos, onde pude me conectar com estudantes e médicos de diferentes instituições. Recomendo fortemente! Você pode entrar na lista de espera pelo botão abaixo."
      ],
      pilares: [
        "Networking por meio de grupos de pesquisa colaborativos",
        "Ensinamentos práticos em metodologia científica e meta-análise",
        "Interpretação crítica de artigos com escalas de análise de viés validadas (como QUADAS-2, RoB 2 e ROBINS-I)",
        "Acompanhamento do desenho do estudo até a submissão"
      ]
    }
  ],

  // 4. LISTA DE ARTIGOS E RESUMOS PUBLICADOS
  artigos: [
    {
      id: "bastos-2026-active-smoking-sporadic-als",
      destaque: false,
      titulo: "The potential association between active smoking and sporadic ALS: a Systematic Review and Meta-Analysis",
      categoria: "Resumo de Congresso (Pôster)",
      data: "7 Out 2026",
      ano: 2026,
      veiculo: "Arquivos de Neuro-Psiquiatria (Suplemento XXXII Congresso Brasileiro de Neurologia, p. S0252) · DOI: 10.65034/anpabstract_cbn260252",
      autores: "Marina Castello Branco Bastos; Arthur Morato Moreira Fonseca; Victor Theodoro Silva Sampaio; Brenno Augustus Alves dos Santos; Victor Gonçalves Soares; Ocílio Ribeiro Gonçalves; Luciano Rivaroli; Kelson James Silva de Almeida",
      tempoLeitura: "Pôster & Abstract",
      resumo: "Apresentei este trabalho como pôster no XXXII Congresso Brasileiro de Neurologia, como primeira autora. Nesta revisão sistemática e meta-análise (12 estudos, sendo 8 de caso-controle e 4 de Randomização Mendeliana), avaliamos a possível associação entre o tabagismo ativo e a Esclerose Lateral Amiotrófica esporádica (ELAs). Na análise agrupada dos estudos caso-controle, não encontramos associação significativa (OR 1,03; IC 95%: 0,78 a 1,37; P = 0,819), com achados divergentes nos estudos de Randomização Mendeliana.",
      palavrasChave: [
        "Esclerose Lateral Amiotrófica (ELA)",
        "Tabagismo Ativo",
        "Neurologia",
        "Revisão Sistemática & Meta-Análise",
        "XXXII CBN 2026",
        "DOI: 10.65034/anpabstract_cbn260252"
      ],
      linkRevista: "https://www.arquivosdeneuropsiquiatria.org/article/the-potential-association-between-active-smoking-and-sporadic-als-a-systematic-review-and-meta-analysis/",
      linkExterno: "https://doi.org/10.65034/anpabstract_cbn260252",
      chaveBibtex: "Bastos2026SmokingALS",
      citacao: "Bastos MCB, Fonseca AMM, Sampaio VTS, Santos BAA, Soares VG, Gonçalves OR, Rivaroli L, Almeida KJS. The potential association between active smoking and sporadic ALS: a Systematic Review and Meta-Analysis. Arquivos de Neuro-Psiquiatria (Suplemento XXXII Congresso Brasileiro de Neurologia). 2026:S0252. doi:10.65034/anpabstract_cbn260252.",
      conteudo: `
        <h3>Sobre a Apresentação</h3>
        <p>Este estudo foi apresentado por mim como <strong>pôster</strong> no <strong>XXXII Congresso Brasileiro de Neurologia</strong> (outubro de 2026), com o resumo publicado no suplemento oficial da revista <em>Arquivos de Neuro-Psiquiatria</em> (Academia Brasileira de Neurologia, p. S0252).</p>

        <h3>Síntese do Estudo</h3>
        <ul>
          <li><strong>Contexto e Objetivo:</strong> Avaliamos a força epidemiológica da possível associação entre o tabagismo ativo e o risco de desenvolvimento de Esclerose Lateral Amiotrófica esporádica (ELAs), frequentemente aventada por mecanismos como estresse oxidativo, inflamação crônica e neurotoxicidade.</li>
          <li><strong>Metodologia:</strong> Conduzimos a revisão sistemática e meta-análise seguindo as diretrizes Cochrane e PRISMA 2020 (protocolo PROSPERO #CRD42025603657), com buscas nas bases Scopus, PubMed/MEDLINE, Web of Science e BVS. Foram incluídos <strong>12 estudos</strong> ao todo: 8 estudos caso-controle e 4 estudos de Randomização Mendeliana.</li>
          <li><strong>Principais Resultados:</strong> A meta-análise dos estudos caso-controle não demonstrou associação clara entre tabagismo ativo e ELA esporádica (<strong>OR 1,03</strong>; IC 95%: 0,78 a 1,37; <em>P</em> = 0,819), com consistência na análise de sensibilidade (<em>leave-one-out</em>) e ausência de indícios de viés de publicação no teste de Egger (<em>P</em> = 0,391). Nos estudos de Randomização Mendeliana, os achados foram heterogêneos entre publicações anteriores e análises mais recentes.</li>
          <li><strong>Conclusão:</strong> A evidência epidemiológica agrupada atual não sustenta de forma definitiva uma associação entre tabagismo ativo e ELA esporádica, reforçando a importância de estudos de coorte prospectivos bem controlados para esclarecer o papel do tabagismo como fator de risco modificável.</li>
        </ul>

        <h3>Verificação de Metadados</h3>
        <p>Registro verificado na base <strong>Crossref</strong> sob o DOI <a href="https://doi.org/10.65034/anpabstract_cbn260252" target="_blank" rel="noopener noreferrer">10.65034/anpabstract_cbn260252</a> (<em>ANPAbstract_CBN26</em>, Academia Brasileira de Neurologia, 7 de outubro de 2026) e publicado na íntegra na página oficial da revista <a href="https://www.arquivosdeneuropsiquiatria.org/article/the-potential-association-between-active-smoking-and-sporadic-als-a-systematic-review-and-meta-analysis/" target="_blank" rel="noopener noreferrer">Arquivos de Neuro-Psiquiatria</a>.</p>
      `
    },
    {
      id: "oliveira-2026-ct-fluoroscopy-esophageal-perforation",
      destaque: true,
      titulo: "CT for Detection, Fluoroscopy for Confirmation: A Meta-Analysis of Imaging in Suspected Esophageal Perforation",
      categoria: "Meta-Análise & Revisão Sistemática",
      data: "29 Jul 2026",
      ano: 2026,
      veiculo: "The American Surgeon™ (SAGE Journals) · DOI: 10.1177/00031348261472868 · PMID: 42528088",
      autores: "Rachid Eduardo Noleto da Nobrega Oliveira, MD, MS; Lucas Monteiro Delgado; Leonardo Braga Gonçalves, MD; Marina Castello Branco Bastos; Felipe S. Passos, MD; Isabella Faria, MD; Roman Petrov, MD",
      tempoLeitura: "Artigo Original (10 págs.)",
      resumo: "Nesta revisão sistemática e meta-análise com 439 pacientes (4 estudos retrospectivos), avaliamos e comparamos o desempenho diagnóstico da esofagografia fluoroscópica (FE) e da esofagografia por tomografia computadorizada (CTE) em adultos com suspeita de perfuração esofágica. Nossos resultados mostram os papéis complementares dos dois exames: a CTE é ideal para a avaliação inicial de triagem (sensibilidade bivariada de 81,8%), enquanto a FE se destaca como exame confirmatório de alta especificidade (98,4%), maior VPP (93,9%), maior PLR (43,3) e maior AUC (0,978 vs 0,911; P = 0,013).",
      palavrasChave: [
        "Esophageal Perforation",
        "Computed Tomography (CTE)",
        "Fluoroscopic Esophagography (FE)",
        "Diagnostic Accuracy",
        "Meta-Analysis",
        "PMID: 42528088"
      ],
      linkExterno: "https://doi.org/10.1177/00031348261472868",
      linkPubmed: "https://pubmed.ncbi.nlm.nih.gov/42528088/",
      pmid: "42528088",
      arquivoPdf: "artigos/da-nobrega-oliveira-et-al-2026-ct-for-detection-fluoroscopy-for-confirmation-a-meta-analysis-of-imaging-in-suspected (1).pdf",
      chaveBibtex: "Oliveira2026CTFluoroscopy",
      citacao: "da Nobrega Oliveira REN, Delgado LM, Gonçalves LB, Bastos MCB, Passos FS, Faria I, Petrov R. CT for Detection, Fluoroscopy for Confirmation: A Meta-Analysis of Imaging in Suspected Esophageal Perforation. The American Surgeon. 2026;0(0):1-10. doi:10.1177/00031348261472868. PMID: 42528088.",
      conteudo: `
        <h3>Abstract (Original Publication)</h3>
        <p><strong>Background:</strong> Esophageal perforation is a time-critical emergency in which delayed diagnosis is associated with substantial morbidity and mortality. Fluoroscopic esophagography (FE) and computed tomography esophagram (CTE) are commonly used, but their optimal roles in the acute diagnostic pathway remain uncertain. We performed a systematic review and meta-analysis comparing the diagnostic performance of FE and CTE in adults with suspected esophageal perforation and clarifying their complementary utility.</p>
        <p><strong>Study Design:</strong> PubMed, Embase, and Cochrane Library were searched from inception to October 26, 2025, for observational studies evaluating both FE and CTE in adults with suspected esophageal perforation and providing data for 2 × 2 contingency tables. Pooled diagnostic estimates were calculated using univariate and bivariate random-effects models. Direct comparisons were performed using Z tests on transformed summary estimates. Protocol registered on OSF (DOI: <a href="https://doi.org/10.17605/OSF.IO/TYU9M" target="_blank" rel="noopener noreferrer">10.17605/OSF.IO/TYU9M</a>).</p>
        <p><strong>Results:</strong> Four retrospective studies including 439 patients met inclusion criteria; 69 patients (15.6%) had confirmed perforation. FE showed pooled sensitivity of 69.2% (95% CI, 48.9 a 84.0) and specificity of 98.4% (95% CI, 96.3 a 99.4). CTE showed higher sensitivity (81.8%; 95% CI, 38.5 a 97.0) but lower specificity (86.7%; 95% CI, 67.3 a 95.4). Sensitivity and specificity did not differ significantly between modalities. However, FE had significantly higher PPV (93.9% vs 38.5%, <em>P</em> &lt; .001), PLR (43.3 vs 6.2, <em>P</em> = .007), and AUC (0.978 vs 0.911, <em>P</em> = .013) than CTE, indicating stronger rule-in and overall discriminative performance.</p>
        <p><strong>Conclusions:</strong> CTE and FE should be considered complementary tests. CTE is well suited for initial evaluation because of its sensitivity and broader anatomic assessment, whereas FE provides stronger confirmatory value, supporting a sequential strategy of initial CTE followed by selective FE.</p>

        <h3>Síntese dos Nossos Resultados Diagnósticos (Modelo Bivariado & Agregado)</h3>
        <ul>
          <li><strong>População que avaliamos:</strong> 439 pacientes adultos em 4 estudos comparativos pareados (Terrazas 2020, Wei 2020, Awais 2019 e Wu 2013), sendo 69 casos (15,6%) com perfuração esofágica confirmada.</li>
          <li><strong>Esofagografia por Tomografia Computadorizada (CTE):</strong> Sensibilidade bivariada de <strong>81,8%</strong> (IC 95%: 38,5 a 97,0), especificidade de <strong>86,7%</strong> (IC 95%: 67,3 a 95,4), VPN de <strong>95,3%</strong> (IC 95%: 92,2 a 97,2) e AUC de <strong>0,911</strong>. Mostrou-se ideal para a triagem inicial rápida e avaliação anatômica cervicotoracoabdominal ampla.</li>
          <li><strong>Esofagografia Fluoroscópica (FE):</strong> Sensibilidade bivariada de <strong>69,2%</strong> (IC 95%: 48,9 a 84,0), especificidade de <strong>98,4%</strong> (IC 95%: 96,3 a 99,4), VPP de <strong>93,9%</strong> (IC 95%: 83,5 a 97,9), PLR de <strong>43,3</strong> e AUC de <strong>0,978</strong>. Apresentou desempenho superior para confirmação diagnóstica (<em>rule-in</em>).</li>
        </ul>

        <h3>Estudos Primários Incluídos (Verificados no PubMed & Crossref)</h3>
        <ul>
          <li><strong>Terrazas et al. (2020)</strong>, <em>Abdominal Radiology</em> · DOI: <a href="https://doi.org/10.1007/s00261-019-02187-w" target="_blank" rel="noopener noreferrer">10.1007/s00261-019-02187-w</a> · PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/31435763/" target="_blank" rel="noopener noreferrer">31435763</a></li>
          <li><strong>Wei et al. (2020)</strong>, <em>American Journal of Roentgenology (AJR)</em> · DOI: <a href="https://doi.org/10.2214/AJR.19.22166" target="_blank" rel="noopener noreferrer">10.2214/AJR.19.22166</a> · PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/32515607/" target="_blank" rel="noopener noreferrer">32515607</a></li>
          <li><strong>Awais et al. (2019)</strong>, <em>European Journal of Trauma and Emergency Surgery</em> · DOI: <a href="https://doi.org/10.1007/s00068-018-0929-4" target="_blank" rel="noopener noreferrer">10.1007/s00068-018-0929-4</a> · PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/29484462/" target="_blank" rel="noopener noreferrer">29484462</a></li>
          <li><strong>Wu et al. (2013)</strong>, <em>American Journal of Roentgenology (AJR)</em> · DOI: <a href="https://doi.org/10.2214/AJR.12.10345" target="_blank" rel="noopener noreferrer">10.2214/AJR.12.10345</a> · PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/24147467/" target="_blank" rel="noopener noreferrer">24147467</a></li>
        </ul>
      `
    }
  ]
};
