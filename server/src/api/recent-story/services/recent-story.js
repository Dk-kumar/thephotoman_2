'use strict';

/**
 * recent-story service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::recent-story.recent-story');
