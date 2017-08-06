var theater = theaterJS()

theater
  .on('type:start, erase:start', function () {
    theater.getCurrentActor().$element.classList.add('hero-text--typing')
  })
  .on('type:end, erase:end', function () {
    theater.getCurrentActor().$element.classList.remove('hero-text--typing')
  })
  .on('type:start, erase:start', function () {
    if (theater.getCurrentActor().name === 'hero-text') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  })

theater
  .addActor('hero-text-content', { speed: .9, accuracy: 1 })
  .addScene('hero-text-content: Hi! I\'m <a target="_blank" href="resume.pdf"><span style="color:#3769ba">Jintana Cunningham</span></a>', 600, ', <br> a product designer.', 600, function (done) { document.getElementById("hero-text").style.background = 'black'; done(); }, -17, 'front-end developer.', 600,function (done) { document.getElementById("hero-text").style.background = 'white'; done(); })
  .addScene(theater.replay.bind(theater))
;
