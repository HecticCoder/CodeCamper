const express = require("express");
const router = express.Router();
const {
  getBootcamp,
  getBootcamps,
  deleteBootcamp,
  updateBootcamp,
  createBootcamps,
} = require("../controller/bootcamps");

router.route("/").get(getBootcamps).post(createBootcamps);
router
  .route("/:id")
  .get(getBootcamp)
  .delete(deleteBootcamp)
  .put(updateBootcamp);

module.exports = router;
