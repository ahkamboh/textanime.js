class TextAnimator {
    constructor(texts, containerClass, speed = 5000) {
      this.texts = texts;
      this.containers = document.getElementsByClassName(containerClass);
      this.currentText = 0;
      this.speed = speed;
      this.intervalId = null;
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
    }

    setContainer(containerClass) {
      this.containers = document.getElementsByClassName(containerClass);
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.start();
      }
    }
}
  
// Usage:
// const animator = new TextAnimator(['Courses', 'Programs', 'Features'], 'fade-text-class');
// animator.start();
// animator.setSpeed(3000); // Change speed to 3 seconds
// animator.setContainer('new-container-class'); // Change container to elements with class 'new-container-class'
