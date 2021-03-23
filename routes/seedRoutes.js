const router = require('express').Router()
const { Blog } = require('../models')

router.post('/generalBlog', (req, res) => {
  Blog.destory({where: {} })
  .then(() => {
    Blog.bulkCreate([
      {
        title: 'Did anyone else get a stomach ache?',
        content: "I just bought this Cacti drink and it got me super lit for the first few hours but later that night my stomach was KILLING me.  It's probably because I got the vaccine the same day YOLO. Good thing we only play against the Kings tomorrow.",
        name: 'Steph Curry'
      },
      {
        title: "I gotta get back on tour with y'all",
        content: "Aye Travis now that I'm injured and out for a couple weeks. Let me come on tour with y'all. The last time I was on stage with you and Drake the whole world was going crazy! Let's get it poppin dawg! #theKidFromAkron",
        name: 'LeBron James'
      },
      {
        title: "Let's get another album going",
        content: "I just bought another light 30 mil house last week. Let's make another song so I can pay it off right quick",
        name: 'Drake'
      },
      {
        title: 'Biggest fan from day 1',
        content: "Yo Travis! Let me and a couple of my friends come through and hang with you for a day. It's the least you could do for supporting you all of these years. Much love!",
        name: 'Calum'
      }
    ])
      .then(() => {
        res.sendStatus(200)
      })
      .catch(err => console.log(err))
  })
    .catch(err => console.log(err))
})

module.exports = router



