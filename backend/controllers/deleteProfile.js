exports.deleteProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        await user.remove();

    } catch (e) {

    }
}