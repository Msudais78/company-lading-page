import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroAnimation() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);

    // === Nodes ===
    const NODE_COUNT = 90;
    const BOUNDS = { x: 40, y: 26, z: 20 };
    const CONNECT_DIST = 7;

    const nodes = [];
    const nodePositions = new Float32Array(NODE_COUNT * 3);

    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        pos: new THREE.Vector3(
          (Math.random() - 0.5) * BOUNDS.x,
          (Math.random() - 0.5) * BOUNDS.y,
          (Math.random() - 0.5) * BOUNDS.z
        ),
        vel: new THREE.Vector3(
          (Math.random() - 0.5) * 0.04,
          (Math.random() - 0.5) * 0.04,
          (Math.random() - 0.5) * 0.04
        )
      });
    }

    // Node points - adapted to zinc-500
    const nodeGeo = new THREE.BufferGeometry();
    nodeGeo.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));
    const nodeMat = new THREE.PointsMaterial({
      color: 0x71717a, 
      size: 0.35,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true
    });
    const nodePoints = new THREE.Points(nodeGeo, nodeMat);
    scene.add(nodePoints);

    // Lines - adapted to zinc-500
    const lineGeo = new THREE.BufferGeometry();
    const maxLines = NODE_COUNT * NODE_COUNT;
    const linePositions = new Float32Array(maxLines * 6);
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x71717a,
      transparent: true,
      opacity: 0.15
    });
    const lineSegments = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lineSegments);

    camera.position.z = 30;

    // Mouse parallax
    let mouseX = 0, mouseY = 0;
    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5);
      mouseY = (e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('mousemove', handleMouseMove);

    let requestID;
    function animate() {
      requestID = requestAnimationFrame(animate);

      // Update node positions
      for (let i = 0; i < NODE_COUNT; i++) {
        const n = nodes[i];
        n.pos.add(n.vel);

        // Bounce off bounds
        if (Math.abs(n.pos.x) > BOUNDS.x / 2) n.vel.x *= -1;
        if (Math.abs(n.pos.y) > BOUNDS.y / 2) n.vel.y *= -1;
        if (Math.abs(n.pos.z) > BOUNDS.z / 2) n.vel.z *= -1;

        nodePositions[i * 3]     = n.pos.x;
        nodePositions[i * 3 + 1] = n.pos.y;
        nodePositions[i * 3 + 2] = n.pos.z;
      }
      nodeGeo.attributes.position.needsUpdate = true;

      // Build connection lines
      let lineIdx = 0;
      for (let i = 0; i < NODE_COUNT; i++) {
        for (let j = i + 1; j < NODE_COUNT; j++) {
          const d = nodes[i].pos.distanceTo(nodes[j].pos);
          if (d < CONNECT_DIST) {
            linePositions[lineIdx++] = nodes[i].pos.x;
            linePositions[lineIdx++] = nodes[i].pos.y;
            linePositions[lineIdx++] = nodes[i].pos.z;
            linePositions[lineIdx++] = nodes[j].pos.x;
            linePositions[lineIdx++] = nodes[j].pos.y;
            linePositions[lineIdx++] = nodes[j].pos.z;
          }
        }
      }
      // Clear leftover
      for (let k = lineIdx; k < linePositions.length; k++) linePositions[k] = 0;
      lineGeo.attributes.position.needsUpdate = true;
      lineGeo.setDrawRange(0, lineIdx / 3);

      // Camera parallax
      camera.position.x += (mouseX * 8 - camera.position.x) * 0.04;
      camera.position.y += (-mouseY * 8 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

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

    return () => {
      cancelAnimationFrame(requestID);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full outline-none" />
    </div>
  );
}
