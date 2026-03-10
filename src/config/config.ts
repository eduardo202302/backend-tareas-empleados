import dotenv from 'dotenv';

dotenv.config();

interface Config {
  puerto: number;
  nodeEnv: string;
}

const config: Config = {
  puerto: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || "development",
};

export default config;
