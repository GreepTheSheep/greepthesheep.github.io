<script>
export default {
    props: {
        isDarkMode: {
            type: Boolean
        },
        showStars: {
            type: Boolean
        }
    },
    data() {
        return {
            STAR_COLOR: this.isDarkMode ? "#9dfab6" : "#0c451b",
            STAR_SIZE: 3,
            STAR_MIN_SCALE: 0.2,
            OVERFLOW_THRESHOLD: 50,
            STAR_SPEED: 100,  // higher = less speed
            STAR_COUNT: ( window.innerWidth + window.innerHeight ) / 24,

            canvas: null,
            context: null,
            scale: 1,  // device pixel ratio
            width: null,
            height: null,
            stars: [],
            pointerX: null,
            pointerY: null,
            velocity: { x: 0, y: 0, tx: 0, ty: 0, z: 0.000005 },
            touchInput: false,
            screensaverMode: false
        }
    },
    async mounted() {
        await this.$router.isReady();
        this.canvas = document.querySelector('canvas');
        this.context = this.canvas.getContext('2d');
        this.generate();
        this.resize();
        this.step();

        window.onresize = this.resize;

        this.screensaverMode = ("screensaver" in this.$route.query && this.$route.query.screensaver == null) || Boolean(this.$route.query.screensaver) || false;
        console.log("screensaver?", this.screensaverMode);

        if (this.screensaverMode) {

            // Position initiale du point
            this.pointerX = this.canvas.width / 2;
            this.pointerY = this.canvas.width / 2;
            let x = this.canvas.width / 2;
            let y = this.canvas.height / 2;

            // Limites de déplacement
            const xMin = 10;
            const xMax = this.canvas.width - 10;
            const yMin = 10;
            const yMax = this.canvas.height - 10;

            // Position initiale du point de la cible
            let targetX = Math.floor(Math.random() * (xMax - xMin + 1)) + xMin;
            let targetY = Math.floor(Math.random() * (yMax - yMin + 1)) + yMin;

            // Vitesse de déplacement
            const speed = 3;

            setInterval(() => {
                // Calculer la direction vers la cible
                const dx = targetX - x;
                const dy = targetY - y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Si la distance est petite, définir une nouvelle cible
                if (distance < speed) {
                    targetX = Math.floor(Math.random() * (xMax - xMin + 1)) + xMin;
                    targetY = Math.floor(Math.random() * (yMax - yMin + 1)) + yMin;
                    // console.log("new target:", targetX, targetY);
                } else {
                    // Déplacer le point progressivement vers la cible
                    x += (dx / distance) * speed;
                    y += (dy / distance) * speed;
                }

                this.movePointer( x, y );
            }, 10);
        } else {
            document.onmousemove = this.onMouseMove;
            document.ontouchmove = this.onTouchMove;
            document.ontouchend = this.onMouseLeave;
            document.onmouseleave = this.onMouseLeave;
        }
    },
    methods: {
        generate() {
            for( let i = 0; i < this.STAR_COUNT; i++ ) {
                this.stars.push({
                    x: 0,
                    y: 0,
                    z: this.STAR_MIN_SCALE + Math.random() * ( 1 - this.STAR_MIN_SCALE )
                });
            }
        },
        placeStar( star ) {
            star.x = Math.random() * this.width;
            star.y = Math.random() * this.height;
        },
        onMouseLeave() {
            this.pointerX = null;
            this.pointerY = null;
        },
        onTouchMove( event ) {
            this.touchInput = true;
            this.movePointer( event.touches[0].clientX, event.touches[0].clientY, true );
            event.preventDefault();
        },
        onMouseMove( event ) {
            this.touchInput = false;
            this.movePointer( event.clientX, event.clientY );
        },
        movePointer( x, y ) {
            if( typeof this.pointerX === 'number' && typeof this.pointerY === 'number' ) {
                let ox = x - this.pointerX,
                    oy = y - this.pointerY;

                this.velocity.tx = this.velocity.tx + ( ox / this.STAR_SPEED*this.scale ) * ( this.touchInput ? 1 : -1 );
                this.velocity.ty = this.velocity.ty + ( oy / this.STAR_SPEED*this.scale ) * ( this.touchInput ? 1 : -1 );
            }
            this.pointerX = x;
            this.pointerY = y;
        },
        render() {

            this.stars.forEach( ( star ) => {

                this.context.beginPath();
                this.context.lineCap = 'round';
                this.context.lineWidth = this.STAR_SIZE * star.z * this.scale;
                this.context.globalAlpha = 0.5 + 0.5*Math.random();
                this.context.strokeStyle = this.STAR_COLOR;

                this.context.beginPath();
                this.context.moveTo( star.x, star.y );

                var tailX = this.velocity.x * 2,
                    tailY = this.velocity.y * 2;

                // stroke() wont work on an invisible line
                if( Math.abs( tailX ) < 0.1 ) tailX = 0.5;
                if( Math.abs( tailY ) < 0.1 ) tailY = 0.5;

                this.context.lineTo( star.x + tailX, star.y + tailY );

                this.context.stroke();

            } );
        },
        update() {

            this.STAR_COLOR = this.isDarkMode ? "#9dfab6" : "#0c451b";

            this.velocity.tx *= 0.96;
            this.velocity.ty *= 0.96;

            this.velocity.x += ( this.velocity.tx - this.velocity.x ) * 0.8;
            this.velocity.y += ( this.velocity.ty - this.velocity.y ) * 0.8;

            this.stars.forEach( ( star ) => {

                star.x += this.velocity.x * star.z;
                star.y += this.velocity.y * star.z;

                star.x += ( star.x - this.width/2 ) * this.velocity.z * star.z;
                star.y += ( star.y - this.height/2 ) * this.velocity.z * star.z;
                star.z += this.velocity.z;

                // recycle when out of bounds
                if( star.x < -this.OVERFLOW_THRESHOLD || star.x > this.width + this.OVERFLOW_THRESHOLD || star.y < -this.OVERFLOW_THRESHOLD || star.y > this.height + this.OVERFLOW_THRESHOLD ) {
                    this.recycleStar(star);
                }

            } );
        },
        step() {
            if (this.showStars) {
                this.context.clearRect(0, 0, this.width, this.height);
                this.update();
                this.render();
            } else {
                this.context.clearRect(0, 0, this.width, this.height);
            }
            requestAnimationFrame(this.step);
        },
        resize() {
            this.scale = window.devicePixelRatio || 1;
            this.width = window.innerWidth * this.scale;
            this.height = window.innerHeight * this.scale;
            this.canvas.width = this.width;
            this.canvas.height = this.height;
            this.stars.forEach(this.placeStar);
        },
        recycleStar( star ) {
            let direction = 'z';

            let vx = Math.abs(this.velocity.x),
                vy = Math.abs(this.velocity.y);

            if( vx > 1 || vy > 1 ) {
                let axis;

                if( vx > vy ) {
                    axis = Math.random() < vx / ( vx + vy ) ? 'h' : 'v';
                }
                else {
                    axis = Math.random() < vy / ( vx + vy ) ? 'v' : 'h';
                }

                if( axis === 'h' ) {
                    direction = this.velocity.x > 0 ? 'l' : 'r';
                }
                else {
                    direction = this.velocity.y > 0 ? 't' : 'b';
                }
            }

            star.z = this.STAR_MIN_SCALE + Math.random() * ( 1 - this.STAR_MIN_SCALE );

            if( direction === 'z' ) {
                star.z = 0.1;
                star.x = Math.random() * this.width;
                star.y = Math.random() * this.height;
            }
            else if( direction === 'l' ) {
                star.x = -this.OVERFLOW_THRESHOLD;
                star.y = this.height * Math.random();
            }
            else if( direction === 'r' ) {
                star.x = this.width + this.OVERFLOW_THRESHOLD;
                star.y = this.height * Math.random();
            }
            else if( direction === 't' ) {
                star.x = this.width * Math.random();
                star.y = -this.OVERFLOW_THRESHOLD;
            }
            else if( direction === 'b' ) {
                star.x = this.width * Math.random();
                star.y = this.height + this.OVERFLOW_THRESHOLD;
            }
        }
    }
}
</script>

<template>
    <canvas />
</template>

<style scoped lang="scss">
canvas {
    position: fixed;
    width: 100%;
    height: 100%;
    transition: background 1s, background-image 1s, background-color 1s, background-blend-mode 1s;
}

body canvas {
    background-color: #fff;
    background-image: radial-gradient(circle at top right, rgb(209, 136, 255), transparent), radial-gradient(circle at 20% 80%, rgb(125, 218, 255), transparent);
}

body.darkmode canvas {
    background-color: #000;
    background-image: radial-gradient(circle at top right, rgba(157, 0, 255, 0.15), transparent), radial-gradient(circle at 20% 80%, rgba(0, 183, 255, 0.15), transparent);
}
</style>