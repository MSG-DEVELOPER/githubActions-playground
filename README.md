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

```yml
name: 01 - Manual Dispatch Minimal

on:
  workflow_dispatch: # Esto hace que el workflow solo se ejecute manualmente

jobs:
  say_hello:
    runs-on: ubuntu-latest
    steps:
    - name: Saludo
      run: echo "Hola! Este workflow se ha lanzado manualmente."
```
---

### 2️⃣ 02 - Manual Dispatch with Input

**Description:**  
This workflow shows how to accept user input when triggering a workflow manually. In this case, it asks for your name and prints a personalized greeting.

**How to trigger:**  
1. Go to the **Actions** tab.  
2. Select `02 - Manual Dispatch with Input`.  
3. Click **Run workflow** and fill in your name (or leave the default).  

```yml
name: 02-Manual Dispatch con Input

on: 
  workflow_dispatch:
    inputs:
      nombre:
        description: "Introduce tu nombre"
        required: true
        default: "Marcos"

jobs:
  say_hello:
    runs-on: ubuntu-latest
    steps:
      - name: Saludo personal
        run: echo "Hola  ${{ github.event.inputs.nombre }} ! Este workflow se ha lanzado manualmente  "
```
---

### 3️⃣ 03 - Inputs with Condition

**Description:**  
This workflow demonstrates **conditional execution** of steps using inputs. Depending on the `accion` input, it will either greet (`saludar`) or say goodbye (`despedir`) to the user.

**How to trigger:**  
1. Go to the **Actions** tab.  
2. Select `03 - Inputs with Condition`.  
3. Click **Run workflow**, provide your name and choose the action (`saludar` or `despedir`).  
4. Observe how only the matching step executes.

```yml
name: 03-Inputs con condición

on:
  workflow_dispatch:
    inputs:
      nombre:
        description: "¿Cómo te llamas?"
        required: true
        default: "React developer en 2025"
      accion:
        description: "¿Qué quieres hacer?"
        required: true
        default: "saludar"
        type: choice
        options:
          - saludar
          - despedir

jobs:
  mensaje:
    runs-on: ubuntu-latest
    steps:
      - name: Saludo
        if: ${{ github.event.inputs.accion == 'saludar' }}
        run: echo "Hola ${{ github.event.inputs.nombre }} 👋 ¡Espero que tengas un gran día!"

      - name: Despedida
        if: ${{ github.event.inputs.accion == 'despedir' }}
        run: echo "Adiós ${{ github.event.inputs.nombre }} 👋 ¡Nos vemos pronto!"
```
---

### 4️⃣ Demo Env - Environment Variables

**Description:**  
This workflow illustrates the use of **environment variables** at different levels: workflow, job, and step. It prints messages showing how variables are scoped and inherited.

**How to trigger:**  
1. Push any change to the repository (`git commit && git push`).  
2. Go to the **Actions** tab and watch the workflow run automatically.  
3. Check the logs to see messages from the workflow, job, and step variables.

```yml
name: Demo Env

on:
  push:

env: # Variables a nivel de workflow
  GLOBAL_GREETING: "Hola desde el workflow"

jobs:
  test-env:
    runs-on: ubuntu-latest
    env:
      GREETING: "Hola Github desde env a nivel de job" # Variable a nivel de job
    steps:
      - name: Mostrar Variable
        run: echo $GREETING

      - name: Step con env propio
        env:
          GREETING2: "Hola Github desde env a nivel de step" # Variable a nivel de step
        run: echo $GREETING2

  anotherJob:
    runs-on: ubuntu-latest
    steps:
      - name: Mostrar env a nivel de workflow
        run: echo $GLOBAL_GREETING
```

---

### 5️⃣ 05 - Upload Demo Artifacts

**Description:**  
This workflow shows how to generate a file and upload it as an artifact, a way to store and share files generated during workflow execution.

**How to trigger:**  
1. Push any commit to the repository.
2. After the workflow completes, open the Artifacts section in the Actions tab and download the generated file.

```yml

name: 05 - Demo Artifacts

on:
  push:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Crear archivo de salida
        run: echo "Este es un archivo generado por el workflow" > resultado.txt


      - name: Subir Artifact
        uses: actions/upload-artifact@v4
        with:
          name: resultado
          path: resultado.txt

```

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

