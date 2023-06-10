const express = require('express');
const router = express.Router();
const item = require('../models/item')
router.get('/', (req, res) => {
    item.find().then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
router.get('/:ID', (req, res) => {
    item.findOne({
        where: {
          qr_id: req.params.ID,
        }
      }).then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
router.post('/', (req, res) => {
    const itemToBeSaved = new item({
        name: req.body.name,
        qr_id: req.body.QRID,
        model: req.body.model,
        serial_number: req.body.serialNumber,
        quantity: req.body.quantity,
        functionality: req.body.functionality,
        organization_name: req.body.organizationName,
        focal_person_name: req.body.focalPersonName,
        focal_person_number: req.body.focalPersonNumber,
        updatedAt: Date.now(),
        createdAt:Date.now()

    });
    itemToBeSaved.save().then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
});

router.delete('/:ID', (req, res) => {
    item.remove({ _id: req.params.ID }).then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
router.patch('/:ID', (req, res) => {
    item.updateOne({ _id: req.params.ID }, req.body).then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
module.exports = router;