const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPEN_API_KEY,
});

const generateImage = async (req, res) => {
  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: "A cute baby sea otter",
      n: 1,
      size: "1024x1024",
    });
    const imageURL = response.data.data[0].url;
    return res.status(200).json({ success: true, data: imageURL });
  } catch (error) {
    console.log(error);
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
    res
      .status(400)
      .json({ success: false, error: "Image could not be generated!" });
  }
};

module.exports = generateImage;
