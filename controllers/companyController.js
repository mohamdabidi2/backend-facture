const Company = require('../models/Company');

exports.getCompany = async (req, res) => {
    try {
        const company = await Company.findOne();
        res.json(company || {});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateCompany = async (req, res) => {
    try {
        let company = await Company.findOne();
        if (company) {
            company = await Company.findByIdAndUpdate(company._id, req.body, { new: true });
        } else {
            company = new Company(req.body);
            await company.save();
        }
        res.json(company);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
