import React, { useEffect, useMemo, useState } from 'react';
import { useProgress } from '@react-three/drei';

// Full-screen global loader that listens to three.js DefaultLoadingManager via drei's useProgress
// Blocks page scroll while loading and fades out on completion
const GlobalLoader = () => {
    const { progress, active } = useProgress();
    const [visible, setVisible] = useState(true);

    // Consider loading until progress reaches 100 and not active anymore
    const isLoading = useMemo(() => active || progress < 100, [active, progress]);

    useEffect(() => {
        // Lock/unlock scroll
        if (isLoading) {
            const prev = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = prev;
            };
        }
    }, [isLoading]);

    useEffect(() => {
        if (!isLoading) {
            // Allow a brief fade-out before unmounting the overlay
            const t = setTimeout(() => setVisible(false), 400);
            return () => clearTimeout(t);
        } else if (!visible) {
            setVisible(true);
        }
    }, [isLoading, visible]);

    if (!visible && !isLoading) return null;

    return (
        <div
            aria-hidden={!isLoading}
            role="status"
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 9999,
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
                background: '#000',
                padding: 24,
                backdropFilter: 'blur(2px)',
                color: 'white',
                transition: 'opacity 0.4s ease, visibility 0.4s ease',
                opacity: isLoading ? 1 : 0,
                visibility: isLoading ? 'visible' : 'hidden',
            }}
        >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 12    }}>
                {/* Ring spinner */}
                <div
                    style={{
                        width: 72,
                        height: 72,
                        borderRadius: '50%',
                        border: '3px solid rgba(0, 255, 255, 0.15)',
                        borderTopColor: 'cyan',
                        animation: 'gl-spin 1s linear infinite',
                        boxShadow: '0 0 16px rgba(0,255,255,0.25) inset',
                    }}
                />
                {/* Progress text */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'grid',
                    placeItems: 'center',
                    pointerEvents: 'none'
                }}>
                    <img src="/typing.gif" alt="Typing animation" width={360} height={240} loading="eager" fetchpriority="high" style={{ display: 'block', maxWidth: '80vw', maxHeight: '60vh', objectFit: 'contain', opacity: 0.95 }} />
                </div>
                <div style={{
                    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                    fontSize: 14,
                    letterSpacing: 1,
                    color: 'rgba(255,255,255,0.85)'
                }}>
                    Loading… {Math.max(0, Math.min(100, progress)).toFixed(0)}%
                </div>
            </div>
            {/* keyframes inline */}
            <style>{`
        @keyframes gl-spin { to { transform: rotate(360deg); } }
      `}</style>
        </div>
    );
};

export default GlobalLoader;
