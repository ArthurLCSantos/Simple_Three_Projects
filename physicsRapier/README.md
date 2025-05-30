# 🧪 Real-Time Physics Playground with Three.js + Rapier

This project is an interactive physics simulation using [Three.js](https://threejs.org/) and [Rapier3D](https://rapier.rs/) (via WebAssembly). It demonstrates real-time physics of multiple falling icosahedrons interacting with a glowing mouse-controlled collider, with visual effects powered by `UnrealBloomPass`.

---

## 🌟 Features

- 💡 Real-time simulation of 100+ dynamic rigid bodies  
- 🖱️ Mouse-controlled collider that affects nearby objects  
- 🌈 Glowing post-processing effect (UnrealBloom)  
- 🎲 Randomly sized and positioned icosahedrons with wireframe overlay  
- 💥 Physics powered by Rapier 3D in WebAssembly  
- 🌀 Smooth rendering with Three.js and EffectComposer  

---

## 📦 Technologies Used

- [`Three.js`](https://threejs.org/) — 3D rendering engine  
- [`@dimforge/rapier3d-compat`](https://www.npmjs.com/package/@dimforge/rapier3d-compat) — Real-time physics via WASM  
- `UnrealBloomPass` — for glow/post-processing  
- `EffectComposer` & `RenderPass` — scene rendering pipeline  

---

## 🚀 How to Run Locally

```bash
npm install
npx vite
```

> Make sure your project files are correctly structured and your `getBodies.js` module is available.

---

## 📁 Project Structure

- `main.js` — Sets up the scene, physics world, rendering, and animation loop  
- `getBodies.js` — Contains helper functions:  
  - `getBody()` creates a dynamic sphere with physics and visuals  
  - `getMouseBall()` creates a glowing, kinematic collider controlled by mouse  

---

## 🧠 Simulation Behavior

- Each icosahedron is randomly placed and sized  
- They fall due to gravity and respond to forces  
- The glowing "mouse ball" pushes nearby bodies using calculated force vectors  
- The camera is fixed, but you can modify it for OrbitControls if needed  

---

## 🔮 Visuals & Lighting

- Hemisphere light provides base ambient lighting  
- `UnrealBloomPass` adds a soft glow to emissive materials  
- Wireframe overlay gives a stylized look  

---

## 📌 Tips

- You can tweak the number of objects by changing `numBodies`  
- Adjust `UnrealBloomPass` parameters for visual experimentation  
- Enable camera controls for more interaction (e.g., OrbitControls)  

---

## 🧹 Possible Enhancements

- 🧲 Add user interaction like drag-and-drop or object spawning  
- 🧭 Introduce camera controls for better exploration  
- 💫 Add more lighting options or textures  

Enjoy experimenting with physics and graphics! 🚀