import Scene from './Scene';
import Blob from './Blob';

import gsap from 'gsap';

export default class App {
    constructor() {
        this.blob = null;
        this.addBlobs();

        this.tl = gsap.timeline({
            delay: 0.25,
        });

        this.tl
            .add(this.article())
            .add(this.animBlobs(), '-=1');

        console.log('init Blobs')
    }

    addBlobs() {
        this.blob = new Blob(3, 0.25, 0.5, 1.5, 0.12, Math.PI * 2);
        this.blob.position.set(0, 0, 0);
        this.blob.rotation.set(0, 0, 0);

        Scene.scene.add(this.blob);
    }

    article() {
        // Main content
        const tl = gsap.timeline({
            defaults: {
                ease: 'power3.inOut',
            }
        });

        tl.from('.title', {
            duration: 2,
            xPercent: -100,
            stagger: 0.1,
        });

        return tl;
    }

    animBlobs() {
        const tl = gsap.timeline({
            defaults: {
                duration: 2,
                ease: 'power3.inOut'
            },
        });

        tl
            .from(this.blob.position, { z: 5, })
            .from(this.blob.mesh.material.uniforms.uAlpha, {
                value: 0,
                stagger: 0.2,
            }, 0);

        return tl;
    }
}