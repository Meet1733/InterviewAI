/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://InterviewAI_owner:bHIA6DsYo8jQ@ep-nameless-cake-a1sjedah.ap-southeast-1.aws.neon.tech/InterviewAI?sslmode=require',
    }
};