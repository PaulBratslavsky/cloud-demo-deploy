'use strict';

/**
 * `populate-data` middleware
 */

const populate = {
  metadata: {
    populate: {
      metaImage: {
        populate: true,
        fields: ["url", "name", "alternativeText"],
      },
    }
  },
  blocks: {
    populate: {
    link: {
      populate: true,
    },
    image: {
      populate: true,
    }
    },
  }
}

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In populate-data middleware.');
    ctx.query = {
      populate,
      ...ctx.query,
    }

    await next();
  };
};
