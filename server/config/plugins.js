module.exports = ({ env }) => ({
    "vercel-deploy": {
      enabled: true,
      config: {
        deployHook:
          "https://api.vercel.com/v1/integrations/deploy/prj_xNSTX6SA9eTbpT4ZElt74qPJPswn/Z3zDDwQLlo",
        apiToken: "FeocPIkwQ19oqpIYkfgQ3PLm",
        appFilter: "thephotoman-2",
        teamFilter: "team_GQhbIfDWT1QVdgFUYiEVUncF",
        roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
      },
  
    },
  });
  