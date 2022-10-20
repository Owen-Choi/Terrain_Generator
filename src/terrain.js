import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.112.1/build/three.module.js';

function createGround(){
    console.log("started");
    const scene = new THREE.Scene();
    const groundGeo = new THREE.PlaneGeometry(1000,1000);
    let disMap = new THREE.TextureLoader().load('./resources/heightmap-simondev.jpg');

    disMap.wraps =disMap.wrapT = THREE.RepeatWrapping;
    // disMap.repeat.set(sliders.horTexture,);

    var csrt = new THREE.ImageUtils.loadTexture('./resources/coast_sand_rock_texture.jpg');
    csrt.wrapS = csrt.wrapT = THREE.RepeatWrapping;
    var bumpScale   = 200.0;

    var customUniforms = {
        coast_sand_rock_texture:    { type:"t", value: csrt},
        bumpScale:                  { type:"t", value: bumpScale}
    };

    const groundMat = new THREE.MeshStandardMaterial({
        uniforms: customUniforms,
        color:0x000000,
        wireframe: true,
        displacementMap: disMap,
        displacementScale : 1
    });

    const groundMesh = new THREE.Mesh(groundGeo, groundMat);
    scene.add(groundMesh);
    groundMesh.rotation.x=-Math.PI/2;
    groundMesh.position.y = -0.5;


    // function animate() {
    //     requestAnimationFrame( animate );
    //
    //     renderer.render( scene, camera );
    // }
    // animate();
}

createGround();