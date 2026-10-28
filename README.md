# Siddhartha Bhat

Personal site for Siddhartha Bhat, machine learning engineer. The copy comes from his resume and two public GitHub projects: [Fungus ROI Detection](https://github.com/SBhat2615/Fungus-ROI-Detection) and [StudyHub](https://github.com/SBhat2615/StudyHub).

The layout follows the usual shape of a strong engineer portfolio: a fixed introduction, then the record of work as you scroll. It is a static Next.js site so it can be hosted on GitHub Pages.

## Run it locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123).

## Production build

```bash
npm run build
```

The static site is written to `out/`.

## GitHub Pages

Push the repository to GitHub, then in **Settings → Pages** set the source to **GitHub Actions**. The workflow in `.github/workflows/pages.yml` builds the site and deploys it.

- A repository named `USERNAME.github.io` is served at `https://USERNAME.github.io/`.
- Any other repository name is served at `https://USERNAME.github.io/<repo>/`. The workflow sets the base path for that case.

For this GitHub account the user site would be [https://sbhat2615.github.io](https://sbhat2615.github.io) from a repository named `SBhat2615.github.io`.
