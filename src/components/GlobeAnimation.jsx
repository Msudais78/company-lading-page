import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function GlobeAnimation() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // 1. THE DARK CORE (Matches dark mode BG or creates contrast in light mode)
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(2, 50, 50),
      new THREE.MeshPhongMaterial({ color: 0x09090b, shininess: 50 })
    );
    globeGroup.add(sphere);

    // 2. THE TECH GRID (Wireframe)
    const grid = new THREE.Mesh(
      new THREE.SphereGeometry(2.02, 40, 40),
      new THREE.MeshBasicMaterial({ color: 0x52525b, wireframe: true, transparent: true, opacity: 0.3 })
    );
    globeGroup.add(grid);

    // 3. DATA CONNECTIONS (Monochrome white/silver)
    function createCurve(lat1, lon1, lat2, lon2) {
      const start = decodeCoords(lat1, lon1, 2.05);
      const end = decodeCoords(lat2, lon2, 2.05);
      
      const mid = start.clone().lerp(end, 0.5).normalize().multiplyScalar(2.8);
      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      
      const geometry = new THREE.TubeGeometry(curve, 20, 0.008, 8, false);
      const material = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.7 });
      return new THREE.Mesh(geometry, material);
    }

    function decodeCoords(lat, lon, radius) {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      return new THREE.Vector3(
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
      );
    }

    // Add random tech connections
    for(let i=0; i<12; i++) {
      globeGroup.add(createCurve(
          Math.random()*160-80, Math.random()*360-180, 
          Math.random()*160-80, Math.random()*360-180
      ));
    }

    // 4. ORBITAL SATELLITES
    const orbitGroup = new THREE.Group();
    globeGroup.add(orbitGroup);
    const satGeom = new THREE.BoxGeometry(0.05, 0.05, 0.05);
    const satMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    for(let i=0; i<15; i++) {
      const sat = new THREE.Mesh(satGeom, satMat);
      const dist = 2.5 + Math.random();
      sat.position.set(Math.random()-0.5, Math.random()-0.5, Math.random()-0.5).normalize().multiplyScalar(dist);
      orbitGroup.add(sat);
    }

    // Lighting (White/Silver instead of Blue)
    const light = new THREE.PointLight(0xffffff, 1.5, 50);
    light.position.set(5, 5, 5);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040));

    camera.position.z = 6;

    // Interaction Logic
    let isDragging = false;
    let requestID;
    
    const handleMouseDown = () => { isDragging = true; };
    const handleMouseUp = () => { isDragging = false; };
    const handleMouseMove = (e) => {
      if(isDragging) {
        globeGroup.rotation.y += e.movementX * 0.005;
        globeGroup.rotation.x += e.movementY * 0.005;
      }
    };

    // Touch support for mobile interaction
    let previousTouch = null;
    const handleTouchStart = (e) => { 
        isDragging = true; 
        previousTouch = e.touches[0];
    };
    const handleTouchEnd = () => { 
        isDragging = false; 
        previousTouch = null;
    };
    const handleTouchMove = (e) => {
      if(isDragging && previousTouch) {
        const touch = e.touches[0];
        const movementX = touch.pageX - previousTouch.pageX;
        const movementY = touch.pageY - previousTouch.pageY;
        
        globeGroup.rotation.y += movementX * 0.005;
        globeGroup.rotation.x += movementY * 0.005;
        
        previousTouch = touch;
      }
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);
    
    canvas.addEventListener('touchstart', handleTouchStart, {passive: true});
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('touchmove', handleTouchMove, {passive: true});

    function animate() {
      requestID = requestAnimationFrame(animate);
      globeGroup.rotation.y += 0.002;
      orbitGroup.rotation.y -= 0.005;
      renderer.render(scene, camera);
    }
    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);

    // Cleanup memory and event listeners
    return () => {
      cancelAnimationFrame(requestID);
      canvas.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
      
      globeGroup.clear();
      orbitGroup.clear();
      renderer.dispose();
      
      // Dispose geometries and materials
      sphere.geometry.dispose();
      sphere.material.dispose();
      grid.geometry.dispose();
      grid.material.dispose();
      satGeom.dispose();
      satMat.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[400px] cursor-grab active:cursor-grabbing">
      <canvas ref={canvasRef} className="w-full h-full outline-none touch-none" />
    </div>
  );
}
