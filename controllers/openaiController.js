const generateImage = async (req, res) => {
  try {
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error in generateImage function : ", error);
  }
};

module.exports={generateImage}