"use strict";
(() => {
var exports = {};
exports.id = 587;
exports.ids = [587];
exports.modules = {

/***/ 7768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "firebase-admin"
const external_firebase_admin_namespaceObject = require("firebase-admin");
var external_firebase_admin_default = /*#__PURE__*/__webpack_require__.n(external_firebase_admin_namespaceObject);
;// CONCATENATED MODULE: ./lib/firebase/admin.ts

const serviceAccount = __webpack_require__(377);
try {
    external_firebase_admin_default().initializeApp({
        credential: external_firebase_admin_default().credential.cert(serviceAccount)
    });
    console.log("Initialized.");
} catch (error) {
    /*
   * We skip the "already exists" message which is
   * not an actual error when we're hot-reloading.
   */ if (!/already exists/u.test(error.message)) {
        console.error("Firebase admin initialization error", error.stack);
    }
}
/* harmony default export */ const admin = ((external_firebase_admin_default()));

;// CONCATENATED MODULE: ./pages/api/getReading.ts

async function handler(req, res) {
    const firestore = admin.firestore();
    if (req.method === "GET") {
        let data = await firestore.collection("reading").doc("ramesh").get();
        res.status(200).json(data.data());
    } else res.status(200).json({
        reading: 0
    });
};


/***/ }),

/***/ 377:
/***/ ((module) => {

module.exports = JSON.parse('{"type":"service_account","project_id":"water-authority-ddd3c","private_key_id":"377c8b4edc284340f7018e0a4fd8e44f7f164068","private_key":"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCw3+WikAbzw4Q9\\nqBQ9rChRGSnzETRCFrszn4e9ABG18ZD/0vp1B316R6MeNukGB8p2Pm/mf0/fnUD1\\nOkt5gJlQErLE2VUTWcAsoeRn6Uju+4pGLKyam/WxDHgGNdvGz9cD29qUA7umO+lr\\n8BkEZoe1c/quKf0J6aXgCEFIW32PtHcOzVuimBnsT+q3gdiU9KJlMbUxGE9rusmP\\nmryMwNyWGjRQQHqKalKpxZxHzyUT9h7SglkCyk28+c2JkYJq6OFP4G3ZgMq0dDBA\\nQ0FEPg8BAlwIfQC2bk+5B8AL59DZVno4H6Frp8qoXjxB2h2qjhDK+3tCxrlmDh/E\\nezQcUYClAgMBAAECggEAU2s1hYcCEGOM8ftcmH2igiUpGL9rcyP/ZGh//06SC8qD\\nhXQ+tYUz08EHmI9zNWnlPgFSi1ZOGHu1EDNPN13EcPRwpdCOhFLXBPXRoIRw5m1y\\nGIinWz/lD3x++wbZwZlyohpFq3tbPBqTi1mwotesd5Lcjtm0wsEUf2XFTFgCDwzW\\nI8rgHVqQmyqKxnotAc+mfKfdVeMsMi/KsagDeUQTjk6pZn9yx28gf1E+yQ/sLCuk\\nuN3oRAJDDift4V7NjqopjnXFLDWnh8u64p19yetuz6yl9Gflfyn+UMsKPlDL5+rC\\nCn98Dv7Spt/M802TErIBac5XDl7jIy8Yi0gvK3WxfQKBgQD2KY7m+opMX/leKHHP\\nH7mr5MphpmcfZvwiYuZaP1kw7DX3L7JguQCzLgUqjc3Lax29Fu2ns4wH/mf9Ucvj\\nOMNSfzYKq9/G7Oa1nlq6Gm2WgXDGFSZP/nyqqsm3n/y9EG4618TqPWQ6UpEQmEL1\\nVrs8piv4xf/RWwTs0QC8YO6uEwKBgQC38Xf4IyY2H6wMbAlwrmopZO2VcDvojiIG\\npnEBeqOFPy36rSQzOJZB3TAQo1SeixaTNRpaPvKLz1Mwo4leP/jp/ZphcGlEqw8i\\nTms4dfXvIlriOxTyEwNMfnLy3ixfq5lCRemj0iG5lXscNwhVRg6+FMLp0hxcGn0p\\nsDHRuRONZwKBgQDveBBPvU2K7Ra/NaM5tog+o60KAAJz9xCzNvkWtGfFAxWgqWLj\\nWzZGGS/nbNnV2ReuGr8JlM5V/HUXZ1psao0BFUXyba+dalsqNanXP9x6POQDnxGN\\nYmnO8aSYoOgS2QgS8FLc+OonHqmGtkj1OPGfF5zRP3UVKnGJG+2WVMn8xwKBgHzY\\nXkXDjY7UplB0D2A0cQeRYhO4bmDj/0ImO7L2SwAIJqvqUhSVxp4Dgzj3slo9KuBU\\n/YLdEIBGAj+T74tRvh8KqnqR8lDSDV6KfQmAPqDE34yG7ytyLh4AAQLIOrPgYw/x\\nJaez2oH8a+d1jqlZ+G2Y58YNfoQg0my2Eso2ZIfnAoGAFisdJSkb5OW8xdLKYL6L\\ns+4Q9zYu+V0OfHoYKjAgtZGpTJd5ELPtqNmDXMgNZ8fwp0mAINO/ZVLPcbSyVoKd\\nxLTBxQZGLtFcysVWUxa8dkRiCjN3THGPky9ixBD5gn4zc2JIiLCAxeE/MDybnjh/\\nfb0vH0KwfwQRQ4Q0JlmWFXQ=\\n-----END PRIVATE KEY-----\\n","client_email":"firebase-adminsdk-au3j5@water-authority-ddd3c.iam.gserviceaccount.com","client_id":"109844709035786065717","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-au3j5%40water-authority-ddd3c.iam.gserviceaccount.com"}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7768));
module.exports = __webpack_exports__;

})();