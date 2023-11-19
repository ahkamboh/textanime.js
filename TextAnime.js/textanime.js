class TextAnimator {
  constructor(texts, containerSelector, speed = 5000, animationName = 'fadeInOut') {
    this.texts = texts;
    this.containerSelector = containerSelector;
    this.containers = document.querySelectorAll(containerSelector);
    this.currentText = 0;
    this.speed = speed;
    this.intervalId = null;
    this.animationName = animationName;
    this.styleElement = null;
    this.setAnimationStyle();
  }

  changeText() {
    const text = this.texts[this.currentText];
    const letters = text.split('');
    
    Array.from(this.containers).forEach(container => {
      container.innerHTML = '';
      letters.forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.animationDelay = `${index * 0.1}s`;
        container.appendChild(span);
      });
    });
  
    this.currentText = (this.currentText + 1) % this.texts.length;
  }

  start() {
    this.changeText();
    this.intervalId = setInterval(() => this.changeText(), this.speed);
  }

  setSpeed(speed) {
    this.speed = speed;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.start();
    }
    this.setAnimationStyle();
  }

  setContainer(containerSelector) {
    this.containerSelector = containerSelector;
    this.containers = document.querySelectorAll(containerSelector);
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.start();
    }
    this.setAnimationStyle();
  }

  setAnimationStyle() {
    // Remove old style element if it exists
    if (this.styleElement) {
      document.head.removeChild(this.styleElement);
    }

    // Create new style element
    this.styleElement = document.createElement('style');
    this.styleElement.textContent = `
      ${this.containerSelector} span {
        opacity: 0;
        animation: ${this.animationName} ${this.speed}ms forwards;
      }
    `;

    // Append new style element to document head
    document.head.appendChild(this.styleElement);
  }

  setAnimation(animationName) {
    this.animationName = animationName;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.start();
    }
    this.setAnimationStyle();
  }
}

// Usage:
// const animator = new TextAnimator(['Courses', 'Programs', 'Features'], '.fade-text-class');
// animator.start();
// animator.setAnimation('slideIn'); // Change animation to 'slideIn'
// animator.setSpeed(3000); // Change speed to 3 seconds
// animator.setContainer('.new-container-class'); // Change container to elements with class 'new-container-class'
