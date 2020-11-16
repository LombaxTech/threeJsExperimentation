const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(2, 1.3, 1.2);
const material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

// camera.position.x = 5;
// camera.position.y = 5;
camera.position.z = 5;

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

const loader = new THREE.OBJLoader();
loader.load(
    "./bunny-5000.obj",
    (obj) => scene.add(obj),
    () => {},
    (err) => console.log(err)
);

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;

    renderer.render(scene, camera);
}
animate();

document.addEventListener("keydown", (e) => {
    const key = e.key;
    if (key === "v") console.log("v");
    if (key === "e") console.log("e");
    if (key === "f") console.log("f");
});

// camera.position.set(0, 0, 100);
// camera.lookAt(0, 0, 0);

// const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
// const points = [
//     new THREE.Vector3(-10, 0, 0),
//     new THREE.Vector3(0, 10, 0),
//     new THREE.Vector3(10, 0, 0),
// ];

// const geometry = new THREE.BufferGeometry().setFromPoints(points);

// const line = new THREE.Line(geometry, material);
// scene.add(line);
// renderer.render(scene, camera);

// * CW EXPERIMENTATION START
