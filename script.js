// ============================================================================
// LÓGICA DO PORTFÓLIO ACADÊMICO — MARINA CASTELLO BRANCO BASTOS
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
  if (typeof DADOS_SITE === "undefined") {
    console.error("Arquivo dados.js não encontrado.");
    return;
  }

  let categoriaAtiva = "Todos";
  let termoBusca = "";
  let artigoAbertoAtual = null;

  inicializarPerfil();
  inicializarHeroDestaque();
  inicializarFiltros();
  renderizarArtigos();
  inicializarSobreETrajetoria();
  inicializarContato();
  inicializarModal();

  // --------------------------------------------------------------------------
  // 1. PERFIL E CABEÇALHO
  // --------------------------------------------------------------------------
  function inicializarPerfil() {
    const { perfil } = DADOS_SITE;

    const navNome = document.getElementById("nav-nome");
    const heroSubtitulo = document.getElementById("hero-subtitulo");
    const heroResumo = document.getElementById("hero-resumo");
    const footerNome = document.getElementById("footer-nome");
    const anoAtual = document.getElementById("ano-atual");

    if (navNome && perfil.nome) navNome.textContent = perfil.nome;
    if (heroSubtitulo && perfil.subtitulo) heroSubtitulo.textContent = perfil.subtitulo;
    if (heroResumo && perfil.resumoHero) heroResumo.textContent = perfil.resumoHero;
    if (footerNome && perfil.nome) footerNome.textContent = perfil.nome;
    if (anoAtual) anoAtual.textContent = new Date().getFullYear();

    // Links rápidos no Hero
    const heroLinksContainer = document.getElementById("hero-links");
    if (heroLinksContainer && perfil.links) {
      const linksRapidos = [
        { chave: "bibtex", rotulo: "Referências Verificadas (.bib)", url: perfil.links.bibtex || "referencias.bib" },
        { chave: "lattes", rotulo: "Currículo Lattes", url: perfil.links.lattes },
        { chave: "orcid", rotulo: "ORCID", url: perfil.links.orcid },
        { chave: "linkedin", rotulo: "LinkedIn", url: perfil.links.linkedin },
        { chave: "github", rotulo: "GitHub", url: perfil.links.github },
        { chave: "email", rotulo: "E-mail Acadêmico", url: perfil.links.email }
      ].filter((item) => item.url && item.url.trim() !== "");

      heroLinksContainer.innerHTML = linksRapidos
        .map(
          (item) => `
          <a href="${item.url}" class="quick-link-item" ${item.chave !== "email" ? 'target="_blank" rel="noopener noreferrer"' : ""}>
            <span>${item.rotulo}</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
          </a>
        `
        )
        .join("");
    }
  }

  // --------------------------------------------------------------------------
  // 2. ARTIGO EM DESTAQUE NO HERO
  // --------------------------------------------------------------------------
  function inicializarHeroDestaque() {
    const container = document.getElementById("hero-destaque-card");
    if (!container) return;

    if (!DADOS_SITE.artigos || DADOS_SITE.artigos.length === 0) {
      container.innerHTML = `
        <span class="featured-label">
          ★ Acervo Autoral Verificado
        </span>
        <h2 class="featured-title">Aguardando inclusão de artigos na pasta <code>artigos/</code></h2>
        <p class="featured-excerpt">
          Este espaço exibirá apenas publicações e textos reais de autoria de Marina Castello Branco Bastos, com todas as referências bibliográficas duplamente checadas no PubMed e Crossref (<code>referencias.bib</code>).
        </p>
        <div class="featured-meta">
          <span>Rigor Científico · PubMed & Crossref</span>
        </div>
      `;
      return;
    }

    const destaque =
      DADOS_SITE.artigos.find((art) => art.destaque) || DADOS_SITE.artigos[0];

    container.innerHTML = `
      <span class="featured-label">
        ★ Publicação Indexada · ${destaque.categoria}
      </span>
      <h2 class="featured-title">${destaque.titulo}</h2>
      <p class="featured-excerpt">${destaque.resumo}</p>
      <div class="featured-meta">
        <span>${destaque.data} · ${destaque.tempoLeitura || "Artigo Original"}</span>
        <div style="display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap;">
          ${
            destaque.arquivoPdf
              ? `<a href="${ encodeURI(destaque.arquivoPdf) }" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">Abrir PDF Original ↗</a>`
              : ""
          }
          <button type="button" class="btn-read-article" data-artigo-id="${destaque.id}">
            Ver detalhes & referências
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    `;

    const btnLer = container.querySelector("[data-artigo-id]");
    if (btnLer) {
      btnLer.addEventListener("click", () => abrirModalArtigo(destaque.id));
    }
  }

  // --------------------------------------------------------------------------
  // 3. FILTROS DE CATEGORIA E BUSCA
  // --------------------------------------------------------------------------
  function inicializarFiltros() {
    const containerFiltros = document.getElementById("filtros-categoria");
    const inputBusca = document.getElementById("input-busca");

    if (containerFiltros && DADOS_SITE.artigos) {
      const categoriasUnicas = [
        "Todos",
        ...new Set(DADOS_SITE.artigos.map((a) => a.categoria).filter(Boolean))
      ];

      containerFiltros.innerHTML = categoriasUnicas
        .map(
          (cat) => `
          <button
            type="button"
            class="filter-btn ${cat === categoriaAtiva ? "active" : ""}"
            data-categoria="${cat}"
            role="tab"
            aria-selected="${cat === categoriaAtiva}"
          >
            ${cat}
          </button>
        `
        )
        .join("");

      containerFiltros.addEventListener("click", (e) => {
        const botao = e.target.closest(".filter-btn");
        if (!botao) return;

        categoriaAtiva = botao.dataset.categoria;
        containerFiltros.querySelectorAll(".filter-btn").forEach((btn) => {
          const ativo = btn.dataset.categoria === categoriaAtiva;
          btn.classList.toggle("active", ativo);
          btn.setAttribute("aria-selected", ativo);
        });

        renderizarArtigos();
      });
    }

    if (inputBusca) {
      inputBusca.addEventListener("input", (e) => {
        termoBusca = e.target.value.trim().toLowerCase();
        renderizarArtigos();
      });
    }
  }

  // --------------------------------------------------------------------------
  // 4. LISTAGEM DE ARTIGOS
  // --------------------------------------------------------------------------
  function renderizarArtigos() {
    const grid = document.getElementById("lista-artigos");
    const contador = document.getElementById("contador-artigos");
    if (!grid || !DADOS_SITE.artigos) return;

    const artigosFiltrados = DADOS_SITE.artigos.filter((artigo) => {
      const bateCategoria =
        categoriaAtiva === "Todos" || artigo.categoria === categoriaAtiva;

      if (!termoBusca) return bateCategoria;

      const textoAlvo = [
        artigo.titulo,
        artigo.resumo,
        artigo.categoria,
        artigo.veiculo,
        artigo.autores,
        ...(artigo.palavrasChave || [])
      ]
        .join(" ")
        .toLowerCase();

      return bateCategoria && textoAlvo.includes(termoBusca);
    });

    if (contador) {
      const total = artigosFiltrados.length;
      contador.textContent =
        total === 1
          ? "Exibindo 1 publicação verificada (PubMed & Crossref)"
          : `Exibindo ${total} publicações verificadas (PubMed & Crossref)`;
    }

    if (artigosFiltrados.length === 0) {
      grid.innerHTML = `
        <div class="empty-state">
          <p>Nenhuma publicação encontrada para os filtros selecionados.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = artigosFiltrados
      .map(
        (artigo) => `
        <article class="article-card">
          <div>
            <div class="card-top-meta">
              <span class="badge-category">${artigo.categoria}</span>
              <span class="card-date">${artigo.data}</span>
            </div>

            <h3 class="card-title" data-artigo-id="${artigo.id}">
              ${artigo.titulo}
            </h3>

            ${artigo.veiculo ? `<p class="card-venue">${artigo.veiculo}</p>` : ""}

            <p class="card-summary">${artigo.resumo}</p>
          </div>

          <div>
            ${
              artigo.palavrasChave && artigo.palavrasChave.length > 0
                ? `<div class="card-keywords">
                    ${artigo.palavrasChave
                      .map((kw) => `<span class="keyword-tag">${kw}</span>`)
                      .join("")}
                   </div>`
                : ""
            }

            <div class="card-footer" style="flex-wrap: wrap; gap: 0.75rem;">
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                ${
                  artigo.arquivoPdf
                    ? `<a href="${encodeURI(artigo.arquivoPdf)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">PDF Original ↗</a>`
                    : ""
                }
                ${
                  artigo.linkPubmed
                    ? `<a href="${artigo.linkPubmed}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">PubMed ↗</a>`
                    : ""
                }
                ${
                  artigo.linkExterno
                    ? `<a href="${artigo.linkExterno}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">DOI / Crossref ↗</a>`
                    : ""
                }
              </div>
              <button type="button" class="btn-read-article" data-artigo-id="${artigo.id}">
                Ler síntese & citação
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
            </div>
          </div>
        </article>
      `
      )
      .join("");

    grid.querySelectorAll("[data-artigo-id]").forEach((el) => {
      el.addEventListener("click", () => abrirModalArtigo(el.dataset.artigoId));
    });
  }

  // --------------------------------------------------------------------------
  // 5. SEÇÃO SOBRE MIM E TRAJETÓRIA ACADÊMICA
  // --------------------------------------------------------------------------
  function inicializarSobreETrajetoria() {
    const { perfil, trajetoria } = DADOS_SITE;

    const sobreNome = document.getElementById("sobre-nome");
    const sobreFrase = document.getElementById("sobre-frase");
    const sobreTexto = document.getElementById("sobre-texto");
    const listaInteresses = document.getElementById("lista-interesses");
    const listaTrajetoria = document.getElementById("lista-trajetoria");

    if (sobreNome && perfil.nome) {
      sobreNome.textContent = `Sobre ${perfil.nome}`;
    }

    if (sobreFrase && perfil.FraseDestaque) {
      sobreFrase.textContent = `"${perfil.FraseDestaque}"`;
    }

    if (sobreTexto && Array.isArray(perfil.sobreMim)) {
      sobreTexto.innerHTML = perfil.sobreMim
        .map((paragrafo) => `<p>${paragrafo}</p>`)
        .join("");
    }

    if (listaInteresses && Array.isArray(perfil.areasInteresse)) {
      listaInteresses.innerHTML = perfil.areasInteresse
        .map((area) => `<span class="interest-pill">${area}</span>`)
        .join("");
    }

    if (listaTrajetoria && Array.isArray(trajetoria)) {
      listaTrajetoria.innerHTML = trajetoria
        .map(
          (item) => `
          <div class="timeline-item">
            <span class="timeline-period">${item.periodo}</span>
            <h4 class="timeline-role">${item.cargo}</h4>
            <p class="timeline-inst">${item.instituicao}</p>
            <p class="timeline-desc">${item.descricao}</p>
          </div>
        `
        )
        .join("");
    }
  }

  // --------------------------------------------------------------------------
  // 6. SEÇÃO DE CONTATO
  // --------------------------------------------------------------------------
  function inicializarContato() {
    const container = document.getElementById("contato-links");
    const { links } = DADOS_SITE.perfil;
    if (!container || !links) return;

    const cartoesContato = [
      {
        rotulo: "Acervo Bibliográfico",
        valor: "Baixar referencias.bib",
        url: links.bibtex || "referencias.bib",
        externo: true
      },
      {
        rotulo: "E-mail",
        valor: links.emailTexto || "Enviar mensagem",
        url: links.email,
        externo: false
      },
      {
        rotulo: "Plataforma Lattes",
        valor: "Currículo Lattes",
        url: links.lattes,
        externo: true
      },
      {
        rotulo: "Identificador Acadêmico",
        valor: "ORCID iD",
        url: links.orcid,
        externo: true
      },
      {
        rotulo: "Rede Profissional",
        valor: "LinkedIn",
        url: links.linkedin,
        externo: true
      },
      {
        rotulo: "Repositório Acadêmico",
        valor: "GitHub",
        url: links.github,
        externo: true
      }
    ].filter((item) => item.url && item.url.trim() !== "");

    container.innerHTML = cartoesContato
      .map(
        (c) => `
        <a
          href="${c.url}"
          class="contact-card-link"
          ${c.externo ? 'target="_blank" rel="noopener noreferrer"' : ""}
        >
          <span class="contact-card-label">${c.rotulo}</span>
          <span class="contact-card-value">${c.valor} ↗</span>
        </a>
      `
      )
      .join("");
  }

  // --------------------------------------------------------------------------
  // 7. MODAL DE LEITURA COMPLETA DO ARTIGO
  // --------------------------------------------------------------------------
  function inicializarModal() {
    const modal = document.getElementById("modal-artigo");
    const btnFechar = document.getElementById("btn-fechar-modal");
    const btnCopiarCitacao = document.getElementById("btn-copiar-citacao");
    const btnImprimir = document.getElementById("btn-imprimir-artigo");

    if (!modal) return;

    if (btnFechar) {
      btnFechar.addEventListener("click", fecharModalArtigo);
    }

    modal.addEventListener("click", (e) => {
      if (e.target === modal) fecharModalArtigo();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("open")) {
        fecharModalArtigo();
      }
    });

    if (btnCopiarCitacao) {
      btnCopiarCitacao.addEventListener("click", () => {
        if (!artigoAbertoAtual || !artigoAbertoAtual.citacao) return;
        navigator.clipboard.writeText(artigoAbertoAtual.citacao).then(() => {
          const spanTexto = btnCopiarCitacao.querySelector("span");
          const original = spanTexto.textContent;
          spanTexto.textContent = "Citação copiada!";
          setTimeout(() => {
            spanTexto.textContent = original;
          }, 2000);
        });
      });
    }

    if (btnImprimir) {
      btnImprimir.addEventListener("click", () => {
        window.print();
      });
    }
  }

  function abrirModalArtigo(idArtigo) {
    const artigo = DADOS_SITE.artigos.find((a) => a.id === idArtigo);
    const modal = document.getElementById("modal-artigo");
    if (!artigo || !modal) return;

    artigoAbertoAtual = artigo;

    document.getElementById("modal-categoria").textContent = artigo.categoria || "";
    document.getElementById("modal-tempo").textContent = `${artigo.data || ""} · ${artigo.tempoLeitura || ""}`;
    document.getElementById("modal-veiculo").textContent = artigo.veiculo || "";
    document.getElementById("modal-titulo").textContent = artigo.titulo || "";
    document.getElementById("modal-autores").textContent = artigo.autores || "";
    document.getElementById("modal-resumo").textContent = artigo.resumo || "";
    document.getElementById("modal-conteudo").innerHTML = artigo.conteudo || "";
    document.getElementById("modal-citacao").textContent =
      artigo.citacao || `${artigo.autores}. ${artigo.titulo}. ${artigo.ano || ""}.`;

    const containerKeywords = document.getElementById("modal-palavras-chave");
    if (containerKeywords) {
      containerKeywords.innerHTML = (artigo.palavrasChave || [])
        .map((kw) => `<span class="keyword-tag">${kw}</span>`)
        .join("");
    }

    const wrapperLinkExterno = document.getElementById("modal-link-externo-wrapper");
    if (wrapperLinkExterno) {
      const botoes = [];
      if (artigo.arquivoPdf) {
        botoes.push(`
          <a href="${encodeURI(artigo.arquivoPdf)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
            Abrir PDF Completo (Pasta artigos/) ↗
          </a>
        `);
      }
      if (artigo.linkPubmed) {
        botoes.push(`
          <a href="${artigo.linkPubmed}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
            Ver no PubMed (PMID: 42528088) ↗
          </a>
        `);
      }
      if (artigo.linkExterno) {
        botoes.push(`
          <a href="${artigo.linkExterno}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
            Ver no Crossref / DOI ↗
          </a>
        `);
      }
      botoes.push(`
        <a href="referencias.bib" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
          Arquivo BibTeX (referencias.bib) ↗
        </a>
      `);
      wrapperLinkExterno.innerHTML = `<div style="display: flex; flex-wrap: wrap; gap: 0.65rem; margin-top: 0.75rem;">${botoes.join("")}</div>`;
    }

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function fecharModalArtigo() {
    const modal = document.getElementById("modal-artigo");
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    artigoAbertoAtual = null;
  }
});
