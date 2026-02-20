// Minimal 3D setup using Three.js CDN
let scene, camera, renderer, cubes = [];

function init3D() {
  const container = document.createElement('div');
  container.id = 'three-container';
  container.style.position = 'fixed';
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '100%';
  container.style.height = '100%';
  container.style.zIndex = '1';
  container.style.pointerEvents = 'none';
  document.body.insertBefore(container, document.body.firstChild);

  scene = new THREE.Scene();
  scene.background = null;
  
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 50;

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false, powerPreference: 'high-performance' });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.2));
  container.appendChild(renderer.domElement);

  // Create floating cubes
  const geometry = new THREE.BoxGeometry(3, 3, 3);
  const materials = [
    new THREE.MeshPhongMaterial({ color: 0x7c3aed, emissive: 0x7c3aed, emissiveIntensity: 0.3 }),
    new THREE.MeshPhongMaterial({ color: 0xa855f7, emissive: 0xa855f7, emissiveIntensity: 0.2 }),
    new THREE.MeshPhongMaterial({ color: 0xe879f9, emissive: 0xe879f9, emissiveIntensity: 0.3 })
  ];

  [
    { x: -30, y: 20, z: -40 },
    { x: 35, y: -15, z: -60 },
    { x: 10, y: 40, z: -80 }
  ].forEach((pos, i) => {
    const cube = new THREE.Mesh(geometry, materials[i]);
    cube.position.set(pos.x, pos.y, pos.z);
    cube.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
    cube.castShadow = false;
    cube.receiveShadow = false;
    cube.userData = { vx: (Math.random() - 0.5) * 0.002, vy: (Math.random() - 0.5) * 0.002 };
    scene.add(cube);
    cubes.push(cube);
  });

  const light = new THREE.PointLight(0xffffff, 0.5);
  light.position.set(50, 50, 50);
  scene.add(light);

  window.addEventListener('resize', onWindowResize);
  animate();
}

function onWindowResize() {
  const w = window.innerWidth, h = window.innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
}

function animate() {
  requestAnimationFrame(animate);
  cubes.forEach(cube => {
    cube.rotation.x += cube.userData.vx;
    cube.rotation.y += cube.userData.vy;
    cube.position.y += Math.sin(Date.now() * 0.0005) * 0.02;
  });
  renderer.render(scene, camera);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init3D);
} else {
  init3D();
}
