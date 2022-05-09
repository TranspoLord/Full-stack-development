/* GET travel view */
const travel = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Travel';
    res.render('trave', { title: pageTitle});
};

module.exports = {
    travel
};