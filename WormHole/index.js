import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import spline from "./spline.js"
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js"
import { RenderPass } from "three/addons/postprocessing/RenderPass.js"
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js"

//inicializações
// --variaveis
const w = window.innerWidth;
const h = window.innerHeight;
let colorRainbow = new THREE.Color(0x880088);
const dpr = window.devicePixelRatio;
const textureSize = 128 * dpr 
const vector = new THREE.Vector2();

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x000000, 0.4)

const cameraPath = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
const cameraTop = new THREE.OrthographicCamera(-w/ 2, w / 2, h / -2, h / 2, 1, 1000 )
cameraTop.position.y = 100;

const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio( dpr );
renderer.setSize(w, h);
//renderer.setAnimationLoop( animate );
renderer.autoClear = false;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.outputColorSpace = THREE.SRGBColorSpace;
document.body.appendChild(renderer.domElement)


//post processing
const renderScene = new RenderPass(scene, cameraPath);
const bloomPass = new UnrealBloomPass(new THREE.Vector2(w, h), 1.5, 0.4, 100);
bloomPass.threshold = 0.002;
bloomPass.strength = 0.8;
bloomPass.radius = 0;
const composer = new EffectComposer(renderer);
composer.addPass(renderScene)
composer.addPass(bloomPass)

// construct a line geometry from the spline
//const points = spline.getPoints(100);
//const geometry = new THREE.BufferGeometry().setFromPoints(points);
const material = new THREE.MeshStandardMaterial({ 
    color: 0xff00ff,
    side: THREE.DoubleSide,
})
//const line = new THREE.Line(geometry, material);
//scene.add(line)

const tubeGeo = new THREE.TubeGeometry(spline, 222, 0.50, 22, true)
const tube = new THREE.Mesh(tubeGeo, material)
scene.add(tube)
//create edges geometry from the spline
const tubeGeoLines = new THREE.TubeGeometry(spline, 222, 0.20, 22, true)

const edges = new THREE.EdgesGeometry(tubeGeoLines, 0.2)
const lineMat = new THREE.LineBasicMaterial( { color:colorRainbow} );
const tubeLines = new THREE.LineSegments(edges, lineMat)
scene.add(tubeLines)

const boxes = []

const numBoxes = 55;
const size = 0.05;
const boxgeo = new THREE.BoxGeometry(size, size, size);
for (let i=0; i < numBoxes; i++)
{
    const boxGroup = new THREE.Group();
    const boxmat = new THREE.MeshBasicMaterial({
        color:0xffffff,
        wireframe: true
    });
    const box = new THREE.Mesh(boxgeo, boxmat);
    const p = (i / numBoxes + Math.random()*0.1) % 1;
    const pos = tubeGeo.parameters.path.getPointAt(p);
    pos.x += Math.random() - 0.4;
    pos.z += Math.random() - 0.4;
    box.position.copy(pos);
    const rote = new THREE.Vector3(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
    );
    box.rotation.set(rote.x, rote.y, rote.z);
    const edges = new THREE.EdgesGeometry(boxgeo, 0.2)
    const color = new THREE.Color().setHSL(1.0 - p, 1, 0.5)
    const lineMat = new THREE.LineBasicMaterial( { color: color } );
    const boxLines = new THREE.LineSegments(edges, lineMat)
    boxLines.position.copy(pos)
    const light = new THREE.PointLight( color, 0.1, 5, 1)
    light.position.copy(pos)
    boxGroup.add(light)
    boxGroup.add(boxLines)
    box.rotation.set(rote.x, rote.y, rote.z)
    //scene.add(box);
    boxes.push(boxGroup)
}

boxes.forEach( (box) => 
    {
        scene.add(box)
    })

function updateSpritePosition() {
    const halfW = w/2
    const halfH = h/2

    const halfImageWidth = textureSize/2;
    const halfImageHeight = textureSize/2;

    sprite.position.set( -halfW + halfImageWidth, halfH - halfImageHeight, 1);
}

function updateCamera(t){
    const time = t * 0.1;
    const loopTime = 8 * 1000;
    const p = (time % loopTime) / loopTime;

    const pos = tubeGeo.parameters.path.getPointAt(p);
    const lookAt = tubeGeo.parameters.path.getPointAt((p + 0.03) % 1);
    cameraPath.position.copy(pos);
    cameraPath.lookAt(lookAt);
}

function changingColor(t) {
    const p = (t*0.1 % 8000) / 8000;
    colorRainbow = new THREE.Color().setHSL(1.0 - p, 1, 0.5)
}

function animate(t = 0) {
    requestAnimationFrame( animate );

    boxes.forEach( (box) =>
    {
        box.children[1].rotation.x += 0.05
        box.children[1].rotation.z += 0.05
    })

    changingColor(t);
    updateCamera(t);

    // scene rendering

    composer.render( scene, cameraTop)
}

animate();
function handleWindowResize() {
    cameraPath.updateProjectionMatrix();

    cameraTop.left = -w/8;
    cameraTop.right = w/8
    cameraTop.top = h/8;
    cameraTop.bottom = -h/8
    cameraTop.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener('resize', handleWindowResize)