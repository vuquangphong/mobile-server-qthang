const donationList = require("../data/donationData");

const donationCtrl = {
  getAllDonations: async (req, res) => {
    try {
      return res.status(200).json(donationList);
    } catch (err) {
      return res
        .status(400)
        .json({ msg: "Can not fetch donation list from server.", err });
    }
  },
  createDonation: async (req, res) => {
    try {
      const newDonation = req.body;
      donationList.push({
        ...newDonation,
        id: Number(newDonation.id),
      });
      return res.status(200).json({
        msg: "Create donation successfully!",
      });
    } catch (err) {
      return res
        .status(400)
        .json({ msg: `Can not create donation for some reason. ${err}` });
    }
  },
  deleteDonationById: async (req, res) => {
    try {
      let idx = donationList.findIndex(
        (donation) => donation.id === Number(req.params.id)
      );
      if (idx >= 0) {
        donationList.splice(idx, 1);
      }

      return res.status(200).json(donationList);
    } catch (err) {
      return res
        .status(400)
        .json({ msg: `Can not delete donation for some reason. ${err}` });
    }
  },
  deleteAllDonations: (req, res) => {
    try {
      while (donationList.length > 0) {
        donationList.pop();
      }
      return res.status(200).json(donationList);
    } catch (err) {
      return res
        .status(400)
        .json({ msg: `Can not delete donation for some reason. ${err}` });
    }
  },
};

module.exports = donationCtrl;
