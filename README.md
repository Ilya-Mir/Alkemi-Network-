# CAW — Project Setup Guide

> Get from zero to running in minutes — no experience needed! 🚀

---

## Table of Contents

- [What You'll Need](#what-youll-need)
- [Step 1 — Install Visual Studio Code](#step-1--install-visual-studio-code)
- [Step 2 — Install Node.js and npm](#step-2--install-nodejs-and-npm)
- [Step 3 — Install Git](#step-3--install-git)
- [Step 4 — Clone the Repository](#step-4--clone-the-repository)
- [Step 5 — Open the Project in VS Code](#step-5--open-the-project-in-vs-code)
- [Step 6 — Install Project Dependencies](#step-6--install-project-dependencies)
- [Step 7 — Run the Application](#step-7--run-the-application)
- [Helpful Tips](#helpful-tips)
- [Troubleshooting](#troubleshooting)

---

## What You'll Need

Before you begin, you'll install three free tools. Don't worry — this guide walks you through each one!

| Tool | Purpose |
|---|---|
| **Visual Studio Code** | A code editor where you'll open and manage the project |
| **Node.js + npm** | Runs the app and manages its packages |
| **Git** | Downloads the project from Bitbucket |

> 💡 **Tip:** Follow the steps in order. Each one builds on the previous.

---

## Step 1 — Install Visual Studio Code

**Visual Studio Code** (VS Code) is a free, beginner-friendly editor. It's where you'll open the project, browse files, and run commands — all in one place.

### Download VS Code for your operating system:

| Your OS | Download Link |
|---|---|
| 🍎 **macOS** | [Download for Mac (v1.101.2)](https://visual-studio-code.fileion.com/mac/version/1.101.2/download) |
| 🐧 **Linux** | [Download for Linux (v1.100.2)](http://visual-studio-code.fileion.com/linux/version/1.100.2/download) |
| 🪟 **Windows** | [Download for Windows](https://code.visualstudio.com/updates/v1_101) |

### How to install:

**macOS:**
1. Open the downloaded `.zip` file — it will extract the VS Code app automatically.
2. Drag **Visual Studio Code** into your **Applications** folder.
3. Open it from Applications (or Spotlight with `⌘ + Space`, then type "Visual Studio Code").

**Linux:**
1. Follow the installer instructions for your distribution (`.deb` for Ubuntu/Debian, `.rpm` for Fedora).
2. Once installed, launch VS Code from your applications menu or by typing `code` in the terminal.

**Windows:**
1. Run the downloaded `.exe` installer.
2. Accept the defaults and click **Next** through the setup wizard.
3. On the "Select Additional Tasks" screen, ✅ check **"Add to PATH"** — this is important!
4. Click **Install**, then **Finish**.

> ✅ **You'll know it worked** when VS Code opens and you see its welcome screen.

---

## Step 2 — Install Node.js and npm

You need **Node.js version 18 or higher**.

1. Go to [nodejs.org](https://nodejs.org/)
2. Click the **LTS** (Long Term Support) version — it's the most stable choice for beginners.
3. Run the installer and follow the prompts, accepting all defaults.

### Verify the installation

Open a terminal (see the tip below) and run:

```bash
node -v
npm -v
```

You should see version numbers printed, like `v20.11.0` and `10.2.4`. If you do — you're good to go!

> 💡 **How to open a terminal:**
> - **macOS:** Press `⌘ + Space`, type "Terminal", and hit Enter.
> - **Linux:** Look for "Terminal" in your applications menu.
> - **Windows:** Press `Win + R`, type `cmd`, and hit Enter. Or search for "PowerShell".

---

## Step 3 — Install Git

1. Go to [git-scm.com/downloads](https://git-scm.com/downloads)
2. Download the version for your operating system.
3. Run the installer — the default settings are fine for most users.

### Verify the installation

```bash
git --version
```

You should see something like `git version 2.44.0`.

---

## Step 4 — Clone the Repository

1. Go to the project on **Bitbucket**.
2. Click the **Clone** button (usually near the top right).
3. Copy the clone URL provided.
4. Open your terminal and run:

```bash
https://gitlab.com/haladik/social-fi.git
```

Once it finishes, a new folder named `sofi-caw` will appear in your current directory.

---

## Step 5 — Open the Project in VS Code

Now you'll open the project inside VS Code so you can work with it visually.

**Option A — Drag and drop (easiest):**
Simply drag the `sofi-caw` folder onto the VS Code icon or window.

**Option B — From VS Code's menu:**
1. Open VS Code.
2. Click **File → Open Folder…**
3. Navigate to and select the `sofi-caw` folder.
4. Click **Open**.

**Option C — From the terminal:**
```bash
cd social-fi
code .
```

> ✅ You'll see the project files appear in VS Code's left-side panel (the **Explorer**).

---

## Step 6 — Install Project Dependencies

### Open the built-in terminal in VS Code

1. In VS Code, go to **Terminal → New Terminal** (or press `` Ctrl + ` `` on Windows/Linux, or `` ⌃ + ` `` on macOS).
2. A terminal panel will open at the bottom of VS Code, already pointing to your project folder.

### Run the install command

```bash
npm install
```

This will download all required packages. It may take a minute or two — you'll see progress messages in the terminal.

---

## Step 7 — Run the Application

You're almost there! Start the development server with:

```bash
npm run dev
```

Once it starts, open your browser and go to:

```
http://localhost:3000/
```

> 💡 **Note:** The port number might be different (e.g., `3001` or `8080`). Check your terminal output — it will say something like `Local: http://localhost:3000`.

> 🎉 **If you see the app in your browser — you're all set!**

---

## Helpful Tips

| Scenario | Recommendation |
|---|---|
| **Not sure which terminal to use?** | Use VS Code's built-in terminal — it's the easiest option |
| **macOS / Linux permission errors** | Prefix commands with `sudo`, e.g. `sudo npm install` |
| **Windows permission errors** | Right-click your terminal app and choose "Run as Administrator" |
| **Better coding experience** | Install VS Code extensions for JavaScript and React (VS Code will often suggest these automatically) |
| **Keeping things up to date** | Periodically update Node.js and npm to avoid compatibility issues |

---

## Troubleshooting

### ❌ `node` or `npm` command not found

```bash
node -v
npm -v
```

If either of these fails, Node.js isn't installed correctly or isn't on your system PATH. Re-install Node.js from [nodejs.org](https://nodejs.org/) and try again.

---

### ❌ Errors during `npm install` or broken modules

Try clearing and reinstalling:

```bash
rm -rf node_modules
npm install
```

> **Windows users:** If `rm -rf` doesn't work, delete the `node_modules` folder manually via File Explorer.

---

### ❌ Port 3000 is already in use

Something else on your computer is using that port. Either:
- Stop the other service, or
- Update the port number in your project's server configuration file.

---

### ❌ Dependencies fail to install

Check your internet connection, then clear npm's cache and try again:

```bash
npm cache clean --force
npm install
```

---

## License

Refer to the `LICENSE` file in the root of this repository for full license details.
