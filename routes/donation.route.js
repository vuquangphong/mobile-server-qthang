const router = require("express").Router();
const donationCtrl = require("../controllers/donation.controller");

router.get("/", donationCtrl.getAllDonations);

router.post("/", donationCtrl.createDonation);

router.delete("/:id", donationCtrl.deleteDonationById);

router.delete("/", donationCtrl.deleteAllDonations);

module.exports = router;
