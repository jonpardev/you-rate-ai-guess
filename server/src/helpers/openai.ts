import { Configuration, OpenAIApi } from "openai";
import { OPENAI_KEY, OPENAI_ORG } from "../config/env.js";

const configuration = new Configuration({
    organization: `${OPENAI_ORG}`,
    apiKey: `${OPENAI_KEY}`,
});

const openai = new OpenAIApi(configuration);

export default openai;