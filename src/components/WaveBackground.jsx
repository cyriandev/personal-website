import { useEffect } from 'react'

export default function WaveBackground() {
  useEffect(() => {
    const THREE = window.THREE
    if (!THREE) return

    let container, camera, scene, renderer, particles, particle
    const SEPARATION = 40, AMOUNTX = 200, AMOUNTY = 35
    let count = 0
    let windowHalfX = window.innerWidth / 2
    let windowHalfY = window.innerHeight / 2
    let animFrameId

    container = document.createElement('div')
    document.body.appendChild(container)
    container.className = 'waves'

    camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 1, 1e4)
    camera.position.y = 300
    camera.position.z = 300
    camera.rotation.x = 0.35

    scene = new THREE.Scene()
    particles = []

    const e = 2 * Math.PI
    const material = new THREE.SpriteCanvasMaterial({
      color: 9671571,
      program: (ctx) => { ctx.beginPath(); ctx.arc(0, 0, 0.1, 0, e, true); ctx.fill() },
    })

    let i = 0
    for (let r = 0; r < AMOUNTX; r++) {
      for (let a = 0; a < AMOUNTY; a++) {
        particle = particles[i++] = new THREE.Sprite(material)
        particle.position.x = r * SEPARATION - (AMOUNTX * SEPARATION) / 2
        particle.position.z = a * SEPARATION - (AMOUNTY * SEPARATION - 10)
        scene.add(particle)
      }
    }

    renderer = new THREE.CanvasRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(1118481, 1)
    container.appendChild(renderer.domElement)

    function onWindowResize() {
      windowHalfX = window.innerWidth / 2
      windowHalfY = window.innerHeight / 2
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    function render() {
      let idx = 0
      for (let n = 0; n < AMOUNTX; n++) {
        for (let ii = 0; ii < AMOUNTY; ii++) {
          particle = particles[idx++]
          particle.position.y = 20 * Math.sin(0.5 * (n + count)) + 20 * Math.sin(0.5 * (ii + count))
          particle.scale.x = particle.scale.y =
            4 * (Math.sin(0.3 * (n + count)) + 2) + 4 * (Math.sin(0.5 * (ii + count)) + 1)
        }
      }
      renderer.render(scene, camera)
      count += 0.2
    }

    function animate() {
      animFrameId = requestAnimationFrame(animate)
      render()
    }

    window.addEventListener('resize', onWindowResize, false)
    animate()

    return () => {
      cancelAnimationFrame(animFrameId)
      window.removeEventListener('resize', onWindowResize)
      if (container && container.parentNode) {
        container.parentNode.removeChild(container)
      }
    }
  }, [])

  return null
}
