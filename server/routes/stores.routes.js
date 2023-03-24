const StoreController = require('../controllers/stores.controllers')

const routes = (app) => {
    app.get("/api", StoreController.testRoute);
    app.get("/api/stores", StoreController.getAll);
    app.post("/api/stores", StoreController.create);
    app.get("/api/stores/:id", StoreController.getOne);    
    app.put("/api/stores/:id", StoreController.update);
    app.delete("/api/stores/:id", StoreController.delete);
};

module.exports = routes