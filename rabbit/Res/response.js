class Res {
    successResponse = (res, data) => {
      return res.json({
        message: "Your email data has been successfully processed",
        status: "success",
        data,
      });
    };
    errorResponse = (res, data) => {
      return res.status(400).json({
        message: "There was a problem sending your data to rabbit-manager",
        status: "fail",
        data,
      });
    };
  }
  
  export default new Res();