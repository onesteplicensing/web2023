# 🚀 One Step Licensing Jekyll (4.4.1) Website

This is a Jekyll-based static website built with modular includes, SCSS styling, and structured content in Markdown files. This guide explains the structure and how to maintain or modify different parts of the website.

---

## 📁 Project Structure Overview

---
## Web Assets
most media files are on [Google Drive](https://drive.google.com/drive/u/3/folders/0AHkTIHonbsj8Uk9PVA)

---
## TO-DO

Timeline:
- [ ] 2020: add the seadoos and skidoos logos
- [ ] 2022 and 2023: canam logo, BRP, and one of the car
- [X] 2024: replace porsche logo,
- [ ] 2024: add a diecast toy (the defender), and add the green outlander
- [ ] 2025: add Koenigsegg logo

Show Cases:
- [X] canam video game showcase: add dakar above forza in slideshow
- [X] canam toys add outlander, renegade, maverick 1 and maverick 2
- [ ] make the hero images bounce around like on the landing page
- [ ] add toyota showcase
- [ ] add lexus showcase

---

## 🧩 Editing the Website Content

### 🔹 HTML Section Partials (`_includes/can-am/`)

This folder contains reusable HTML components included in layouts or pages.

| File Name        | Description                                  |
|------------------|----------------------------------------------|
| `about.html`     | About section content                        |
| `contact.html`   | Contact section (form, info)                 |
| `footer.html`    | Site footer                                  |
| `header.html`    | Navigation/header                            |
| `hero.html`      | Hero/landing section                         |
| `services.html`  | List of services                             |
| `showCase.html`  | Project or product showcase section          |
| `timeline.html`  | Timeline or process steps section            |
| `videoGames.html`| Section for listing video games              |

**To edit:** Open the corresponding HTML file inside `_includes/can-am/` and modify the HTML content.

### 🔹 Layouts (`_layouts/`)

Templates that wrap around pages or sections.

| File Name      | Used For                                       |
|----------------|------------------------------------------------|
| `default.html` | Base layout (includes header/footer)           |
| `home.html`    | Homepage-specific layout                       |
| `page.html`    | Standard page layout                           |

**To edit:** Update layout wrappers, include blocks, or surrounding structure.

---

## 📝 Markdown Pages (`pages/`)

These are individual content pages written in Markdown and rendered using layouts.

| File Name           | Purpose                                    |
|---------------------|--------------------------------------------|
| `can-am-details.md` | Details page about Can-Am products         |
| `can-am-games.md`   | Games-related content                      |
| `can-am-toys.md`    | Toys-related content                       |
| `toyota-toys.md`    | Toyota toys showcase page                  |

Each page contains YAML front matter and Markdown content. Example:

```markdown
---
layout: page
title: Can-Am Details
---
## Product Highlights

This section describes Can-Am features and models...

```

---

## 🧸 Adding a New Toy Showcase Page

To add a new toy showcase (e.g., for a new brand or product line), follow these steps:

### 1. Create Toy Objects in `_toys`

- All toy objects must be placed in the `_toys` directory, as defined in `_config.yml` under `collections`.
- You can organize toys by brand using subfolders, e.g.:
  ```
  _toys/
    toyota/
      hilux.md
      tundra.md
    can_am/
      outlander.md
      maverick.md
  ```
- Each toy file should have front matter with at least:
  ```yaml
  ---
  name: Hilux Ride-On
  brand: toyota
  main_image: /assets/images/toys/hilux.png
  thumbnails:
    - /assets/images/toys/hilux_thumb1.png
    - /assets/images/toys/hilux_thumb2.png
  description: "A rugged ride-on toy inspired by the Toyota Hilux."
  permalink: /toys/hilux/
  ---
  ```
- The `brand` field is used to filter toys by brand in the showcase include.

### 2. Create a New Toy Page in `pages/`

- Add a new Markdown file in the `pages/` directory, e.g. `toyota-toys.md`.
- Use the following front matter and include:
  ```markdown
  ---
  layout: page
  title: Toyota Toys
  permalink: /toyota-toys
  ---

  <div class="can-am">
  {% include showcase/toys.html toys_data=site.data.showcases.toyota_toys toys_brand_name="toyota" %}
  </div>

  <script src="{{ '/assets/js/toysGallery.js' | relative_url }}" defer></script>
  ```
- Adjust `toys_data` and `toys_brand_name` as needed for your brand.

### 3. Reference the New Page in `_data/showcase.yml`

- Add an entry for your new showcase page in `_data/showcase.yml`:
  ```yaml
  - name: "Toyota"
    image: "/assets/images/showcase/showcase_08_toyota.png"
    page: "/toyota-toys"
  ```
- This ensures your new toy page appears in the showcase navigation and listings.

---

### 4. Verify Collection Setup

- The `_config.yml` already includes:
  ```yaml
  collections:
    toys:
      output: true
      permalink: /toys/:name/
  ```
- No changes are needed to support subfolders; all files under `_toys/` and its subfolders are automatically included in the `site.toys` collection.

---

### 5. Filtering Toys by Brand

- The `showcase/toys.html` include uses the `brand` field to filter toys:
  ```liquid
  {% assign filtered_toys = site.toys | where: "brand", include.toys_brand_name %}
  ```
- Make sure each toy object has the correct `brand` value in its front matter.

---

**Summary:**  
1. Add new toy objects in `_toys/` (use subfolders for organization, set `brand` in front matter).
2. Create a new page in `pages/` using the showcase include.
3. Reference the new page in `_data/showcase.yml`.
4. No changes needed in `_config.yml` for subfolders.
5. Ensure toy objects have the correct `brand` field for filtering.




## ⚙️ Jekyll Installation & Running Locally

### ✅ Prerequisites

Make sure you have the following installed:

- **Ruby** (v3.4.4 or higher) — check with:

  ```bash
  ruby -v
  ```

- **Bundler** — install it via:

  ```bash
  gem install bundler
  ```

> 💡 On **Windows**, it's recommended to use [RubyInstaller](https://rubyinstaller.org/) and enable the MSYS2 development toolchain during setup.

---

### 📦 Install Project Dependencies

From the root directory of the project, run:

```bash
bundle install
```

This installs Jekyll and all required gems defined in the `Gemfile`.

---

### 🚀 Run Jekyll Locally with Live Reload

To serve the site locally and enable automatic browser refresh on file changes:

```bash
bundle exec jekyll serve --livereload
```

Visit your local site at:

```
http://localhost:4000
```

or

```
http://127.0.0.1:4000/
```

Jekyll will watch for changes in HTML, Markdown, SCSS, and other files, and reload the browser automatically.
