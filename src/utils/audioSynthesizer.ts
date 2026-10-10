// Web Audio API tone contour synthesizer

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function playToneContour(frequencies: number[], duration = 0.6) {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';

    const now = ctx.currentTime;
    
    // Smooth attack and release
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(0.3, now + 0.05);
    gain.gain.setValueAtTime(0.3, now + duration - 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    // Schedule frequency curve
    if (frequencies.length > 0) {
      osc.frequency.setValueAtTime(frequencies[0], now);
      const stepTime = duration / (frequencies.length - 1);
      for (let i = 1; i < frequencies.length; i++) {
        osc.frequency.linearRampToValueAtTime(frequencies[i], now + i * stepTime);
      }
    }

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + duration + 0.05);
  } catch (err) {
    console.warn("Audio playback not supported or user has not interacted yet", err);
  }
}

export function playToneByName(toneId: string) {
  switch (toneId) {
    case 'ngang':
      // Level high-mid: flat ~220Hz
      playToneContour([220, 220, 220, 220], 0.65);
      break;
    case 'huyen':
      // Falling: ~220Hz down to ~165Hz
      playToneContour([220, 205, 185, 165], 0.65);
      break;
    case 'sac':
      // Rising sharp: ~210Hz swiftly up to ~340Hz
      playToneContour([210, 230, 280, 340], 0.6);
      break;
    case 'hoi':
      // Dipping: ~200Hz down to ~150Hz then rises to ~230Hz
      playToneContour([200, 170, 150, 190, 230], 0.7);
      break;
    case 'nga':
      // Rising glottal: ~220Hz -> quick dip -> pause -> high ~320Hz
      playToneContour([220, 180, 260, 320], 0.65);
      break;
    case 'nang':
      // Heavy abrupt drop: ~190Hz dropped steeply to ~120Hz & short
      playToneContour([190, 160, 125], 0.35);
      break;
    default:
      playToneContour([220, 220], 0.5);
  }
}
