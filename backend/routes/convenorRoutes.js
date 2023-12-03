const express = require("express");
const { verifyConvenor } = require("../middlewares/convenorAuth");
const { studentAuthentication } = require("../middlewares/studentAuth");
const convenorController = require("../controllers/convenorControllers");

convenorRouter = express.Router();
convenorRouter.post(
  "/create-event",
  studentAuthentication,
  verifyConvenor,
  convenorController.createEvent
);
convenorRouter.post(
  "/approve-request",
  studentAuthentication,
  verifyConvenor,
  convenorController.approveRequest
);
convenorRouter.post(
  "/reject-request",
  studentAuthentication,
  verifyConvenor,
  convenorController.rejectRequest
);

convenorRouter.get(
  "/get-club-members/:id",
  studentAuthentication,
  verifyConvenor,
  convenorController.getClubMembers
);
convenorRouter.get(
  "/get-past-requests/:id",
  studentAuthentication,
  verifyConvenor,
  convenorController.getPastRequests
);
convenorRouter.get(
  "/get-pending-requests/:id",
  studentAuthentication,
  verifyConvenor,
  convenorController.getPendingRequests
);

convenorRouter.patch(
  "/edit-event/:id",
  studentAuthentication,
  verifyConvenor,
  convenorController.editEvent
);
convenorRouter.delete(
  "/delete-event/:id",

  convenorController.deleteEvent
);
convenorRouter.delete(
  "/remove-clubMember/:id",
  studentAuthentication,
  verifyConvenor,
  convenorController.removeClubMember
);

convenorRouter.patch(
  "/add-club-images/:id",
  studentAuthentication,
  verifyConvenor,
  convenorController.addImages
);

convenorRouter.get(
  "/get-student/:id",
  studentAuthentication,
  convenorController.getStudent
);
convenorRouter.get(
  "/get-club-id",
  studentAuthentication,
  convenorController.getClubId
);

convenorRouter.get(
  "/get-request-details/:id",
  studentAuthentication,
  convenorController.getRequestDetails
);
convenorRouter.post(
  "/add-doc/:id",
  studentAuthentication,
  verifyConvenor,
  convenorController.addDocumentToEvent
);
convenorRouter.get(
  "/get-docs/:id",
  studentAuthentication,
  verifyConvenor,
  convenorController.getDocumentListForEvent
);

module.exports = convenorRouter;
