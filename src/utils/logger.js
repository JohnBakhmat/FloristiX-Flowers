import logdna from "@logdna/logger";
import { Browser as Logtail } from "@logtail/js";
//LogTail
const logtail = new Logtail("zBwCe3qtyerAMGX1EuU3svgH");

const logtailLog = (data) => {
  logtail.info(data);
  console.info(data);
};
//LogDNA
const loggerKey = `38877c7a58d9d473a0836f4bfab5fc1a`;
const options = {
  app: "Floristix",
  env: "debug",
};
const logger = logdna.createLogger(loggerKey, options);
const logdnaLog = (data) => {
  logger.log(data);
};

export { logdnaLog, logtailLog };
