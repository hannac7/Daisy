AFRAME.registerComponent('bounce-on-click', {
    init: function () {
      var el = this.el;
      el.addEventListener('click', function () {
        el.setAttribute('animation__bounce', {
          property: 'position',
          to: `${el.object3D.position.x} ${el.object3D.position.y + 0.5} ${el.object3D.position.z}`,
          dur: 200,
          dir: 'alternate',
          loop: 2,
          easing: 'easeOutQuad'
        });
      });
    }
  });

