/** 
 * we want to publish global ambient types for hajimari,
 * so as per this helpful stack overflow answer:
 * 
 * https://stackoverflow.com/a/66951492
 * 
 * we can:
 * 1. create this file as the new entry point for types
 * 2. use triple-slash reference to bring in ambient types from globals
 * 3. re-export compiled types from dist
 * 4. update package.json and tsconfig accordingly
 * */
/// <reference types="./globals" />

export * from './dist';