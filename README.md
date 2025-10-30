# GitHub Actions Playground

Welcome to my **GitHub Actions Playground**, a repository designed to experiment and learn the basics of **CI/CD workflows** using GitHub Actions. This repo is perfect for anyone interested in learning how to automate tasks, use inputs, environment variables, and more.

> ⚠️ This repo will be continuously updated with new workflows and examples. Don't hesitate to ⭐ star it to follow the updates!

---

## Workflows

### 1️⃣ 01 - Manual Dispatch Minimal

**Description:**  
This is the simplest example of a manually triggered workflow. It demonstrates how to use `workflow_dispatch` to run a job on demand.

**How to trigger:**  
1. Go to the **Actions** tab in this repository.  
2. Select `01 - Manual Dispatch Minimal`.  
3. Click **Run workflow**.

---

### 2️⃣ 02 - Manual Dispatch with Input

**Description:**  
This workflow shows how to accept user input when triggering a workflow manually. In this case, it asks for your name and prints a personalized greeting.

**How to trigger:**  
1. Go to the **Actions** tab.  
2. Select `02 - Manual Dispatch with Input`.  
3. Click **Run workflow** and fill in your name (or leave the default).  

---

### 3️⃣ 03 - Inputs with Condition

**Description:**  
This workflow demonstrates **conditional execution** of steps using inputs. Depending on the `accion` input, it will either greet (`saludar`) or say goodbye (`despedir`) to the user.

**How to trigger:**  
1. Go to the **Actions** tab.  
2. Select `03 - Inputs with Condition`.  
3. Click **Run workflow**, provide your name and choose the action (`saludar` or `despedir`).  
4. Observe how only the matching step executes.

---

### 4️⃣ Demo Env - Environment Variables

**Description:**  
This workflow illustrates the use of **environment variables** at different levels: workflow, job, and step. It prints messages showing how variables are scoped and inherited.

**How to trigger:**  
1. Push any change to the repository (`git commit && git push`).  
2. Go to the **Actions** tab and watch the workflow run automatically.  
3. Check the logs to see messages from the workflow, job, and step variables.

---

## ⭐ Continuous Updates

This repository will be **expanded continuously** with more workflows, examples, and best practices for GitHub Actions.  

Feel free to **star this repository** to stay updated with new content.

---

## 👋 About Me

I'm **Marcos Sole**, a Front-End Developer currently training in **DevOps** and **Back-end**  
I'm open to working in **stable companies**.

Check out my portfolio here: https://portfolio-eng-two.vercel.app/index.html

---

