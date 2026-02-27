"use client";

import { useEffect, useRef, useState } from "react";

type TrailDot = {
  id: number;
  x: number;
  y: number;
  bornAt: number;
};

type HeartFx = {
  id: number;
  x: number;
  y: number;
  bornAt: number;
  driftX: number;
};

type Direction = {
  x: -1 | 0 | 1;
  y: -1 | 0 | 1;
};

export default function Landing() {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const [sceneWidth, setSceneWidth] = useState(1200);
  const [sceneHeight, setSceneHeight] = useState(740);
  const [pandaX, setPandaX] = useState(120);
  const [pandaY, setPandaY] = useState(16);
  const [pandaRolling, setPandaRolling] = useState(false);
  const [pandaScale, setPandaScale] = useState(1);
  const [trailDots, setTrailDots] = useState<TrailDot[]>([]);
  const [hearts, setHearts] = useState<HeartFx[]>([]);
  const [feedCount, setFeedCount] = useState(0);
  const [draggingBamboo, setDraggingBamboo] = useState(false);
  const [bambooPos, setBambooPos] = useState({ x: 36, y: 34 });

  const gridSize = 28;

  const directionRef = useRef<Direction>({ x: 1, y: 0 });
  const xRef = useRef(120);
  const yRef = useRef(16);
  const lastFrameRef = useRef(0);
  const lastTrailRef = useRef(0);
  const rollUntilRef = useRef(0);
  const segmentRemainingRef = useRef(5 * gridSize);
  const idRef = useRef(0);
  const dragOffsetRef = useRef({ x: 14, y: 14 });
  const bambooPosRef = useRef({ x: 36, y: 34 });

  useEffect(() => {
    const updateFrameSize = () => {
      const frame = frameRef.current;
      if (!frame) return;
      setSceneWidth(frame.clientWidth);
      setSceneHeight(frame.clientHeight);
    };

    updateFrameSize();
    window.addEventListener("resize", updateFrameSize);

    return () => window.removeEventListener("resize", updateFrameSize);
  }, []);

  useEffect(() => {
    let raf = 0;

    const dirs: Direction[] = [
      { x: 1, y: 0 },
      { x: -1, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: -1 },
    ];

    const pickNextDirection = () => {
      const current = directionRef.current;
      const allowed = dirs.filter(
        (d) => !(d.x === -current.x && d.y === -current.y)
      );
      const next = allowed[Math.floor(Math.random() * allowed.length)];
      directionRef.current = next;
      segmentRemainingRef.current = (3 + Math.floor(Math.random() * 7)) * gridSize;
    };

    const tick = (now: number) => {
      if (!lastFrameRef.current) {
        lastFrameRef.current = now;
      }

      const dt = Math.min(40, now - lastFrameRef.current);
      lastFrameRef.current = now;

      const isRolling = now < rollUntilRef.current;
      const speedPerMs = isRolling ? 0.34 : 0.095;
      const minX = 20;
      const maxX = Math.max(minX + 20, sceneWidth - 130);
      const minY = 0;
      const maxY = Math.max(40, Math.min(210, sceneHeight - 480));

      const moveX = directionRef.current.x * dt * speedPerMs;
      const moveY = directionRef.current.y * dt * speedPerMs;
      let nextX = xRef.current + moveX;
      let nextY = yRef.current + moveY;

      segmentRemainingRef.current -= Math.abs(moveX) + Math.abs(moveY);

      let hitBoundary = false;
      if (nextX <= minX) {
        nextX = minX;
        hitBoundary = true;
      }
      if (nextX >= maxX) {
        nextX = maxX;
        hitBoundary = true;
      }
      if (nextY <= minY) {
        nextY = minY;
        hitBoundary = true;
      }
      if (nextY >= maxY) {
        nextY = maxY;
        hitBoundary = true;
      }

      if (hitBoundary || segmentRemainingRef.current <= 0) {
        pickNextDirection();
      }

      xRef.current = nextX;
      yRef.current = nextY;
      setPandaX(nextX);
      setPandaY(nextY);
      setPandaRolling(isRolling);

      if (now - lastTrailRef.current > 70) {
        lastTrailRef.current = now;
        const nextDot: TrailDot = {
          id: idRef.current++,
          x: nextX + 34,
          y: nextY + 10,
          bornAt: now,
        };

        setTrailDots((prev) => {
          const active = prev.filter((dot) => now - dot.bornAt < 700);
          return [...active.slice(-20), nextDot];
        });
      } else {
        setTrailDots((prev) => prev.filter((dot) => now - dot.bornAt < 700));
      }

      raf = window.requestAnimationFrame(tick);
    };

    raf = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(raf);
  }, [sceneHeight, sceneWidth]);

  const onPandaClick = () => {
    rollUntilRef.current = performance.now() + 550;
  };

  useEffect(() => {
    if (!draggingBamboo) return;

    const onMove = (event: PointerEvent) => {
      const rect = frameRef.current?.getBoundingClientRect();
      if (!rect) return;

      const nextX =
        event.clientX - rect.left - dragOffsetRef.current.x;
      const nextBottom =
        rect.bottom - event.clientY - dragOffsetRef.current.y;

      const clampedX = Math.max(8, Math.min(rect.width - 36, nextX));
      const clampedBottom = Math.max(8, Math.min(rect.height - 36, nextBottom));
      bambooPosRef.current = { x: clampedX, y: clampedBottom };
      setBambooPos({ x: clampedX, y: clampedBottom });
    };

    const onUp = (event: PointerEvent) => {
      setDraggingBamboo(false);

      const rect = frameRef.current?.getBoundingClientRect();
      if (!rect) return;

      const dropX =
        event.clientX - rect.left - dragOffsetRef.current.x;
      const dropBottom =
        rect.bottom - event.clientY - dragOffsetRef.current.y;
      const clampedX = Math.max(8, Math.min(rect.width - 36, dropX));
      const clampedBottom = Math.max(8, Math.min(rect.height - 36, dropBottom));
      bambooPosRef.current = { x: clampedX, y: clampedBottom };

      const bambooRect = {
        left: bambooPosRef.current.x,
        right: bambooPosRef.current.x + 28,
        bottom: bambooPosRef.current.y,
        top: bambooPosRef.current.y + 28,
      };
      const pandaSize = 64 * pandaScale;
      const pandaRect = {
        left: pandaX,
        right: pandaX + pandaSize,
        bottom: pandaY,
        top: pandaY + pandaSize,
      };
      const intersects =
        bambooRect.left < pandaRect.right + 18 &&
        bambooRect.right > pandaRect.left - 18 &&
        bambooRect.bottom < pandaRect.top + 18 &&
        bambooRect.top > pandaRect.bottom - 18;

      if (intersects) {
        setFeedCount((prev) => Math.min(prev + 1, 12));
        setPandaScale((prev) => Math.min(prev + 0.12, 2.2));
        rollUntilRef.current = performance.now() + 350;
        const baseX = pandaX + (64 * pandaScale) / 2;
        const baseY = pandaY + (64 * pandaScale) * 0.82;
        const now = performance.now();
        const burst: HeartFx[] = Array.from({ length: 5 }).map((_, idx) => ({
          id: idRef.current++,
          x: baseX + (idx - 2) * 8,
          y: baseY + (idx % 2) * 4,
          bornAt: now,
          driftX: (Math.random() - 0.5) * 18,
        }));
        setHearts((prev) => [...prev.slice(-20), ...burst]);
      }

      bambooPosRef.current = { x: 36, y: 34 };
      setBambooPos({ x: 36, y: 34 });
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp, { once: true });

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [draggingBamboo, pandaScale, pandaX, pandaY]);

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const now = performance.now();
      setHearts((prev) => prev.filter((h) => now - h.bornAt < 900));
      raf = window.requestAnimationFrame(tick);
    };
    raf = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="relative h-full snap-start snap-always border-b border-zinc-300/50 bg-zinc-50 px-3 py-3 dark:border-white/10 dark:bg-zinc-950 md:px-5 md:py-5">
      <div
        ref={frameRef}
        className="relative mx-auto h-[82vh] min-h-[520px] max-h-[860px] w-full max-w-[1500px] overflow-hidden rounded-2xl border border-zinc-300/60 bg-zinc-50 shadow-[0_8px_40px_rgba(0,0,0,0.08)] dark:border-white/15 dark:bg-zinc-950 dark:shadow-[0_8px_40px_rgba(0,0,0,0.35)]"
      >
      <div
        className="absolute inset-0 opacity-70 dark:hidden"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(24,24,27,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(24,24,27,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        className="absolute inset-0 hidden opacity-80 dark:block"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute inset-0 hidden dark:block dark:bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.20),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.16),_transparent_55%)] dark:hidden" />

      {/* Subtle vertical bamboo accents */}
      <div className="pointer-events-none absolute left-[5%] top-[13%] h-[58%] w-20 opacity-45">
        <div className="absolute left-3 h-full w-[6px] rounded-full bg-emerald-500/14 dark:bg-emerald-300/16" />
        <div className="absolute left-10 h-[92%] w-[5px] rounded-full bg-emerald-500/11 dark:bg-emerald-300/13" />
        <div className="absolute left-1 top-[22%] h-[2px] w-7 rounded-full bg-emerald-500/16 dark:bg-emerald-300/20" />
        <div className="absolute left-7 top-[44%] h-[2px] w-8 rounded-full bg-emerald-500/14 dark:bg-emerald-300/18" />
        <div className="absolute left-0 top-[33%] h-[10px] w-[22px] -rotate-[24deg] rounded-full bg-emerald-400/11 dark:bg-emerald-200/13" />
        <div className="absolute left-7 top-[58%] h-[10px] w-[20px] rotate-[22deg] rounded-full bg-emerald-400/10 dark:bg-emerald-200/12" />
      </div>

      <div className="pointer-events-none absolute right-[6%] top-[20%] h-[54%] w-20 opacity-40">
        <div className="absolute right-3 h-full w-[6px] rounded-full bg-emerald-500/12 dark:bg-emerald-300/14" />
        <div className="absolute right-10 h-[88%] w-[5px] rounded-full bg-emerald-500/10 dark:bg-emerald-300/12" />
        <div className="absolute right-1 top-[26%] h-[2px] w-7 rounded-full bg-emerald-500/14 dark:bg-emerald-300/18" />
        <div className="absolute right-7 top-[48%] h-[2px] w-8 rounded-full bg-emerald-500/12 dark:bg-emerald-300/16" />
        <div className="absolute right-6 top-[34%] h-[10px] w-[22px] rotate-[24deg] rounded-full bg-emerald-400/10 dark:bg-emerald-200/12" />
        <div className="absolute right-0 top-[60%] h-[10px] w-[20px] -rotate-[20deg] rounded-full bg-emerald-400/9 dark:bg-emerald-200/11" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center justify-center px-4 text-center">
        <div>
          <h1 className="text-5xl font-black uppercase tracking-[0.12em] text-zinc-900 dark:text-zinc-100 sm:text-7xl md:text-8xl">
            Nathan Lee
          </h1>
          <p className="mt-5 text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">
            Click on the panda.
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-[62px] left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-zinc-500/60 to-transparent dark:via-zinc-700/70" />

      <div className="absolute inset-0 z-20">
        {hearts.map((heart) => {
          const age = performance.now() - heart.bornAt;
          const life = Math.max(0, 1 - age / 900);
          return (
            <div
              key={heart.id}
              className="pointer-events-none absolute text-pink-500/90 dark:text-pink-300/90"
              style={{
                left: heart.x + heart.driftX * (1 - life),
                bottom: heart.y + (1 - life) * 58,
                opacity: life,
                transform: `translate(-50%, 0) scale(${0.75 + (1 - life) * 0.45})`,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 21s-6.7-4.35-9.33-8.1C.64 9.95 1.49 6.5 4.42 5.23c2.1-.91 4.2-.14 5.58 1.53 1.38-1.67 3.48-2.44 5.58-1.53 2.93 1.27 3.78 4.72 1.75 7.67C18.7 16.65 12 21 12 21z" />
              </svg>
            </div>
          );
        })}

        {trailDots.map((dot) => {
          const age = Date.now() - dot.bornAt;
          const life = Math.max(0, 1 - age / 700);
          return (
            <div
              key={dot.id}
              className="pointer-events-none absolute h-3 w-3 rounded-full bg-emerald-400/70 blur-[1px]"
              style={{
                left: dot.x,
                bottom: dot.y + (1 - life) * 8,
                opacity: life,
                transform: `scale(${0.55 + life * 0.7})`,
              }}
            />
          );
        })}

        <button
          type="button"
          onClick={onPandaClick}
          className="absolute cursor-pointer select-none"
          style={{
            left: pandaX,
            bottom: pandaY,
            width: `${64 * pandaScale}px`,
            height: `${64 * pandaScale}px`,
            transform: pandaRolling
              ? "rotate(360deg)"
              : "rotate(0deg)",
            transition: pandaRolling ? "transform 0.55s linear" : "transform 0.2s ease",
          }}
          aria-label="Run panda"
          title="Click me"
        >
          <span className="absolute inset-0 rounded-full border-2 border-black/80 bg-white shadow-lg" />
          <span className="absolute left-[3%] top-[6%] h-[31%] w-[31%] rounded-full bg-black" />
          <span className="absolute right-[1%] top-[6%] h-[31%] w-[31%] rounded-full bg-black" />
          <span className="absolute left-[26%] top-[37%] h-[14%] w-[14%] rounded-full bg-black" />
          <span className="absolute right-[26%] top-[37%] h-[14%] w-[14%] rounded-full bg-black" />
          <span className="absolute left-1/2 top-[50%] h-[16%] w-[16%] -translate-x-1/2 rounded-full bg-black" />
        </button>

        <div className="absolute bottom-4 left-4 rounded-xl border border-amber-900/40 bg-amber-200/70 p-3 shadow-[0_6px_16px_rgba(0,0,0,0.18)] backdrop-blur-sm dark:border-amber-700/45 dark:bg-amber-950/55">
          <div className="pointer-events-none absolute inset-0 rounded-xl bg-[linear-gradient(135deg,rgba(255,255,255,0.16),rgba(0,0,0,0.06))]" />
          <p className="relative mb-2 text-xs font-semibold text-amber-950 dark:text-amber-100">
            Drag bamboo to feed panda
          </p>
          <div className="relative h-10 w-24 overflow-hidden rounded-lg border border-amber-900/35 bg-amber-700/45 dark:border-amber-500/35 dark:bg-amber-900/55">
            <div className="absolute inset-x-0 top-[2px] h-[2px] bg-amber-200/35 dark:bg-amber-100/20" />
            <div className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 bg-amber-900/30 dark:bg-amber-950/40" />
            <div className="absolute inset-x-0 bottom-[2px] h-[2px] bg-amber-900/30 dark:bg-amber-950/45" />

            <div className="absolute left-[3px] top-[3px] h-1.5 w-1.5 rounded-full bg-zinc-700/70 dark:bg-zinc-300/45" />
            <div className="absolute right-[3px] top-[3px] h-1.5 w-1.5 rounded-full bg-zinc-700/70 dark:bg-zinc-300/45" />
            <div className="absolute left-[3px] bottom-[3px] h-1.5 w-1.5 rounded-full bg-zinc-700/70 dark:bg-zinc-300/45" />
            <div className="absolute right-[3px] bottom-[3px] h-1.5 w-1.5 rounded-full bg-zinc-700/70 dark:bg-zinc-300/45" />

            <div className="absolute left-2 top-2 h-6 w-[7px] rounded-full bg-emerald-700/85 dark:bg-emerald-300/80" />
            <div className="absolute left-6 top-2 h-6 w-[7px] rounded-full bg-emerald-700/75 dark:bg-emerald-300/72" />
            <div className="absolute left-10 top-2 h-6 w-[7px] rounded-full bg-emerald-700/85 dark:bg-emerald-300/80" />
          </div>
        </div>

        <button
          type="button"
          onPointerDown={(event) => {
            const targetRect = event.currentTarget.getBoundingClientRect();
            dragOffsetRef.current = {
              x: event.clientX - targetRect.left,
              y: targetRect.bottom - event.clientY,
            };
            setDraggingBamboo(true);
          }}
          className="absolute h-7 w-7 cursor-grab active:cursor-grabbing"
          style={{
            left: bambooPos.x,
            bottom: bambooPos.y,
          }}
          aria-label="Drag bamboo"
          title="Drag bamboo to panda"
        >
          <span className="absolute left-[3px] top-[2px] h-6 w-[6px] rounded-full bg-emerald-600 dark:bg-emerald-300" />
          <span className="absolute left-[10px] top-[1px] h-6 w-[6px] rounded-full bg-emerald-500 dark:bg-emerald-200" />
          <span className="absolute left-[17px] top-[2px] h-6 w-[6px] rounded-full bg-emerald-600 dark:bg-emerald-300" />
        </button>
      </div>
      </div>
    </section>
  );
}
