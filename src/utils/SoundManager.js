import { eventSubscribe } from "../events/EventBus";

import { SOUND_EVENTS } from "./SoundEvent";

class SoundManager
{
    constructor()
    {
        this.audioContext = null;
        this.buffers = new Map();
        this.activeSources = new Set();
        this.isInitialized = false;

        this.playSound = this.playSound.bind(this);
        this.setupEventSubscription();
    }

    setupEventSubscription()
    {
        eventSubscribe(SOUND_EVENTS.SoundRequestEvent, this.playSound);
    }

    async init()
    {
        if (this.isInitialized) return;

        try
        {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.isInitialized = true;
        }
        catch (err)
        {
            console.error('[DEBUG, SoundManager] Failed to initialize AudioContext', err);
        }
    }

    async loadSound(soundPath)
    {
        if (this.buffers.has(soundPath)) return this.buffers.get(soundPath);

        if (!this.audioContext)
        {
            await this.init();
            if (!this.audioContext) return null;
        }

        try
        {
            const response = await fetch(soundPath);
            const arrayBuffer = await response.arrayBuffer();
            const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
            this.buffers.set(soundPath, audioBuffer);
            return audioBuffer;
        }
        catch (err)
        {
            console.error(`[DEBUG, SoundManager] Failed to load ${soundPath}`, err);
            return null;
        }
    }

    async playSound(eventData)
    {
        const soundPath = eventData.soundType;
        if (!this.audioContext) await this.init();
        if (!this.audioContext || this.audioContext.state === 'closed') return;

        if (this.audioContext.state === 'suspended')
            await this.audioContext.resume();

        const buffer = await this.loadSound(soundPath);
        if (!buffer) return;

        const source = this.audioContext.createBufferSource();
        source.buffer = buffer;

        const gainNode = this.audioContext.createGain();
        source.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        const playbackRate = 0.7 + Math.random() * 0.6;
        const detune = Math.random() * 400 - 200;
        const volume = 0.5 + Math.random() * 0.5;

        source.playbackRate.value = playbackRate;
        source.detune.value = detune;
        gainNode.gain.value = volume;

        source.start();

        source.onended = () =>
        {
            source.disconnect();
            gainNode.disconnect();
            this.activeSources.delete(source);
        };

        this.activeSources.add(source);
    }
}

const global_SoundManager = new SoundManager();
export default global_SoundManager;