const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff, 0);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(2, 1.3, 1.2);
const texture = new THREE.TextureLoader().load("./aot.jpg");

const textureLoader = new THREE.TextureLoader();

const cubeMaterials = [
    new THREE.MeshBasicMaterial({
        map: textureLoader.load("./aot.jpg"),
        side: THREE.Double,
    }),
    new THREE.MeshBasicMaterial({
        map: textureLoader.load("./bazinga.png"),
        side: THREE.Double,
    }),
    new THREE.MeshBasicMaterial({
        map: textureLoader.load("./energyBg.jpg"),
        side: THREE.Double,
    }),
    new THREE.MeshBasicMaterial({
        map: textureLoader.load("./kakashi.jpg"),
        side: THREE.Double,
    }),
    new THREE.MeshBasicMaterial({
        map: textureLoader.load("./moon.jpg"),
        side: THREE.Double,
    }),
    new THREE.MeshBasicMaterial({
        map: textureLoader.load("./test1.jpg"),
        side: THREE.Double,
    }),
];

// const material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
// const material = new THREE.MeshBasicMaterial({
//     map: texture,
//     wireframe: true,
//     wireframeLineWidth: 4,
// });
const material = new THREE.MeshFaceMaterial(cubeMaterials);

const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

// camera.position.x = 5;
// camera.position.y = 5;
camera.position.z = 5;

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

let bunny;

const objLoader = new THREE.OBJLoader();
objLoader.load(
    "./bunny-5000.obj",
    (obj) => {
        obj.scale.set(0.3, 0.3, 0.3);
        scene.add(obj);
        bunny = obj;
    },
    () => {},
    (err) => console.log(err)
);

const ambientLight = new THREE.AmbientLight(0xcccccc, 0.4);
scene.add(ambientLight);
const pointLight = new THREE.PointLight(0xffffff, 1);
camera.add(pointLight);

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;

    // bunny.rotation.x += 0.01;
    // bunny.rotation.y += 0.01;
    // bunny.rotation.z += 0.01;

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
