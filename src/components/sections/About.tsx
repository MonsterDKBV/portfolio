"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export function About() {
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reveal = (el: HTMLElement) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    };

    const el = revealRef.current;
    if (!el) return;

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              reveal(e.target as HTMLElement);
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
      );
      io.observe(el);
      return () => io.unobserve(el);
    } else {
      reveal(el);
    }
  }, []);

  return (
    <section
      id="about"
      className="sect"
      style={{
        position: "relative",
        padding: "60px 40px 100px",
        maxWidth: "1240px",
        margin: "0 auto",
      }}
    >
      <style jsx>{`
        @media (max-width: 768px) {
          .about-layer-bg {
            display: none !important;
          }
        }
      `}</style>
      <div
        ref={revealRef}
        className="about-grid"
        style={{
          opacity: 0,
          transform: "translateY(20px)",
          transition: "all .8s cubic-bezier(.2,.7,.3,1)",
          display: "grid",
          gridTemplateColumns: ".9fr 1.1fr",
          gap: "56px",
          alignItems: "center",
        }}
      >
        {/* Portrait */}
        <div
          className="about-media"
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "480px",
          }}
        >
          {/* Radial purple glow behind everything */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "420px",
              height: "420px",
              background:
                "radial-gradient(circle, rgba(146,129,247,.18), transparent 65%)",
              filter: "blur(40px)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          {/* Layer container */}
          <div
            style={{
              position: "relative",
              width: "min(340px, 85vw)",
              height: "min(460px, calc(85vw * 1.35))",
            }}
          >
            {/* Layer 1 — Back layer (deepest) */}
            <div
              className="about-layer-bg"
              style={{
                position: "absolute",
                inset: 0,
                border: "2px solid #23262a",
                borderRadius: "20px",
                transform: "translate(-16px, -20px) rotate(-4deg)",
                boxShadow:
                  "0 25px 50px -15px rgba(0,0,0,.4), inset 0 1px 0 rgba(255,255,255,.02)",
                background: "rgba(10,10,12,.3)",
                zIndex: 1,
              }}
            />

            {/* Layer 2 — Middle layer with violet glow */}
            <div
              className="about-layer-bg"
              style={{
                position: "absolute",
                inset: 0,
                border: "1.5px solid #2b2f34",
                borderRadius: "18px",
                transform: "translate(-8px, -10px) rotate(-2deg)",
                boxShadow:
                  "0 20px 40px -12px rgba(0,0,0,.5), 0 0 0 1px rgba(146,129,247,.3), 0 0 20px rgba(146,129,247,.2)",
                background: "rgba(15,14,20,.4)",
                zIndex: 2,
              }}
            />

            {/* Layer 3 — Front layer (photo) */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid #33363c",
                boxShadow:
                  "0 30px 60px -20px rgba(0,0,0,.8), inset 0 1px 0 rgba(255,255,255,.06)",
                zIndex: 3,
              }}
            >
              {/* Gradient overlays */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(160deg, rgba(146,129,247,.08), transparent 50%)",
                  zIndex: 2,
                  mixBlendMode: "soft-light",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, transparent 55%, rgba(0,0,0,.4))",
                  zIndex: 3,
                }}
              />

              {/* Photo */}
              <Image
                src="/portrait.jpg"
                alt="Даниэл Кубанычбеков"
                width={340}
                height={460}
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 18%",
                  filter: "contrast(1.03) brightness(1.02)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Text */}
        <div>
          <div
            style={{
              fontFamily: "'Geist Mono',monospace",
              fontSize: "12.5008px",
              letterSpacing: ".13em",
              color: "#9281f7",
              textTransform: "uppercase",
              marginBottom: "18px",
            }}
          >
            05 — ОБО МНЕ
          </div>
          <h2
            style={{
              margin: "0 0 24px",
              fontFamily: "'Geist',system-ui,sans-serif",
              fontWeight: 600,
              letterSpacing: "-.03em",
              fontSize: "clamp(32px,3.8vw,48px)",
              lineHeight: 1.06,
              color: "#ffffff",
            }}
          >
            Даниэл Кубанычбеков
          </h2>
          <p
            style={{
              margin: "0 0 18px",
              fontSize: "16.5px",
              lineHeight: 1.7,
              color: "#a7abac",
              fontWeight: 300,
              maxWidth: "540px",
            }}
          >
            Мне 19 лет. Помимо Frontend-разработки, я работал с заказчиками,
            интеграциями, CRM, базовыми Backend-задачами, деплоем и передачей
            готовых проектов.
          </p>
          <p
            style={{
              margin: 0,
              fontSize: "16.5px",
              lineHeight: 1.7,
              color: "#a7abac",
              fontWeight: 300,
              maxWidth: "540px",
            }}
          >
            Мне интересно понимать продукт целиком и постепенно брать на себя
            больше ответственности на разных этапах разработки. <br /> Моя цель
            — стать <b>Product Engineer</b>, который способен самостоятельно
            довести проект от идеи до запуска и дальнейшей поддержки.
          </p>
        </div>
      </div>
    </section>
  );
}
