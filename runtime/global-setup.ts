export default async () => {
    process.env.TEST_START_TIME = new Date().toISOString().replace(/[:.]/g, '-');
  };
  