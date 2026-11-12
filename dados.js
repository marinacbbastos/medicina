// ============================================================================
// ARQUIVO DE DADOS DO SITE — MARINA CASTELLO BRANCO BASTOS
// ============================================================================
// Regra de Integridade:
// - Nenhum artigo inventado/fictício é permitido.
// - Todos os artigos listados abaixo correspondem aos arquivos reais na pasta
//   "artigos/" e possuem referências duplamente verificadas no PubMed e Crossref,
//   armazenadas em "referencias.bib".
// ============================================================================

const DADOS_SITE = {
  // 1. INFORMAÇÕES DO PERFIL
  perfil: {
    nome: "Marina Castello Branco Bastos",
    subtitulo: "Medicina (UFSJ) & Pesquisa Científica",
    universidade: "Universidade Federal de São João del Rei (UFSJ)",
    periodoAtual: "Departamento de Medicina — UFSJ",
    localizacao: "São João del Rei, MG — Brasil",
    fotoGithub: "https://github.com/marinacbbastos.png",
    FraseDestaque: "Dedicação à ciência médica, à pesquisa clínica rigorosa e à medicina baseada em evidências.",
    resumoHero: "Bem-vinda(o) ao meu portfólio acadêmico. Aqui reúno minhas publicações científicas, revisões sistemáticas e meta-análises indexadas no PubMed e Crossref.",
    sobreMim: [
      "Acadêmica do Departamento de Medicina da Universidade Federal de São João del Rei (UFSJ), com atuação em pesquisa clínica, revisões sistemáticas, meta-análises de acurácia diagnóstica e medicina baseada em evidências.",
      "Este espaço reúne exclusivamente artigos científicos publicados em periódicos revisados por pares, com verificação dupla de metadados via PubMed (PMID) e Crossref (DOI) e acervo bibliográfico disponível em formato BibTeX (referencias.bib)."
    ],
    areasInteresse: [
      "Revisão Sistemática & Meta-Análise",
      "Acurácia Diagnóstica",
      "Cirurgia Torácica & Gastrointestinal",
      "Radiologia de Emergência",
      "Medicina Baseada em Evidências"
    ],
    links: {
      email: "mailto:marina.cbbastos@gmail.com",
      emailTexto: "marina.cbbastos@gmail.com",
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

  // 2. TRAJETÓRIA ACADÊMICA
  trajetoria: [
    {
      periodo: "Atual",
      cargo: "Graduação em Medicina",
      instituicao: "Universidade Federal de São João del Rei (UFSJ) — São João del Rei, MG",
      descricao: "Formação médica pelo Departamento de Medicina da UFSJ, com atuação em pesquisa científica, extração sistematizada de dados e síntese de evidências."
    },
    {
      periodo: "2026",
      cargo: "Coautora — Revisão Sistemática & Meta-Análise Internacional",
      instituicao: "The American Surgeon (SAGE Journals)",
      descricao: "Publicação do estudo 'CT for Detection, Fluoroscopy for Confirmation: A Meta-Analysis of Imaging in Suspected Esophageal Perforation' em colaboração multicêntrica (Barretos Cancer Center, UFMG, UFU, UFSJ, MaterDei e UTMB John Sealy School of Medicine)."
    }
  ],

  // 3. INDICAÇÕES ACADÊMICAS & FORMAÇÃO EM PESQUISA
  indicacoes: [
    {
      id: "medcof",
      selo: "Recomendação Pessoal · Cupom: MARINABASTOS",
      titulo: "Grupo MedCof",
      subtitulo: "Preparação de alta performance para provas de Residência Médica e raciocínio clínico",
      link: "https://embaixadores.medcof.com.br?embaixador=mnt",
      textoBotao: "Quero entrar no MedCof (Cupom: MARINABASTOS)",
      depoimentoDestaque: "Indico o MedCof pela profundidade teórica aliada ao direcionamento prático para as provas de Residência Médica, com aulas ministradas por especialistas e metodologia focada em retenção de longo prazo.",
      descricao: [
        "O MedCof se destaca pela excelência didática e pelo foco no raciocínio clínico aprofundado, preparando o estudante de Medicina e o médico generalista tanto para as provas de Residência Médica mais concorridas do país quanto para a tomada de decisão na prática médica.",
        "Por meio da plataforma, do banco de questões comentadas (QBank) e do sistema de revisão espaçada inteligente, o estudo se torna estruturado, eficiente e adaptado à rotina intensa do internato e da graduação. Utilizando meu link de embaixadora e o cupom MARINABASTOS, você garante condições especiais na sua matrícula."
      ],
      pilares: [
        "Cupom de Embaixadora: MARINABASTOS",
        "Aulas direcionadas e aprofundadas com professores especialistas das principais instituições",
        "QBank completo com questões comentadas alternativa por alternativa e filtros personalizados",
        "Metodologia de estudo ativo, flashcards e revisão espaçada para fixação eficiente"
      ]
    },
    {
      id: "meta-analysis-academy",
      selo: "Recomendação Pessoal · Pesquisa & Metodologia",
      titulo: "Meta Analysis Academy",
      subtitulo: "Formação prática em Revisão Sistemática, Meta-Análise e Medicina Baseada em Evidências",
      link: "https://m.metaanalysisacademy.com/marina3",
      textoBotao: "Quero entrar no Meta Analysis Academy (Lista de Espera)",
      depoimentoDestaque: "Foi por meio do Meta Analysis Academy que desenvolvi a base metodológica para interpretar criticamente a literatura médica utilizando escalas validadas de análise de risco de viés e conduzir revisões sistemáticas de alto nível.",
      descricao: [
        "O Meta Analysis Academy é uma formação completa voltada para estudantes de Medicina e médicos que desejam dominar todas as etapas da produção científica de alto impacto — desde a formulação da pergunta clínica e estratégia de busca até a extração padronizada de dados e síntese estatística em meta-análises.",
        "Além do rigor técnico em metodologia científica, um dos maiores diferenciais do programa é o networking qualificado: você passa a integrar grupos de pesquisa ativos e colaborativos, conectando-se com estudantes, residentes e pesquisadores de diversas instituições no Brasil e no exterior. Recomendo fortemente para quem deseja publicar em periódicos internacionais revisados por pares e aprimorar o raciocínio clínico baseado em evidências."
      ],
      pilares: [
        "Networking acadêmico por meio de grupos de pesquisa multicêntricos",
        "Fundamentos sólidos em metodologia científica, protocolo PRISMA e síntese de evidências",
        "Leitura crítica de artigos e aplicação prática de escalas validadas de análise de viés (como QUADAS-2, RoB 2 e ROBINS-I)",
        "Mentoria e acompanhamento do desenho do estudo até a submissão internacional"
      ]
    }
  ],

  // 4. LISTA DE ARTIGOS PUBLICADOS (PASTA "artigos/")
  artigos: [
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
      resumo: "Revisão sistemática e meta-análise comparando o desempenho diagnóstico da esofagografia fluoroscópica (FE) e da esofagografia por tomografia computadorizada (CTE) em adultos com suspeita de perfuração esofágica (4 estudos retrospectivos, 439 pacientes). Demonstra os papéis complementares de ambas as modalidades: CTE como avaliação inicial de triagem (sensibilidade agrupada bivariada de 81,8%) e FE como teste confirmatório de alta especificidade (98,4%), maior VPP (93,9%), maior razão de verossimilhança positiva (PLR 43,3) e maior AUC (0,978 vs 0,911; P = 0,013).",
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
      arquivoPdf: "artigos/da-nobrega-oliveira-et-al-2026-ct-for-detection-fluoroscopy-for-confirmation-a-meta-analysis-of-imaging-in-suspected (1).pdf",
      chaveBibtex: "Oliveira2026CTFluoroscopy",
      citacao: "da Nobrega Oliveira REN, Delgado LM, Gonçalves LB, Bastos MCB, Passos FS, Faria I, Petrov R. CT for Detection, Fluoroscopy for Confirmation: A Meta-Analysis of Imaging in Suspected Esophageal Perforation. The American Surgeon. 2026;0(0):1-10. doi:10.1177/00031348261472868. PMID: 42528088.",
      conteudo: `
        <h3>Abstract (Original Publication)</h3>
        <p><strong>Background:</strong> Esophageal perforation is a time-critical emergency in which delayed diagnosis is associated with substantial morbidity and mortality. Fluoroscopic esophagography (FE) and computed tomography esophagram (CTE) are commonly used, but their optimal roles in the acute diagnostic pathway remain uncertain. We performed a systematic review and meta-analysis comparing the diagnostic performance of FE and CTE in adults with suspected esophageal perforation and clarifying their complementary utility.</p>
        <p><strong>Study Design:</strong> PubMed, Embase, and Cochrane Library were searched from inception to October 26, 2025, for observational studies evaluating both FE and CTE in adults with suspected esophageal perforation and providing data for 2 × 2 contingency tables. Pooled diagnostic estimates were calculated using univariate and bivariate random-effects models. Direct comparisons were performed using Z tests on transformed summary estimates. Protocol registered on OSF (DOI: <a href="https://doi.org/10.17605/OSF.IO/TYU9M" target="_blank" rel="noopener noreferrer">10.17605/OSF.IO/TYU9M</a>).</p>
        <p><strong>Results:</strong> Four retrospective studies including 439 patients met inclusion criteria; 69 patients (15.6%) had confirmed perforation. FE showed pooled sensitivity of 69.2% (95% CI, 48.9–84.0) and specificity of 98.4% (95% CI, 96.3–99.4). CTE showed higher sensitivity (81.8%; 95% CI, 38.5–97.0) but lower specificity (86.7%; 95% CI, 67.3–95.4). Sensitivity and specificity did not differ significantly between modalities. However, FE had significantly higher PPV (93.9% vs 38.5%, <em>P</em> &lt; .001), PLR (43.3 vs 6.2, <em>P</em> = .007), and AUC (0.978 vs 0.911, <em>P</em> = .013) than CTE, indicating stronger rule-in and overall discriminative performance.</p>
        <p><strong>Conclusions:</strong> CTE and FE should be considered complementary tests. CTE is well suited for initial evaluation because of its sensitivity and broader anatomic assessment, whereas FE provides stronger confirmatory value, supporting a sequential strategy of initial CTE followed by selective FE.</p>

        <h3>Síntese dos Resultados Diagnósticos (Modelo Bivariado & Agregado)</h3>
        <ul>
          <li><strong>População avaliada:</strong> 439 pacientes adultos em 4 estudos comparativos pareados (Terrazas 2020, Wei 2020, Awais 2019 e Wu 2013), sendo 69 casos (15,6%) com perfuração esofágica confirmada.</li>
          <li><strong>Esofagografia por Tomografia Computadorizada (CTE):</strong> Sensibilidade bivariada de <strong>81,8%</strong> (IC 95%: 38,5–97,0), especificidade de <strong>86,7%</strong> (IC 95%: 67,3–95,4), VPN de <strong>95,3%</strong> (IC 95%: 92,2–97,2) e AUC de <strong>0,911</strong>. Ideal para triagem inicial rápida e avaliação anatômica cervicotoracoabdominal ampla.</li>
          <li><strong>Esofagografia Fluoroscópica (FE):</strong> Sensibilidade bivariada de <strong>69,2%</strong> (IC 95%: 48,9–84,0), especificidade de <strong>98,4%</strong> (IC 95%: 96,3–99,4), VPP de <strong>93,9%</strong> (IC 95%: 83,5–97,9), PLR de <strong>43,3</strong> e AUC de <strong>0,978</strong>. Desempenho superior para confirmação diagnóstica (<em>rule-in</em>).</li>
        </ul>

        <h3>Estudos Primários Incluídos (Verificados no PubMed & Crossref)</h3>
        <ul>
          <li><strong>Terrazas et al. (2020)</strong> — <em>Abdominal Radiology</em> · DOI: <a href="https://doi.org/10.1007/s00261-019-02187-w" target="_blank" rel="noopener noreferrer">10.1007/s00261-019-02187-w</a> · PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/31435763/" target="_blank" rel="noopener noreferrer">31435763</a></li>
          <li><strong>Wei et al. (2020)</strong> — <em>American Journal of Roentgenology (AJR)</em> · DOI: <a href="https://doi.org/10.2214/AJR.19.22166" target="_blank" rel="noopener noreferrer">10.2214/AJR.19.22166</a> · PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/32515607/" target="_blank" rel="noopener noreferrer">32515607</a></li>
          <li><strong>Awais et al. (2019)</strong> — <em>European Journal of Trauma and Emergency Surgery</em> · DOI: <a href="https://doi.org/10.1007/s00068-018-0929-4" target="_blank" rel="noopener noreferrer">10.1007/s00068-018-0929-4</a> · PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/29484462/" target="_blank" rel="noopener noreferrer">29484462</a></li>
          <li><strong>Wu et al. (2013)</strong> — <em>American Journal of Roentgenology (AJR)</em> · DOI: <a href="https://doi.org/10.2214/AJR.12.10345" target="_blank" rel="noopener noreferrer">10.2214/AJR.12.10345</a> · PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/24147467/" target="_blank" rel="noopener noreferrer">24147467</a></li>
        </ul>
      `
    }
  ]
};
