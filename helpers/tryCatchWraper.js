const tryCatchWrapper = async (func) => {
  try {
    return await func;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = tryCatchWrapper;
