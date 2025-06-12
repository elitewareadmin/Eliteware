import { useEffect, useRef } from "react";
import * as THREE from "three";
import * as gsap from "gsap";
import * as React from "react";

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2(0, 0));

  useEffect(() => {
    if (!canvasRef.current) return;

    // Setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    // Particle system
    const particleCount = 1500;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    // Create particles in a sphere shape
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const radius = Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      scales[i] = Math.random();
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particleGeometry.setAttribute(
      "scale",
      new THREE.BufferAttribute(scales, 1)
    );

    const particleMaterial = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(0xc32afc) },
        color2: { value: new THREE.Color(0x3d4de5) },
        time: { value: 0 },
        mouse: { value: new THREE.Vector2(0, 0) },
      },
      vertexShader: `
        attribute float scale;
        uniform float time;
        uniform vec2 mouse;
        
        varying vec3 vColor;
        varying float vScale;
        
        void main() {
          vScale = scale;
          
          // Calculate distance to mouse
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vec2 projectPosition = vec2(mvPosition.x, mvPosition.y);
          float distToMouse = length(projectPosition - mouse * 5.0);
          
          // Apply force based on mouse position
          vec3 pos = position;
          if (distToMouse < 2.0) {
            float force = 0.2 / max(0.1, distToMouse);
            vec3 dir = normalize(vec3(projectPosition - mouse * 5.0, 0.0));
            pos += dir * force;
          }
          
          // Apply some movement over time
          pos.x += sin(pos.y * 0.5 + time * 0.5) * 0.05;
          pos.y += cos(pos.x * 0.5 + time * 0.5) * 0.05;
          pos.z += sin(pos.z * 0.5 + time * 0.5) * 0.05;
          
          vec4 modelViewPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * modelViewPosition;
          
          // Size
          gl_PointSize = scale * 4.0 + 2.0;
          gl_PointSize *= (1.0 / - modelViewPosition.z);
          
          // Color based on position
          float colorFactor = (pos.x + pos.y + pos.z) * 0.2 + 0.5;
          vColor = mix(vec3(0.76, 0.17, 0.99), vec3(0.24, 0.30, 0.90), colorFactor);
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vScale;
        
        void main() {
          // Circular particles
          float strength = 1.0 - distance(gl_PointCoord, vec2(0.5));
          strength = smoothstep(0.0, 0.5, strength);
          
          gl_FragColor = vec4(vColor, strength * vScale);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // Handle mouse movement
    const onMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", onMouseMove);

    // Handle window resize
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onResize);

    // Animation loop
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Update particle system
      if (particleMaterial.uniforms) {
        particleMaterial.uniforms.time.value = elapsedTime;
        particleMaterial.uniforms.mouse.value = mouseRef.current;
      }

      // Rotate the particles gently
      if (particles) {
        particles.rotation.y = elapsedTime * 0.05;
      }

      // Render
      renderer.render(scene, camera);

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);

      scene.remove(particles);
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    // Text animation with GSAP
    const tl = gsap.gsap.timeline({
      defaults: { duration: 1, ease: "power3.out" },
    });

    tl.from(".hero-title span", {
      y: 100,
      opacity: 0,
      stagger: 0.1,
    })
      .from(
        ".hero-subtitle",
        {
          y: 20,
          opacity: 0,
        },
        "-=0.6"
      )
      .from(
        ".hero-cta",
        {
          y: 20,
          opacity: 0,
        },
        "-=0.4"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* 3D Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700"
      />

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-8 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="hero-title font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {"Transformando el futuro digital".split("").map((char, index) => (
              <span key={index} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          <p className="hero-subtitle text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Consultoría tecnológica especializada en inteligencia artificial,
            metaverso y software disruptivo para empresas que buscan liderar la
            transformación digital.
          </p>

          <div className="hero-cta flex justify-center gap-4">
            <a
              href="/servicios"
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-md font-medium transition-all duration-300"
            >
              Nuestros Servicios
            </a>
            <a
              href="/contacto"
              className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-md font-medium transition-all duration-300"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/60 text-sm mb-2">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce mt-1"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
