const Store = require('../models/stores.models.js')

const controller = {
    testRoute: (req, res) => {
        res.send("Our express api server is now sending this over to the browser");
    },

    getAll: (req, res) => {
        Store.find()
            .then((allstores) => {
                res.json({ store: allstores });
            })
            .catch((err) =>
                res.status(500).json({ message: "whoops - something is not working", error: err })
            );
    },

    create: (req, res) => {
        Store.create(req.body)
            .then((newlyCreatedstore) => {
                res.json({ store: newlyCreatedstore });
            })
            .catch((err) =>
                res.status(500).json({ message: "whoops - something is not working", error: err })
            );
    },

    getOne: (req, res) => {
        Store.findOne({ _id: req.params.id })
            .then((onestore) => {
                res.json({ store: onestore });
            })
            .catch((err) =>
                res.status(500).json({ message: "whoops - something is not working", error: err })
            );
    },

    update: (req, res) => {
        Store.findOneAndUpdate({ _id: req.params.id }, req.body, { 
            new: true,
            // BLACKBELT
            runValidators: true
        })
            .then((updatedstore) => {
                res.json({ store: updatedstore });
            })
            .catch((err) =>
                res.status(500).json({ message: "whoops - something is not working", error: err })
            );
    },

    delete: (req, res) => {
        Store.deleteOne({ _id: req.params.id })
            .then((result) => {
                res.json({ result });
            })
            .catch((err) =>
                res.status(500).json({ message: "whoops - something is not working", error: err })
            );
    }
}

module.exports = controller