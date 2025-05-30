# 3D Animated Path with Three.js and Post-Processing Effects

This project showcases 3D animations using **Three.js** and advanced effects like **UnrealBloomPass** for post-processing. The scene features a dynamic, tubular path that objects (boxes and a camera) follow in an animated loop. Along the path, boxes are placed and animated, rotating with various visual effects applied to the scene. The camera follows the path, providing an engaging 3D experience.

> **Note**: This project was inspired by a tutorial video showcasing **5 simple Three.js projects**. However, I made some **original modifications** and enhancements, including adjustments to the animation logic, visual effects, and object behavior, to better understand the capabilities of Three.js and create a unique version of the project.

## Features

- **Catmull-Rom Path**: Spheres (or boxes) follow a smooth, continuous path defined by a set of control points, created using **CatmullRomCurve3**.
- **3D Objects**: Multiple animated boxes with **wireframe edges** and **PointLights** are scattered along the path.
- **Post-Processing Effects**: Using **EffectComposer** and **UnrealBloomPass**, the scene is enhanced with vibrant glowing effects and high dynamic range.
- **Camera Animation**: The camera follows the path, constantly adjusting its position and orientation to create a dynamic perspective of the scene.
- **Responsive**: The scene is fully responsive, adjusting automatically to different window sizes.

## Technologies Used

- **Three.js**: 3D rendering and animation framework for building the scene, creating geometry, materials, and managing the camera.
- **OrbitControls**: Allows interaction with the scene via mouse movement.
- **Post-Processing**: Utilizes **EffectComposer** and **UnrealBloomPass** to apply advanced visual effects.
- **WebGL**: Hardware-accelerated graphics API used by Three.js to render the 3D scene in the browser.
- **ES Modules**: Modular JavaScript for better code management and imports.

## Demo

View the animation by running the project locally (instructions below).

## Installation
1. **Install dependencies** (including Three.js and Vite):

    ```bash
    npm install
    ```

2. **Run the development server using Vite**:

    ```bash
    npx vite
    ```

3. Open your browser and go to the URL shown in the terminal (usually `http://localhost:5173`) to see the simulation running.

## How It Works

### 1. **Path Generation (CatmullRomCurve3)**

The path along which the boxes and the camera travel is created using **CatmullRomCurve3**. This curve smoothly interpolates between the set of control points, forming a continuous path. The objects follow this path with an interpolation factor (`p`) that loops every 8 seconds.

### 2. **Box Creation and Animation**

The scene features **55 animated boxes**, each with:
- **Wireframe edges** created using **EdgesGeometry**.
- **Point lights** attached to each box for dynamic lighting.
- Rotation applied to the boxes for visual interest.

Each box is placed along the path at random intervals and oriented with random rotations.

### 3. **Camera Animation**

The camera follows the path of the tube:
- It moves along the spline, adjusting its position based on the time (`t`).
- The camera is oriented to "look at" the next point on the path, creating a dynamic and engaging view.

### 4. **Post-Processing Effects**

The scene is enhanced with **UnrealBloomPass**, which applies glowing effects to the scene:
- **Bloom Effects**: Highlights are added to the bright parts of the scene, making them appear to glow.
- **Tone Mapping**: **ACESFilmicToneMapping** is used to adjust the scene's lighting for more natural results.
  
The **EffectComposer** is used to apply these post-processing effects, resulting in a more polished and visually stunning animation.

### 5. **Responsive Resize**

The rendering and camera automatically adjust to the window size:
- The **Orthographic camera** adjusts its parameters on window resize.
- The renderer updates to match the new window dimensions.

## Customization

- **Change Path**: Modify the **curvePath** array to change the path followed by the objects and the camera. Adding or removing points will change the path's shape.
- **Modify Colors**: The color of the wireframe edges and the glowing effect can be customized by changing the material properties and modifying the color logic in the `changingColor` function.
- **Adjust Speed**: The speed at which objects move along the path can be adjusted by modifying the `loopTime` in the `updateCamera` and `animate` functions.
- **Add More Objects**: You can add more objects to the scene by increasing the **numBoxes** or creating additional geometries to be placed along the path.

## License

This project is open-source and available under the [MIT License](LICENSE).
