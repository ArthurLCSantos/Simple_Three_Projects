# 🧩 SIMPLE_THREE_PROJECTS

This repository is a collection of experimental projects built with **Three.js** and other modern web technologies, focused on **interactive 3D simulations**, **real-time physics**, and **animated visual effects**.

> Each folder represents a standalone project with its own logic, structure, and rendering pipeline. All projects use `Three.js` as the core 3D engine and `Vite` as the development bundler.

---

## 📁 Project Structure

```
SIMPLE_THREE_PROJECTS/
│
├── physicsRapier/     ← Real-time physics simulation with Rapier3D + Three.js
├── WormHole/          ← 3D path animation with post-processing and dynamic camera
└── package.json       ← Shared dependencies (Three.js, Vite, etc.)
```

---

## 🔬 Included Projects

### 1. [`physicsRapier`](./physicsRapier/README.md)

An interactive simulation with **hundreds of falling icosahedrons**, colliding and bouncing with realistic gravity, and reacting to a glowing, mouse-controlled collider.

#### 🔧 Technologies

- **Three.js** — 3D rendering engine  
- **Rapier3D (via WASM)** — real-time physics engine  
- **UnrealBloomPass** — glowing post-processing effect  
- **EffectComposer** — rendering pipeline and post-processing  

#### 🚀 Run with:

```bash
cd physicsRapier
npm install
npx vite
```

---

### 2. [`WormHole`](./WormHole/README.md)

An animated scene with boxes and lights flowing through a **tubular 3D path** defined by a spline, with a dynamic camera and glowing post-processing effects.

#### 🔧 Technologies

- **Three.js** — object creation and animation  
- **CatmullRomCurve3** — smooth 3D path generation  
- **EffectComposer + UnrealBloomPass** — advanced visual effects  
- **OrbitControls** — optional camera interaction  

#### 🚀 Run with:

```bash
cd WormHole
npm install
npx vite
```

---

## 💡 Purpose

This repository serves as a sandbox for:

- Exploring realistic physics combined with 3D visuals  
- Practicing custom rendering and post-processing techniques  
- Studying animation of objects and cameras in 3D space  
- Serving as a base for games, simulations, or interactive visualizations  

---

## 🧪 Requirements

- Node.js v16+  
- WebGL2-compatible browser  
- ES Modules environment (e.g., using `Vite`)  

---

## 🛠️ Setup and Run

You can install and run any of the projects individually:

```bash
cd physicsRapier       # or cd WormHole
npm install
npx vite
```

Open your browser at the URL displayed in the terminal (usually `http://localhost:5173`) to view the scene.

---

## 📜 License

This repository is open-source under the [MIT License](LICENSE).

---

Enjoy experimenting with 3D graphics and physics in JavaScript! 🚀