/** @typedef {import('eslint').ESLint} ESLint */
/** @typedef {import('eslint').ESLint.LintResult} LintResult */
/** @typedef {import('./options').Options} Options */
/** @typedef {() => Promise<void>} AsyncTask */
/** @typedef {(files: string|string[]) => Promise<LintResult[]>} LintTask */
/** @typedef {{threads: number, ESLint: ESLint, eslint: ESLint, lintFiles: LintTask, cleanup: AsyncTask}} Linter */
/** @typedef {import('jest-worker').Worker & {lintFiles: LintTask}} Worker */
/**
 * @param {Options} options
 * @returns {Linter}
 */
export function loadESLint(options: Options): Linter;
/**
 * @param {string|undefined} key
 * @param {number} poolSize
 * @param {Options} options
 * @returns {Linter}
 */
export function loadESLintThreaded(
  key: string | undefined,
  poolSize: number,
  options: Options
): Linter;
/**
 * @param {string|undefined} key
 * @param {Options} options
 * @returns {Linter}
 */
export default function getESLint(
  key: string | undefined,
  { threads, ...options }: Options
): Linter;
export type ESLint = import('eslint').ESLint;
export type LintResult = import('eslint').ESLint.LintResult;
export type Options = import('./options').Options;
export type AsyncTask = () => Promise<void>;
export type LintTask = (files: string | string[]) => Promise<LintResult[]>;
export type Linter = {
  threads: number;
  ESLint: ESLint;
  eslint: ESLint;
  lintFiles: LintTask;
  cleanup: AsyncTask;
};
export type Worker = import('jest-worker').Worker & {
  lintFiles: LintTask;
};
