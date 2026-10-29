import * as fs from 'fs';
import { json } from 'stream/consumers';
import { file } from 'zod/v4';

export function readJson<T = any>(filepath: string): T {
    return JSON.parse(fs.readFileSync(filepath, 'utf-8'));
}