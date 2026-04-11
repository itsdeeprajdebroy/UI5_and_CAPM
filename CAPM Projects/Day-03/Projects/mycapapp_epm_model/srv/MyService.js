module.exports = (srv) => {
    srv.on("vendorsName", (req, res) => {
        return `hey ${req.data.name}`;
    });
};
