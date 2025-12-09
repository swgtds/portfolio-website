'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';

// Three.js imports (installed via package.json)
import * as THREE from 'three';

function LostInSpaceCanvas() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

  const width = window.innerWidth;
  const height = window.innerHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Scene & camera
    const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
  camera.position.set(0, 0, 120);

    // Theme-aware palette from CSS variables
    const css = getComputedStyle(document.documentElement);
    const isDark = document.documentElement.classList.contains('dark');
    
    const hslToHex = (h:number, s:number, l:number) => {
      s /= 100; l /= 100;
      const c = (1 - Math.abs(2*l - 1)) * s;
      const x = c * (1 - Math.abs(((h/60) % 2) - 1));
      const m = l - c/2;
      let r=0, g=0, b=0;
      if (0 <= h && h < 60) { r = c; g = x; b = 0; }
      else if (60 <= h && h < 120) { r = x; g = c; b = 0; }
      else if (120 <= h && h < 180) { r = 0; g = c; b = x; }
      else if (180 <= h && h < 240) { r = 0; g = x; b = c; }
      else if (240 <= h && h < 300) { r = x; g = 0; b = c; }
      else { r = c; g = 0; b = x; }
      const toHex = (v:number) => {
        const h = Math.round((v + m) * 255).toString(16).padStart(2, '0');
        return h;
      };
      return parseInt(`${toHex(r)}${toHex(g)}${toHex(b)}`, 16);
    };
    
    const palette = {
      // Light mode: white bg, dark planets | Dark mode: dark bg, bright planets
      bg: isDark ? 0x0a0a0a : 0xffffff,
      starNear: isDark ? 0xffffff : 0x333333,
      starFar: isDark ? 0xcccccc : 0x666666,
      planetBlue: isDark ? 0x60a5fa : 0x1e40af,
      planetPurple: isDark ? 0xa78bfa : 0x5b21b6,
      planetOrange: isDark ? 0xfbbf24 : 0x92400e,
      planetGreen: isDark ? 0x4ade80 : 0x166534,
      planetRed: isDark ? 0xf87171 : 0x991b1b,
      lightAmbient: isDark ? 0xffffff : 0x888888,
      lightDir: isDark ? 0xffffff : 0x444444,
    };

    // Lights
    const ambient = new THREE.AmbientLight(palette.lightAmbient, 0.7);
    scene.add(ambient);
    const dir = new THREE.DirectionalLight(palette.lightDir, 0.6);
    dir.position.set(20, 40, 30);
    scene.add(dir);

    // Background gradient (nebula-like plane)
  const bgGeo = new THREE.PlaneGeometry(1200, 1200);
    const bgMat = new THREE.MeshBasicMaterial({
      color: palette.bg,
      transparent: true,
      opacity: 1,
    });
    const bg = new THREE.Mesh(bgGeo, bgMat);
    bg.position.set(0, 0, -120);
    scene.add(bg);

    // Stars background (denser, two layers for parallax)
    const makeStars = (count: number, depth: number, color: number, size: number, glow = false) => {
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 300;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 300;
        pos[i * 3 + 2] = -Math.random() * depth - 40;
      }
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.PointsMaterial({ 
        color, 
        size, 
        sizeAttenuation: true,
        transparent: glow,
        opacity: glow ? 0.8 : 1.0,
        blending: glow ? THREE.AdditiveBlending : THREE.NormalBlending
      });
      return new THREE.Points(geo, mat);
    };
    const starsNear = makeStars(1200, 260, palette.starNear, 1.4, true);
    const starsFar = makeStars(2000, 400, palette.starFar, 0.9);
    scene.add(starsNear);
    scene.add(starsFar);    // Remove astronaut: focus on planetary space scene

  // Planets (spheres with different materials)
  const planetGeoSmall = new THREE.SphereGeometry(8, 32, 32);
  const planetGeoMed = new THREE.SphereGeometry(14, 32, 32);
  const planetGeoLarge = new THREE.SphereGeometry(22, 32, 32);
  const planetMatBlue = new THREE.MeshStandardMaterial({ color: palette.planetBlue, metalness: 0.2, roughness: 0.7 });
  const planetMatPurple = new THREE.MeshStandardMaterial({ color: palette.planetPurple, metalness: 0.3, roughness: 0.6 });
  const planetMatOrange = new THREE.MeshStandardMaterial({ color: palette.planetOrange, metalness: 0.2, roughness: 0.6 });

  const planet1 = new THREE.Mesh(planetGeoLarge, planetMatBlue);
  const planet2 = new THREE.Mesh(planetGeoMed, planetMatPurple);
  const planet3 = new THREE.Mesh(planetGeoSmall, planetMatOrange);
  const planet4 = new THREE.Mesh(planetGeoSmall, new THREE.MeshStandardMaterial({ color: palette.planetGreen, metalness: 0.25, roughness: 0.6 }));
  const planet5 = new THREE.Mesh(planetGeoMed, new THREE.MeshStandardMaterial({ color: palette.planetRed, metalness: 0.2, roughness: 0.7 }));

  planet1.position.set(-120, 60, -220);
  planet2.position.set(160, -40, -300);
  planet3.position.set(-180, -120, -280);
  planet4.position.set(80, 140, -260);
  planet5.position.set(-40, 20, -240);
  scene.add(planet1, planet2, planet3, planet4, planet5);

    // Animation
    let t = 0;
    const animate = () => {
      t += 0.01;
      // Parallax star layers (enhanced motion)
      starsNear.rotation.z += 0.0012;
      starsFar.rotation.z += 0.0006;
      // Planet orbits (increased amplitude)
      planet1.position.x = -120 + Math.cos(t * 0.15) * 60;
      planet1.position.y = 60 + Math.sin(t * 0.12) * 45;
      planet2.position.x = 160 + Math.cos(t * 0.22) * 80;
      planet2.position.y = -40 + Math.sin(t * 0.18) * 60;
      planet3.position.x = -180 + Math.cos(t * 0.25) * 90;
      planet3.position.y = -120 + Math.sin(t * 0.2) * 70;
      planet4.position.x = 80 + Math.cos(t * 0.3) * 75;
      planet4.position.y = 140 + Math.sin(t * 0.26) * 50;
      planet5.position.x = -40 + Math.cos(t * 0.2) * 65;
      planet5.position.y = 20 + Math.sin(t * 0.17) * 45;
      planet1.rotation.y += 0.002;
      planet2.rotation.y += 0.003;
      planet3.rotation.y += 0.0035;
      planet4.rotation.y += 0.0025;
      planet5.rotation.y += 0.003;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // React to theme changes (listen for class changes on html)
    const observer = new MutationObserver(() => {
      const darkNow = document.documentElement.classList.contains('dark');
      const newPalette = {
        bg: darkNow ? 0x0a0a0a : 0xffffff,
        starNear: darkNow ? 0xffffff : 0x333333,
        starFar: darkNow ? 0xcccccc : 0x666666,
        planetBlue: darkNow ? 0x60a5fa : 0x1e40af,
        planetPurple: darkNow ? 0xa78bfa : 0x5b21b6,
        planetOrange: darkNow ? 0xfbbf24 : 0x92400e,
        planetGreen: darkNow ? 0x4ade80 : 0x166534,
        planetRed: darkNow ? 0xf87171 : 0x991b1b,
        lightAmbient: darkNow ? 0xffffff : 0x888888,
        lightDir: darkNow ? 0xffffff : 0x444444,
      };
      bgMat.color.setHex(newPalette.bg);
      (ambient as THREE.Light).color.setHex(newPalette.lightAmbient);
      (dir as THREE.Light).color.setHex(newPalette.lightDir);
      (planet1.material as THREE.MeshStandardMaterial).color.setHex(newPalette.planetBlue);
      (planet2.material as THREE.MeshStandardMaterial).color.setHex(newPalette.planetPurple);
      (planet3.material as THREE.MeshStandardMaterial).color.setHex(newPalette.planetOrange);
      (planet4.material as THREE.MeshStandardMaterial).color.setHex(newPalette.planetGreen);
      (planet5.material as THREE.MeshStandardMaterial).color.setHex(newPalette.planetRed);
      (starsNear.material as THREE.PointsMaterial).color.setHex(newPalette.starNear);
      (starsFar.material as THREE.PointsMaterial).color.setHex(newPalette.starFar);
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    // Handle resize
    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', onResize);
      observer.disconnect();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 -z-10" />;
}

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <LostInSpaceCanvas />
      <div className="text-center max-w-md">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-primary mb-4">404</h1>
        <p className="text-base md:text-lg text-muted-foreground mb-6">
          Looks like your floating in space! Or maybe this page doesn’t exist.
        </p>
        <div className="flex justify-center">
          <Button asChild size="lg" className="px-6">
            <Link href="/">Back to homepage</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
