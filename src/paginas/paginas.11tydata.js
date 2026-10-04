// Dados aplicados a todas as páginas institucionais em src/paginas/*.md
module.exports = {
  layout: "pagina.njk",
  tags: "pagina",
  root: "../",
  // URL limpa na raiz do site: /<nome-do-arquivo>/
  permalink: "/{{ page.fileSlug }}/index.html",
  eleventyComputed: {
    pageTitle: (data) => `${data.title} — Giovanna Gimenez, psicanalista`,
    ogTitle: (data) => data.title,
    // JSON-LD WebPage + BreadcrumbList injetado no <head> pelo base.njk
    jsonld: (data) => {
      const home = `${data.site.url}/`;
      const url = `${data.site.url}${data.page.url}`;
      const obj = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": url,
            url,
            name: data.title,
            description: data.description,
            inLanguage: "pt-BR",
            isPartOf: { "@type": "WebSite", name: "Giovanna Gimenez · Psicanálise Clínica", url: home },
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Início", item: home },
              { "@type": "ListItem", position: 2, name: data.title, item: url },
            ],
          },
        ],
      };
      return `<script type="application/ld+json">\n${JSON.stringify(obj, null, 2)}\n</script>`;
    },
  },
};
