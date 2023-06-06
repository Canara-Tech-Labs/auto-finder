const entities = {
  User: {
    name: "User",
    attributes: {
      firstName: {
        type: "string",
        required: true,
        label: "First Name",
        min: 2,
        max: 100,
      },
      lastName: { type: "string", label: "Last Name" },
      email: { type: "string", required: true, unique: true, label: "Email" },
      phone: { type: "string", required: true, unique: true, label: "Phone" },
      password: { type: "string", required: true, hashed: true },
      addreses: { type: ["model"], ref: "UserAddress" },
      roles: { type: ["model"], ref: "Role" },
    },
    routeConfig: {
      readAll: { isProtected: true },
    },
  },
  UserAddress: {
    name: "UserAddress",
    attributes: {
      user: { type: "model", ref: "User", required: true },
      addressLine1: { type: "string", required: true },
      addressLine2: { type: "string" },
      addressLine3: { type: "string" },
      city: { type: "string" },
      state: { type: "string" },
      zip: { type: "string" },
      country: { type: "string" },
    },
  },
  UserDetail: {
    name: "UserDetails",
    attributes: {
      user: { type: "string", required: true },
      dob: { type: "string", required: true },
      gender: { type: "string", required: true },
      height: { type: "number" },
      weight: { type: "number" },
    },
  },

  AutoStands: {
    name: "Venue",
    attributes: {
      name: { type: "string", required: true },
      area: { type: "string", required: true },
      location: { type: "object", default: {} },
    },
  },

  Role: {
    name: "Role",
    attributes: {
      title: { type: "string", required: true },
      settings: { type: "object", default: {} },
      status: { type: "string", default: "active" },
    },
    constrains: {
      unique: [{ title: 1, "settings.of": 1 }],
    },
    routeConfig: {
      "*": { isProtected: true },
    },
  },
  Access: {
    name: "Access",
    attributes: {
      role: { type: "model", ref: "Role" },
      user: { type: "model", ref: "User" },
      // role: { type: "model", required: true, ref: "Role" },
      path: { type: "string", required: true },
      method: { type: "string", required: true },
      permission: { type: "boolean", default: true },
      priority: { type: "number", default: 1 },
    },
    routeConfig: {
      "*": { isProtected: true },
    },
  },
};
export default entities;
