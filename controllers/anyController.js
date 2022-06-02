class AnyController {
    
    async method(req, res) {
        try {

            return res.json()
        } catch (e) {

            return res.status(400).json(e)
        }
    }

}

module.exports = new AnyController()