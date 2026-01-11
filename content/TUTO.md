# Content Editing Guide (README)

This repository uses **JSON-based content files** to manage all website text, images, videos, and icons.
You do **not** need to touch the code to update the website content.

This document explains:

- Where content lives
- How to edit text safely
- How translations work
- How images, videos, and icons are handled
- What happens when you save changes

---

## 1. Where the Content Is

All editable content lives in the following folder:

```
/contents
```

Inside `/contents`, you will find:

- One folder per language (e.g. `en`, `ar`)
- One file per **page** or **component**

Example structure:

```
contents/
├── en/
│   ├── home.json
│   ├── company.json
│   ├── solutions.json
│   ├── header.json
│   ├── footer.json
│   └── labels.json
├── ar/
│   ├── home.json
│   ├── company.json
│   └── ...
```

Each JSON file corresponds directly to what you see on the website.

---

## 2. Pages, Components, and Files

- **Pages** (e.g. Home, Company, Solutions) have their own JSON file
- **Components** (header, footer, labels) also have their own JSON file
- If you are editing a page on the website, you will find its content in the matching file

Example:

- Website page: **Company / About Green Desert**
- File to edit:

  ```
  contents/en/company.json
  ```

---

## 3. Understanding JSON (Very Important)

Content files use **JSON**, which is a strict format.

### Key rules:

- JSON is made of **key : value** pairs
- **Commas matter**
- **Brackets matter**
- If you remove a comma or bracket, the site will not build

Example:

```json
"title": "About Green Desert",
"subtitle": "We build hemp-based value chains"
```

### What you can and cannot edit:

- ❌ **Do not change keys** (the text in blue)
- ✅ **You can change values** (the text in quotes)

If JSON formatting is broken, the website will **not deploy**, but:

- The live website will NOT break
- The change will simply be rejected
- The developer can always fix it

---

## 4. Editing Content on GitHub

1. Open the file you want to edit
2. Click **Edit**
3. Change only the text values
4. Click **Commit changes**
5. Add a short message (e.g. `Update company description`)
6. Commit

### Version History

- Every change is saved
- All edits are logged
- Changes can always be reviewed or reverted

---

## 5. Automatic Deployment

When you commit changes:

- The website automatically rebuilds
- If everything is correct → the site updates online
- If there is an error → deployment fails safely

You **cannot break the live website**.

If something fails:

- Inform the developer
- The error message clearly shows what went wrong

---

## 6. Working With Translations

Each language has its own folder:

- `en` → English
- `ar` → Arabic

### Arabic-specific notes:

- Arabic is right-to-left
- When copy-pasting text, double-check cursor direction
- Content structure must remain identical to English

Only the **text values** should differ between languages.

---

## 7. Images and Videos

### Where media files live

All media files must be uploaded to:

```
/public
```

This includes:

- Images (`.png`, `.jpg`, `.webp`)
- Videos (`.mp4`, etc.)

### How to upload media

1. Open the `public` folder in GitHub
2. Click **Add file → Upload files**
3. Upload your image or video
4. Save

### How to reference media in JSON

Use this format:

```
"/filename.extension"
```

Example:

```json
"image": "/hero-background.jpg"
```

Important:

- Always start with a `/`
- The name must match the file exactly

---

## 8. Sections With Image / Video Priority

Some sections support **either an image or a video**.

Example:

```json
"image": null,
"video": "/cultivation.mp4"
```

Rules:

- If a video exists → it is used first
- If no video → the image is used
- Do **not** keep both unless explicitly intended
- Use `null` for unused media

Correct usage:

- Video only → image = `null`
- Image only → video = `null`

---

## 9. Icons (Lucide Icons)

Icons are **not uploaded** as files.

They come from the **Lucide icon library**, see [here](https://lucide.dev/).

### How to choose an icon:

1. Go to the Lucide icon library
2. Select an icon
3. Copy its **exact name**

Example:

```json
"icon": "shield"
```

Rules:

- Icon names are case-sensitive
- Only valid Lucide icon names will work
- Do not invent icon names

---

## 10. Summary of Best Practices

- Edit **only content values**
- Never remove commas or brackets
- Upload media to `/public`
- Always start media paths with `/`
- Use `null` when media is unused
- Icons must come from Lucide
- Commit changes with clear messages

---

## 11. Need Help?

If:

- A deployment fails
- You see an error message
- You are unsure about structure

Simply notify the developer.
All changes are traceable and recoverable.

---
