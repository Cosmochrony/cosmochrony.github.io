# cosmochrony.org — Programme Website

Source of the public Cosmochrony website, deployed at **https://cosmochrony.org**.

The site presents the Cosmochrony research programme to the scientific community and the wider
public: a synthetic overview of the framework and its papers, popularised explanations of each
theoretical aspect, an interactive dependency graph between papers (copied from the `program/`
paper), and pointers to the published preprints (Zenodo) and peer-reviewed articles.

## Structure

```
cosmochrony.github.io/
├── index.html               # Landing page (English)
├── index_fr/es/de/it.html   # Localised landing pages
├── science/                 # Per-paper and per-topic scientific pages
├── philosophy/              # Conceptual / foundational discussion
├── popular/                 # Popularised ("vulgarisation") content
├── styles.css, script.js    # Shared styling and behaviour
├── _redirects               # Netlify redirect rules
└── package.json             # Tooling and deploy scripts
```

## Development and Deployment

```bash
npm install
npm run deploy   # netlify deploy --prod  → https://cosmochrony.org
```

## Translation Convention

Localised pages use a `_<lang>` suffix (`_fr`, `_es`, `_de`, `_it`). When a base page (e.g.
`index.html`) is updated, its translations must be updated in the same change to keep structural
parity.

## License

See [LICENSE](LICENSE).
