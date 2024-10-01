const express = require('express');
const router = express.Router();
const Offense = require('../models/Offense');

// Route to get offense by section number
router.get('/:section', async (req, res) => {
  try {
    const section = req.params.section;
    const offense = await Offense.findOne({ section });

    if (!offense) {
      return res.status(404).json({ msg: 'Offense not found' });
    }
    
    res.json(offense);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
