const cloudinary = require('cloudinary').v2;

const uploadImage = async (req, res) => {
    try {
        const imageUrl = req.file.path;

        if (!imageUrl) {
            return res.status(400).json({
                success: false,
                error_code: 400,
                message: "Image URL is required in the request body.",
                data: null
            });
        }

        // Upload the image to Cloudinary
        cloudinary.uploader.upload(imageUrl, { public_id: req.file.originalname }, function(error, result) {
            if (error) {
                return res.status(500).json({
                    success: false,
                    error_code: 500,
                    message: error.message,
                    data: null
                });
            }

            console.log(result);

            // Send the Cloudinary upload result in the response
            return res.status(200).json({
                success: true,
                error_code: 200,
                message: "Image uploaded successfully.",
                data: { uploadedImage: result }
            });
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error_code: 500,
            message: err.message,
            data: null
        });
    }
};

module.exports = { uploadImage };
