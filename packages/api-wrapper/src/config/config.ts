import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

interface Config {
  OPENWEATHER_API_KEY: string | null;
}

export const config: Config = {
  OPENWEATHER_API_KEY: process.env['OPENWEATHER_API_KEY'] || null,
};
