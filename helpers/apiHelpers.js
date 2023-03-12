const asyncWrapper = (controller) => async (req, res) => {
  try {
    const result = await controller(req, res);
    return result;
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// {
//   return (req, res, next) => {
//     controller(req, res).catch(next);
//   };
// };

module.exports = {
  asyncWrapper,
};
