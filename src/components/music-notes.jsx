"use client"

import { useEffect, useRef } from "react"
import "../styles/music-notes.css"

export default function MusicNotes() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const notes = []
    const noteSymbols = ["♩", "♪", "♫", "♬", "𝄞"]
    const colors = ["#e61e25", "#d4af37", "#ffffff"]

    class Note {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = canvas.height + 100
        this.size = Math.random() * 25 + 15
        this.speed = Math.random() * 2 + 1
        this.symbol = noteSymbols[Math.floor(Math.random() * noteSymbols.length)]
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.rotation = Math.random() * 360
        this.rotationSpeed = Math.random() * 2 - 1
        this.opacity = Math.random() * 0.5 + 0.5
        this.pulse = Math.random() * 0.5 + 0.8
        this.pulseSpeed = Math.random() * 0.02 + 0.01
        this.pulseDirection = Math.random() > 0.5 ? 1 : -1
      }

      update() {
        this.y -= this.speed
        this.rotation += this.rotationSpeed

        // Faire disparaître progressivement les notes en haut
        if (this.y < canvas.height * 0.2) {
          this.opacity -= 0.01
        }

        // Effet de pulsation
        this.pulse += this.pulseSpeed * this.pulseDirection
        if (this.pulse > 1.3 || this.pulse < 0.8) {
          this.pulseDirection *= -1
        }
      }

      draw() {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate((this.rotation * Math.PI) / 180)
        ctx.scale(this.pulse, this.pulse)
        ctx.font = `${this.size}px Arial`
        ctx.fillStyle = this.color
        ctx.globalAlpha = this.opacity
        ctx.fillText(this.symbol, 0, 0)
        ctx.restore()
      }
    }

    function createNote() {
      if (notes.length < 60 && Math.random() < 0.05) {
        notes.push(new Note())
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      createNote()

      for (let i = 0; i < notes.length; i++) {
        notes[i].update()
        notes[i].draw()

        if (notes[i].y < -50 || notes[i].opacity <= 0) {
          notes.splice(i, 1)
          i--
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="music-notes" />
}
