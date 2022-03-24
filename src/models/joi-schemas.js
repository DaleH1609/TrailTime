import Joi from "joi";

export const IdSpec = Joi.alternatives().try(Joi.string(), Joi.object()).description("a valid ID");

export const UserCredentialsSpec = Joi.object()
  .keys({
    email: Joi.string().email().example("bart@simpson.com").required(),
    password: Joi.string().example("secret").required(),
  })
  .label("UserCredentials");

export const UserSpec = UserCredentialsSpec.keys({
  firstName: Joi.string().example("Bart").required(),
  lastName: Joi.string().example("Simpson").required(),
}).label("UserDetails");

export const UserSpecPlus = UserSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("UserDetailsPlus");

export const UserArray = Joi.array().items(UserSpecPlus).label("UserArray");

export const TrailSpec = Joi.object()
  .keys({
    title: Joi.string().required().example("Ballycotton Cliff Walk"),
    location: Joi.string().required().example("Cork"),
    type: Joi.string().required().example("Walking"),
    latitude: Joi.number().allow("").optional().example(5.32),
    longitude: Joi.number().allow("").optional().example(2.45),
    category: Joi.string().required().example("Easy"),
    traillistid: IdSpec,
  })
  .label("Trail");

  export const TrailSpecPlus = TrailSpec.keys({
    _id: IdSpec,
    __v: Joi.number(),
  }).label("TrailPlus");

  export const TrailArraySpec = Joi.array().items(TrailSpecPlus).label("TrailArray");

  export const TraillistSpec = Joi.object()
  .keys({
    title: Joi.string().required().example("Walking"),
    userid: IdSpec,
    trails: TrailArraySpec,
  })
  .label("Trail list");

  export const TraillistSpecPlus = TraillistSpec.keys({
    _id: IdSpec,
    __v: Joi.number(),
  }).label("Trail list Plus");

  export const TraillistArraySpec = Joi.array().items(TraillistSpecPlus).label("Trail list Array");

  export const JwtAuth = Joi.object()
  .keys({
    success: Joi.boolean().example("true").required(),
    token: Joi.string().example("eyJhbGciOiJND.g5YmJisIjoiaGYwNTNjAOhE.gCWGmY5-YigQw0DCBo").required(),
  })
  .label("JwtAuth");

