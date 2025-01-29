import * as THREE from 'three';

let animationId;


export function initSphereAnimation(container) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const material = new THREE.PointsMaterial({
        color: 0xffffff,  
        size: 0.01,       
        transparent: true,
    });

    
    const points = [];
    const numPoints = 7000; 

    for (let i = 0; i < numPoints; i++) {
        const theta = Math.random() * 2 * Math.PI;  
        const phi = Math.random() * Math.PI;        
        const radius = 10;                         

        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);

        points.push(new THREE.Vector3(x, y, z));
    }

    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    const sphere = new THREE.Points(geometry, material);
    scene.add(sphere);

    
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

    
    camera.position.set(0, 0, 20);
    camera.lookAt(0, 0, 0);


    let scaleFactor = 1;
    let scaleDirection = 1;

    function animate() {
        requestAnimationFrame(animate);

        scaleFactor += scaleDirection * 0.0003; 

        if (scaleFactor > 1.2 || scaleFactor < 0.8) {
            scaleDirection *= -1; 
        }

        sphere.scale.set(scaleFactor, scaleFactor, scaleFactor); 

        sphere.rotation.x += 0.001;
        sphere.rotation.y += 0.001;
        
        renderer.render(scene, camera);
    }

    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

export function clearSphere(container) {
    if (animationId) cancelAnimationFrame(animationId);
    container.innerHTML = '';
}

