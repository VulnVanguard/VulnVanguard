// import React, { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';
// import { gsap } from 'gsap';
// import './styles.css'; 
// import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
// import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
// import { Font } from 'three/examples/jsm/loaders/FontLoader.js';
// import Navigation from '../navigation';

// const HomePage: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const animationRef = useRef<number | null>(null);
//   const sceneRef = useRef<THREE.Scene | null>(null);
//   const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
//   const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
//   const particlesRef = useRef<THREE.Points | null>(null);
//   const encryptionTextRef = useRef<HTMLDivElement>(null);
  
//   const encryptText = (text: string): string => {
//     const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}:"<>?|[];,./\\';
//     return text.split('').map(char => 
//       Math.random() > 0.5 ? chars[Math.floor(Math.random() * chars.length)] : char
//     ).join('');
//   };
  
//   const decryptText = (original: string, encrypted: string, progress: number): string => {
//     return original.split('').map((char, i) => {
//       if (i < original.length * progress) {
//         return char;
//       }
//       return encrypted[i] || char;
//     }).join('');
//   };

//   useEffect(() => {
//     gsap.ticker.lagSmoothing(0);
    
//     if (!containerRef.current || !canvasRef.current) return;
    
//     const scene = new THREE.Scene();
//     sceneRef.current = scene;
    
//     const camera = new THREE.PerspectiveCamera(
//       75, 
//       window.innerWidth / window.innerHeight, 
//       0.1, 
//       1000
//     );
//     camera.position.z = 20;
//     cameraRef.current = camera;
    
//     const renderer = new THREE.WebGLRenderer({
//       canvas: canvasRef.current,
//       alpha: true,
//       antialias: true
//     });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     rendererRef.current = renderer;
    
//     const particleCount = 2000;
//     const particleGeometry = new THREE.BufferGeometry();
//     const positions = new Float32Array(particleCount * 3);
//     const speeds = new Float32Array(particleCount);
    
//     for (let i = 0; i < particleCount; i++) {
     
//       positions[i * 3] = (Math.random() - 0.5) * 100;  // x
//       positions[i * 3 + 1] = (Math.random() - 0.5) * 50;  // y
//       positions[i * 3 + 2] = (Math.random() - 0.5) * 50;  // z
     
//       speeds[i] = 0.03 + Math.random() * 0.05;
//     }
    
//     particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
//     particleGeometry.setAttribute('speed', new THREE.BufferAttribute(speeds, 1));
    
//     const particleMaterial = new THREE.PointsMaterial({
//       size: 0.2,
//       color: 0x00ff00,
//       transparent: true,
//       opacity: 0.7,
//       blending: THREE.AdditiveBlending
//     });
    
//     const particles = new THREE.Points(particleGeometry, particleMaterial);
//     scene.add(particles);
//     particlesRef.current = particles;
    
//     const originalTexts = [
//       "FIND THE BUG",
//       "SOLVE THE BUG",
//       "MAKE THE REPORT",
//       "SUBMIT THE REPORT"
//     ];
    
//     let encryptedTexts = originalTexts.map(text => encryptText(text));
//     let currentTextIndex = 0;
    
//     const animateEncryption = () => {
//       if (!encryptionTextRef.current) return;
      
//       const originalText = originalTexts[currentTextIndex];
//       const encryptedText = encryptedTexts[currentTextIndex];
      
//       gsap.to({}, {
//         duration: 3,
//         onUpdate: function() {
//           if (!encryptionTextRef.current) return;
//           const progress = this.progress();
          
//           if (progress < 0.5) {
            
//             const adjustedProgress = progress * 2; 
//             encryptionTextRef.current.textContent = decryptText(encryptedText, originalText, adjustedProgress);
//             encryptionTextRef.current.setAttribute('data-state', 'encrypting');
//           } else {
            
//             const adjustedProgress = (progress - 0.5) * 2; 
//             encryptionTextRef.current.textContent = decryptText(originalText, encryptedText, adjustedProgress);
//             encryptionTextRef.current.setAttribute('data-state', 'decrypting');
//           }
//         },
//         onComplete: function() {
//           currentTextIndex = (currentTextIndex + 1) % originalTexts.length;
//           encryptedTexts[currentTextIndex] = encryptText(originalTexts[currentTextIndex]);
//           setTimeout(animateEncryption, 1000);
//         }
//       });
//     };
    
//     animateEncryption();
    
//     gsap.from('.hero-content', {
//       y: 100,
//       opacity: 0,
//       duration: 1.2,
//       ease: "power3.out"
//     });
    
//     gsap.from('.cta-button', {
//       scale: 0.8,
//       opacity: 0,
//       duration: 1,
//       delay: 0.8,
//       ease: "elastic.out(1, 0.5)"
//     });
    
//     const createBinaryElements = () => {
//       const group = new THREE.Group();
//       const binaryCount = 300;
//     const loader = new FontLoader();
//     let font: Font | null = null;

//      loader.load('/path-to-your-font.json', (loadedFont) => {
//       font = loadedFont;
//        console.log('Font loaded:', font);
//     });
      
//       const createBinaryDigit = (value: string, position: THREE.Vector3) => {
//         const textGeometry = new THREE.PlaneGeometry(0.5, 0.5);
//         const canvas = document.createElement('canvas');
//         canvas.width = 64;
//         canvas.height = 64;
//         const context = canvas.getContext('2d');
        
//         if (context) {
//           context.fillStyle = '#000000';
//           context.fillRect(0, 0, 64, 64);
//           context.font = 'bold 48px Arial';
//           context.fillStyle = '#00ff00';
//           context.textAlign = 'center';
//           context.textBaseline = 'middle';
//           context.fillText(value, 32, 32);
//         }
        
//         const texture = new THREE.CanvasTexture(canvas);
//         const material = new THREE.MeshBasicMaterial({
//           map: texture,
//           transparent: true,
//           opacity: 0.7 + Math.random() * 0.3
//         });
        
//         const mesh = new THREE.Mesh(textGeometry, material);
//         mesh.position.copy(position);
//         return mesh;
//       };
      
//       for (let i = 0; i < binaryCount; i++) {
//         const value = Math.random() > 0.5 ? "1" : "0";
//         const position = new THREE.Vector3(
//           (Math.random() - 0.5) * 100,
//           (Math.random() - 0.5) * 50,
//           (Math.random() - 0.5) * 20
//         );
        
//         const digit = createBinaryDigit(value, position);
//         group.add(digit);
        
//         if (Math.random() > 0.7) {
//           const blockGeometry = new THREE.BoxGeometry(0.4, 0.4, 0.1);
//           const blockMaterial = new THREE.MeshBasicMaterial({
//             color: 0x00ff00,
//             transparent: true,
//             opacity: 0.5 + Math.random() * 0.3
//           });
          
//           const block = new THREE.Mesh(blockGeometry, blockMaterial);
//           block.position.set(
//             position.x + (Math.random() - 0.5) * 2,
//             position.y + (Math.random() - 0.5) * 2,
//             position.z + (Math.random() - 0.5) * 2
//           );
//           group.add(block);
//         }
//       }
      
//       return group;
//     };
    
//     const binaryGroup = createBinaryElements();
//     scene.add(binaryGroup);
    
   
//     const animate = () => {
//       if (!particlesRef.current || !rendererRef.current || !sceneRef.current || !cameraRef.current) return;
      
      
//       const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
//       const speeds = particlesRef.current.geometry.attributes.speed.array as Float32Array;
      
//       for (let i = 0; i < positions.length / 3; i++) {
       
//         positions[i * 3 + 1] -= speeds[i];
        
//         if (positions[i * 3 + 1] < -25) {
//           positions[i * 3 + 1] = 25;
//           positions[i * 3] = (Math.random() - 0.5) * 100;
//           positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
//         }
//       }
      
//       particlesRef.current.geometry.attributes.position.needsUpdate = true;
//       particlesRef.current.rotation.y += 0.0005;

//       binaryGroup.children.forEach((child, index) => {
       
//         child.position.y -= 0.02 + (index % 5) * 0.005;
        
//         if (child.position.y < -25) {
//           child.position.y = 25;
//           child.position.x = (Math.random() - 0.5) * 100;
//           child.position.z = (Math.random() - 0.5) * 50;
//         }
        
//         child.rotation.z += 0.001;
//       });
      
//       rendererRef.current.render(sceneRef.current, cameraRef.current);
//       animationRef.current = requestAnimationFrame(animate);
//     };
    
//     animate();
    
//     const handleResize = () => {
//       if (!cameraRef.current || !rendererRef.current) return;
      
//       cameraRef.current.aspect = window.innerWidth / window.innerHeight;
//       cameraRef.current.updateProjectionMatrix();
//       rendererRef.current.setSize(window.innerWidth, window.innerHeight);
//     };
    
//     window.addEventListener('resize', handleResize);
    
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       if (animationRef.current) cancelAnimationFrame(animationRef.current);
      
//       if (particlesRef.current) {
//         particlesRef.current.geometry.dispose();
//         (particlesRef.current.material as THREE.Material).dispose();
//       }
      
//       if (rendererRef.current) {
//         rendererRef.current.dispose();
//       }
//     };
//   }, []);

//   return (
//     <>
//       <div className="landing-container" ref={containerRef}>
//         <canvas ref={canvasRef} className="webgl-canvas"></canvas>
        
//         <div className="content-wrapper">
//           <header className="header">
//             <div className="logo">Vuln-<span>VANGUARD</span></div>
//             <Navigation />
//           </header>
          
//           <main className="hero-content">
//             <h1 className="main-title">Vuln<span>VANGUARD</span></h1>
//             <h2 className="subtitle">Next-Gen Cybersecurity Event</h2>
            
//             <div className="encryption-animation">
//               <div className="encryption-text" ref={encryptionTextRef}>FIND THE BUG & SOLVE THE BUG</div>
//             </div>
            
//             <p className="description">
//               The ultimate cybersecurity challenge.
//               Innovate with the best. Build the future of secure web applications. Exciting
//               prizes await.
//             </p>
            
            
//           </main>
//         </div> 
//       </div>
//     </>
//   );
// };

// export default HomePage;

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import './styles.css'; 
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { Font } from 'three/examples/jsm/loaders/FontLoader.js';

const HomePage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const encryptionTextRef = useRef<HTMLDivElement>(null);
  const binaryGroupRef = useRef<THREE.Group | null>(null);
  
  const encryptText = (text: string): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}:"<>?|[];,./\\';
    return text.split('').map(char => 
      Math.random() > 0.5 ? chars[Math.floor(Math.random() * chars.length)] : char
    ).join('');
  };
  
  const decryptText = (original: string, encrypted: string, progress: number): string => {
    return original.split('').map((char, i) => {
      if (i < original.length * progress) {
        return char;
      }
      return encrypted[i] || char;
    }).join('');
  };

  useEffect(() => {
    gsap.ticker.lagSmoothing(0);
    
    if (!containerRef.current || !canvasRef.current) return;
    
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    const camera = new THREE.PerspectiveCamera(
      75, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      1000
    );
    camera.position.z = 20;
    cameraRef.current = camera;
    
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;
    
    const particleCount = 2000;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const speeds = new Float32Array(particleCount);
    
    for (let i = 0; i < particleCount; i++) {
     
      positions[i * 3] = (Math.random() - 0.5) * 100;  // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;  // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;  // z
     
      speeds[i] = 0.03 + Math.random() * 0.05;
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('speed', new THREE.BufferAttribute(speeds, 1));
    
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.2,
      color: 0x00ff00,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending
    });
    
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    particlesRef.current = particles;
    
    const originalTexts = [
      "FIND THE BUG",
      "SOLVE THE BUG",
      "MAKE THE REPORT",
      "SUBMIT THE REPORT"
    ];
    
    let encryptedTexts = originalTexts.map(text => encryptText(text));
    let currentTextIndex = 0;
    
    const animateEncryption = () => {
      if (!encryptionTextRef.current) return;
      
      const originalText = originalTexts[currentTextIndex];
      const encryptedText = encryptedTexts[currentTextIndex];
      
      gsap.to({}, {
        duration: 3,
        onUpdate: function() {
          if (!encryptionTextRef.current) return;
          const progress = this.progress();
          
          if (progress < 0.5) {
            
            const adjustedProgress = progress * 2; 
            encryptionTextRef.current.textContent = decryptText(encryptedText, originalText, adjustedProgress);
            encryptionTextRef.current.setAttribute('data-state', 'encrypting');
          } else {
            
            const adjustedProgress = (progress - 0.5) * 2; 
            encryptionTextRef.current.textContent = decryptText(originalText, encryptedText, adjustedProgress);
            encryptionTextRef.current.setAttribute('data-state', 'decrypting');
          }
        },
        onComplete: function() {
          currentTextIndex = (currentTextIndex + 1) % originalTexts.length;
          encryptedTexts[currentTextIndex] = encryptText(originalTexts[currentTextIndex]);
          setTimeout(animateEncryption, 1000);
        }
      });
    };
    
    animateEncryption();
    
    gsap.from('.hero-content', {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    });
    
    gsap.from('.cta-button', {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      delay: 0.8,
      ease: "elastic.out(1, 0.5)"
    });
    
    const createBinaryElements = () => {
      const group = new THREE.Group();
      const binaryCount = 300;
      
      const createBinaryDigit = (value: string, position: THREE.Vector3) => {
        const textGeometry = new THREE.PlaneGeometry(0.5, 0.5);
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const context = canvas.getContext('2d');
        
        if (context) {
          context.fillStyle = '#000000';
          context.fillRect(0, 0, 64, 64);
          context.font = 'bold 48px Arial';
          context.fillStyle = '#00ff00';
          context.textAlign = 'center';
          context.textBaseline = 'middle';
          context.fillText(value, 32, 32);
        }
        
        const texture = new THREE.CanvasTexture(canvas);
        const material = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          opacity: 0.7 + Math.random() * 0.3
        });
        
        const mesh = new THREE.Mesh(textGeometry, material);
        mesh.position.copy(position);
        return mesh;
      };
      
      for (let i = 0; i < binaryCount; i++) {
        const value = Math.random() > 0.5 ? "1" : "0";
        const position = new THREE.Vector3(
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 50,
          (Math.random() - 0.5) * 20
        );
        
        const digit = createBinaryDigit(value, position);
        group.add(digit);
      }
      
      return group;
    };
    
    const binaryGroup = createBinaryElements();
    scene.add(binaryGroup);
    binaryGroupRef.current = binaryGroup;
    
    // Consistent drop speed for binary digits
    const standardDropSpeed = 0.05;
    
    const animate = () => {
      if (!particlesRef.current || !rendererRef.current || !sceneRef.current || !cameraRef.current || !binaryGroupRef.current) return;
      
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      const speeds = particlesRef.current.geometry.attributes.speed.array as Float32Array;
      
      for (let i = 0; i < positions.length / 3; i++) {
        positions[i * 3 + 1] -= speeds[i];
        
        if (positions[i * 3 + 1] < -25) {
          positions[i * 3 + 1] = 25;
          positions[i * 3] = (Math.random() - 0.5) * 100;
          positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
        }
      }
      
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
      particlesRef.current.rotation.y += 0.0005;

      // Update binary digits with consistent speed
      binaryGroupRef.current.children.forEach((child) => {
        child.position.y -= standardDropSpeed;
        
        if (child.position.y < -25) {
          child.position.y = 25;
          child.position.x = (Math.random() - 0.5) * 100;
          child.position.z = (Math.random() - 0.5) * 50;
        }
        
        child.rotation.z += 0.001;
      });
      
      rendererRef.current.render(sceneRef.current, cameraRef.current);
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      
      if (particlesRef.current) {
        particlesRef.current.geometry.dispose();
        (particlesRef.current.material as THREE.Material).dispose();
      }
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  return (
    <>
      <div className="landing-container" ref={containerRef}>
        <canvas ref={canvasRef} className="webgl-canvas"></canvas>
        
        <div className="content-wrapper">
          <header className="header">
            <div className="logo">Vuln-<span>VANGUARD</span></div>
            
          </header>
          
          <main className="hero-content">
            <h1 className="main-title">Vuln<span>VANGUARD</span></h1>
            <h2 className="subtitle">Next-Gen Cybersecurity Event</h2>
            
            <div className="encryption-animation">
              <div className="encryption-text" ref={encryptionTextRef}>FIND THE BUG & SOLVE THE BUG</div>
            </div>
            
            <p className="description">
              The ultimate cybersecurity challenge.
              Innovate with the best. Build the future of secure web applications. Exciting
              prizes await.
            </p>
          </main>
        </div> 
      </div>
    </>
  );
};

export default HomePage;