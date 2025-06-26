import React, { useRef, useEffect } from 'react';

const MarioGame = () => {
  const canvasRef = useRef(null);
  const requestRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const width = 400;
    const height = 200;
    canvas.width = width;
    canvas.height = height;

    const player = {
      x: 50,
      y: height - 20,
      width: 16,
      height: 16,
      vy: 0,
      jumping: false,
    };

    const gravity = 0.5;
    const ground = height - 4;
    const obstacles = [];
    let frame = 0;
    let running = true;

    const handleKeyDown = (e) => {
      if ((e.code === 'Space' || e.code === 'ArrowUp') && !player.jumping) {
        player.vy = -8;
        player.jumping = true;
      }
      if (e.code === 'ArrowLeft') {
        player.x -= 5;
      }
      if (e.code === 'ArrowRight') {
        player.x += 5;
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    const spawnObstacle = () => {
      obstacles.push({ x: width, y: ground - 16, width: 16, height: 16 });
    };

    const detectCollision = (rect1, rect2) => {
      return (
        rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y
      );
    };

    const update = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      if (frame % 120 === 0) spawnObstacle();

      player.vy += gravity;
      player.y += player.vy;
      if (player.y > ground - player.height) {
        player.y = ground - player.height;
        player.vy = 0;
        player.jumping = false;
      }

      ctx.fillStyle = '#5c94fc';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#6ab04c';
      ctx.fillRect(0, ground, width, height - ground);

      ctx.fillStyle = '#ff4757';
      ctx.fillRect(player.x, player.y, player.width, player.height);

      ctx.fillStyle = '#57606f';
      for (let i = obstacles.length - 1; i >= 0; i--) {
        const obs = obstacles[i];
        obs.x -= 2;
        ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
        if (detectCollision(player, obs)) {
          running = false;
        }
        if (obs.x + obs.width < 0) {
          obstacles.splice(i, 1);
        }
      }

      if (running) {
        requestRef.current = requestAnimationFrame(update);
      } else {
        ctx.fillStyle = '#000';
        ctx.fillText('Game Over', width / 2 - 30, height / 2);
      }
    };

    requestRef.current = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(requestRef.current);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div style={{ marginTop: '20px' }}>
      <canvas ref={canvasRef} style={{ border: '1px solid black' }} />
    </div>
  );
};

export default MarioGame;
